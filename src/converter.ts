import type {RemarkSetting, Render, RenderContext, IMarkPlugins} from './types'
import type {Schema} from 'hast-util-sanitize'
import type {Processor} from 'unified'
import remarkParse from 'remark-parse'
import remarkDirective from 'remark-directive'
import remarkRehype from 'remark-rehype'
import rehypeRaw from './extensions/raw/lib/index'
import rehypeSanitize from 'rehype-sanitize'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'
import {defaultSchema} from 'hast-util-sanitize'
import {unified} from 'unified'
import imarkHeadingId from './extensions/heading-id/index'
import imarkDirective from './extensions/directive/index'
import imarkToc from './extensions/toc/index'
import imarkGfm from './extensions/gfm/index'
import imarkDataMeta from './extensions/data-meta/index'
import imarkAbc from './extensions/abc/index'
import imarkUml from './extensions/uml/index'
import imarkEcharts from './extensions/echarts/index'
import imarkMermaid from './extensions/mermaid/index'
import imarkRailroad from './extensions/railroad/index'
import imarkWaveDrom from './extensions/wavedrom'
import imarkKatex from './extensions/katex'

// @ts-ignore
import remarkGridTable from '@adobe/remark-gridtables'
import {
  TYPE_TABLE,
  mdast2hastGridTablesHandler
  // @ts-ignore
} from '@adobe/mdast-util-gridtables'

type rehypeOptons = import('remark-rehype').Options
export interface RehypeOptions extends rehypeOptons {
  outFormat?: boolean
}

const defSchema: Schema = defaultSchema
if (defSchema.attributes) {
  defSchema.attributes['*'].push('data*')
  defSchema.attributes['iframe'] = [
    'src',
    'width',
    'height',
    'frameBorder',
    'allow',
    'allowFullScreen'
  ]
  defSchema.attributes['link'] = ['rel', 'href']
  defSchema.attributes['style'] = ['type']
}
if (defSchema.tagNames) defSchema.tagNames.push('style', 'iframe', 'link')

/**
 * Converer of markdown to HTML
 *
 * @class Converter
 */
class Converter {
  /**
   * Imark's plugin array
   *
   * @type {IMarkPlugins}
   */
  plugins: IMarkPlugins
  /**
   * Sanitize options
   *
   * @type {Schema}
   */
  schema: Schema
  /**
   * Sanitize method
   *
   * @type {?(schema: Schema) => Schema}
   */
  sanitize?: (schema: Schema) => Schema

  /**
   * Creates an instance of Converter.
   *
   * @constructor
   */
  constructor() {
    this.schema = defSchema
    this.schema.clobberPrefix = 'imark-'
    this.plugins = {
      head: imarkHeadingId(),
      meta: imarkDataMeta(),
      directive: imarkDirective(),
      gfm: imarkGfm(),
      toc: imarkToc(),
      abc: imarkAbc(),
      uml: imarkUml(),
      echarts: imarkEcharts(),
      mermaid: imarkMermaid(),
      railroad: imarkRailroad(),
      wavedrom: imarkWaveDrom(),
      katex: imarkKatex()
    }
  }

  setting(name: string, rs: RemarkSetting) {
    if (name in this.plugins && this.plugins[name].setting) {
      this.plugins[name].setting(rs)
    }
  }

  /**
   * Convert markdown to html with additional renders
   *
   * @param {string} v
   * @param {RehypeOptions} [options]
   * @returns {Promise<RenderContext>}
   */
  async toHTML(v: string, options?: RehypeOptions): Promise<RenderContext> {
    // Allow class names by default
    let schema = this.schema
    if (!schema) {
      schema = defSchema
    }
    if (schema.attributes) {
      schema.attributes['*'].push('className')
    }
    if (schema.clobber) {
      const index = schema.clobber.indexOf('id', 0)
      if (index > -1) {
        schema.clobber.splice(index, 1)
      }
    }
    if (typeof this.sanitize === 'function') {
      schema = this.sanitize(schema)
    }

    let processor: Processor = unified().use<any, any, any>(remarkParse)
    processor = processor.use<any, any, any>(remarkGridTable)
    processor = processor.use<any, any, any>(remarkDirective)
    if (this.plugins) {
      for (const plugin of Object.values(this.plugins)) {
        if (plugin.remark) processor = plugin.remark(processor)
      }
    }
    processor = processor.use<any, any, any>(remarkRehype, {
      allowDangerousHtml: true,
      clobberPrefix: schema.clobberPrefix,
      handlers: {
        [TYPE_TABLE]: mdast2hastGridTablesHandler()
      },
      ...options
    })

    processor = processor.use<any, any, any>(rehypeRaw)
    if (this.plugins) {
      for (const plugin of Object.values(this.plugins)) {
        if (plugin.rehype) processor = plugin.rehype(processor)
      }
    }
    processor = processor.use<any, any, any>(rehypeSanitize, schema)
    const renders: Record<string, Render> = {}
    if (this.plugins) {
      for (const [key, plugin] of Object.entries(this.plugins)) {
        if (plugin.render) renders[key] = plugin.render
      }
    }

    if (options?.outFormat) {
      processor = processor.use<any, any, any>(rehypeFormat)
    }
    return processor
      .use(rehypeStringify, {allowDangerousHtml: true})
      .process(v)
      .then((file) => {
        return {html: file.toString(), renders: renders}
      })
  }
}

export default Converter
