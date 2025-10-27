import type { RenderOptionsKey, RenderContext } from './types'
import Converter from './converter'
import { loadStyle } from './public/utils'
// @ts-ignore
import gCss from './css/index.css?inline'

export type RehypeOptions = import('./converter').RehypeOptions
export type Schema = import('hast-util-sanitize').Schema
export type RenderOptions = import('./types').RenderOptions
export type RemarkSetting = import('./types').RemarkSetting
export type IMarkPlugin = import('./types').IMarkPlugin
export type IMarkPlugins = import('./types').IMarkPlugins

/**
 * IMark Options
 */
export interface IMarkOptions {
  /**
   * The necessary settings for parsing markdown,
   * includes KatexDelimiters, GfmOptions, EmojiOptions.
   */
  remark?: RemarkSetting
  /**
   * The necessary options for remark rehype
   */
  rehype?: RehypeOptions
  /**
   * The necessary options for render html,
   * inlcudes KatexOptions, TocOptions, MermaidConfig, EChartsInitOpts,
   * AbcVisualParams, UmlOptions, WaveDromOptions, VegaEmbedOptions.
   */
  render?: RenderOptions
}

type IMarkPluginKey = keyof IMarkPlugin

function hasMarkPlugin(obj: object): boolean {
  if (typeof obj === 'object') {
    const markPluginKeys = Object.keys({} as IMarkPlugin) as Array<IMarkPluginKey>
    for (const k of markPluginKeys) {
      if (k in obj) return true
    }
  }
  return false
}

/**
 * IMark is a markdown converter's external interface calling class
 *
 * @class IMark
 */
class IMark {
  /**
   * The markdown converter
   *
   * @type {Converter}
   */
  converter: Converter

  /**
   * Creates an instance of IMark.
   *
   * @constructor
   */
  constructor() {
    this.converter = new Converter()
  }

  /**
   * Use sanitize options or imark plugins
   *
   * @param {Schema | IMarkPlugins} [o]
   *   Sanitize schema or imark plugins.
   * @returns {IMark}
   *   IMark self.
   */
  use(o: Schema | IMarkPlugins): IMark {
    let isPlugin = false
    for (const v of Object.values(o)) {
      if (hasMarkPlugin(v)) {
        isPlugin = true
        break
      }
    }
    if (!isPlugin) {
      this.converter.schema = { ...this.converter.schema, ...o }
    } else {
      const plugins = o as IMarkPlugins
      this.converter.plugins = { ...this.converter.plugins, ...plugins }
    }
    return this
  }

  /**
   * Set the necessary settings for parsing markdown
   *
   * @param {string} name
   *   IMark plugin name
   * @param {RemarkSetting} [rs]
   *   The configuration required for the imark plugin corresponding to the name
   * @returns {IMark}
   *   IMark self.
   */
  setting(name: string, rs: RemarkSetting): IMark {
    this.converter.setting(name, rs)
    return this
  }
  /**
   * Parse markdown to html with additional renders
   *
   * @param {string} md
   *   Text of markdown
   * @param {RemarkSetting} [remarkOptions]
   *   The configuration required for parse markdown
   * @param {RehypeOptions} [rehypeOptions]
   *   The configuration required for remark rehype
   * @returns {Promise<RenderContext>}
   *   Promise of RenderContext
   */
  parse(md: string, remarkOptions?: RemarkSetting, rehypeOptions?: RehypeOptions): Promise<RenderContext> {
    return this.converter.toHTML(md, remarkOptions, rehypeOptions)
  }

  /**
   * Render markdown to a html element
   *
   * @param {string} md
   *   Text of markdown
   * @param {HTMLElement} [root]
   *   The html element for render
   * @param {IMarkOptions} [imarkOptions]
   *   The configuration required where parse markdown or remark rehype or render html
   */
  render(md: string, root?: HTMLElement, imarkOptions?: IMarkOptions) {
    if (!root) {
      root = document.body
    }
    this.parse(md, imarkOptions?.remark, imarkOptions?.rehype).then(({ html, renders }) => {
      loadStyle('imarks-css', gCss)
      const parent = document.createElement('div')
      parent.classList.add('imarks')
      root.appendChild(parent)
      parent.innerHTML = html
      if (!renders) return

      for (const [k, render] of Object.entries(renders)) {
        if (!render) continue

        const renderOptions = imarkOptions?.render
        const renderOption = renderOptions ? renderOptions[k as RenderOptionsKey] : undefined
        ;(async (e) => {
          render(e, renderOption)
        })(parent)
      }
    })
  }
}

const imark = new IMark()
export default imark
