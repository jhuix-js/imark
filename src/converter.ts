import type { RemarkSetting, Render, RenderContext, Handlers, IMarkPlugins } from './types'
import type { Schema } from 'hast-util-sanitize'
import type { Processor } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeRaw from './extensions/raw/lib/index'
// import rehypeSanitize from 'rehype-sanitize'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'
import { defaultSchema } from 'hast-util-sanitize'
import { unified } from 'unified'
import imarkDirective from './extensions/directive'
import imarkGirdTables from './extensions/girdtables'
import imarkEmoji from './extensions/emoji'
import imarkKatex from './extensions/katex'
import imarkToc from './extensions/toc'
import imarkGfm from './extensions/gfm'
import imarkDataMeta from './extensions/data-meta'
import imarkAbc from './extensions/abc'
import imarkUml from './extensions/uml'
import imarkEcharts from './extensions/echarts'
import imarkMermaid from './extensions/mermaid'
import imarkRailroad from './extensions/railroad'
import imarkWaveDrom from './extensions/wavedrom'
import imarkVega from './extensions/vega'

type rehypeOptons = import('remark-rehype').Options
export interface RehypeOptions extends rehypeOptons {
  /**
   * Whether format output after remark rehype.
   * @type {boolean}
   */
  outFormat?: boolean
}

const defSchema: Schema = defaultSchema
if (defSchema.attributes) {
  defSchema.attributes['*'].push('data*')
  defSchema.attributes['iframe'] = ['src', 'width', 'height', 'frameBorder', 'allow', 'allowFullScreen']
  defSchema.attributes['link'] = ['rel', 'href']
  defSchema.attributes['style'] = ['type']
  if ('span' in defSchema.attributes) {
    defSchema.attributes.span.push('role', 'ariaLabel')
  } else {
    defSchema.attributes.span = ['role', 'ariaLabel']
  }
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
      meta: imarkDataMeta(),
      toc: imarkToc(),
      girdtables: imarkGirdTables(),
      directive: imarkDirective(),
      emoji: imarkEmoji(),
      gfm: imarkGfm(),
      katex: imarkKatex(),
      abc: imarkAbc(),
      uml: imarkUml(),
      echarts: imarkEcharts(),
      mermaid: imarkMermaid(),
      railroad: imarkRailroad(),
      wavedrom: imarkWaveDrom(),
      vega: imarkVega()
    }
  }

  setting(name: string, remarkSetting: RemarkSetting) {
    if (name in this.plugins && this.plugins[name].setting) {
      this.plugins[name].setting(remarkSetting)
    }
  }

  /**
   * Convert markdown to html with additional renders
   *
   * @param {string} v
   * @param {RemarkSetting} [remarkOptions]
   * @param {RehypeOptions} [rehypeOptions]
   * @returns {Promise<RenderContext>}
   */
  async toHTML(v: string, remarkOptions?: RemarkSetting, rehypeOptions?: RehypeOptions): Promise<RenderContext> {
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
    let hs: Handlers = {}
    if (this.plugins) {
      for (const plugin of Object.values(this.plugins)) {
        if (plugin.setting) plugin.setting({ ...remarkOptions })
        if (plugin.remark) processor = plugin.remark(processor)
        if (plugin.handlers) {
          hs = {
            ...hs,
            ...plugin.handlers
          }
        }
      }
    }
    processor = processor.use<any, any, any>(remarkRehype, {
      allowDangerousHtml: true,
      clobberPrefix: schema.clobberPrefix,
      handlers: hs,
      ...rehypeOptions
    })
    processor = processor.use<any, any, any>(rehypeRaw)
    if (this.plugins) {
      for (const plugin of Object.values(this.plugins)) {
        if (plugin.rehype) processor = plugin.rehype(processor)
      }
    }
    // processor = processor.use<any, any, any>(rehypeSanitize, schema)
    const renders: Record<string, Render> = {}
    if (this.plugins) {
      for (const [key, plugin] of Object.entries(this.plugins)) {
        if (plugin.render) renders[key] = plugin.render
      }
    }
    if (rehypeOptions?.outFormat) {
      processor = processor.use<any, any, any>(rehypeFormat)
    }
    return processor
      .use(rehypeStringify, { allowDangerousHtml: true })
      .process(v)
      .then((file) => {
        return { html: file.toString(), renders: renders }
      })
  }
}

export default Converter
