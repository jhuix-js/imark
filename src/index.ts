import type {IMarkOptionsKey, RenderContext} from './types'
import Converter from './converter'
import {loadStyle} from './public/utils'
// @ts-ignore
import gCss from './css/index.css?inline'

export type RehypeOptions = import('./converter').RehypeOptions
export type Schema = import('hast-util-sanitize').Schema
export type IMarkOptions = import('./types').IMarkOptions
export type RemarkSetting = import('./types').RemarkSetting
export type IMarkPlugins = import('./types').IMarkPlugins

function hasMarkPlugin(obj: object): boolean {
  if (typeof obj === 'object') {
    const markPluginKeys = ['remark', 'rehype', 'render']
    for (const k of markPluginKeys) {
      if (k in obj) return true
    }
  }
  return false
}

class IMark {
  converter: Converter

  /**
   * Creates an instance of IMark.
   *
   * @constructor
   */
  constructor() {
    this.converter = new Converter()
  }

  use(schema: Schema | IMarkPlugins): IMark {
    let isPlugin = false
    for (const v of Object.values(schema)) {
      if (hasMarkPlugin(v)) {
        isPlugin = true
        break
      }
    }
    if (!isPlugin) {
      this.converter.schema = {...this.converter.schema, ...schema}
    } else {
      const plugins = schema as IMarkPlugins
      this.converter.plugins = {...this.converter.plugins, ...plugins}
    }
    return this
  }

  setting(name: string, rs: RemarkSetting): IMark {
    this.converter.setting(name, rs)
    return this
  }
  /**
   * Parse markdown to html with additional renders
   *
   * @param {string} md
   * @param {RehypeOptions} [options]
   * @returns {Promise<RenderContext>}
   */
  parse(md: string, options?: RehypeOptions): Promise<RenderContext> {
    return this.converter.toHTML(md, options)
  }

  /**
   * Render markdown to a html element
   *
   * @param {string} md
   * @param {HTMLElement} [root]
   * @param {RehypeOptions} [rehypeOptions]
   * @param {IMarkOptions} [imarkOptions]
   */
  render(
    md: string,
    root?: HTMLElement,
    rehypeOptions?: RehypeOptions,
    imarkOptions?: IMarkOptions
  ) {
    if (!root) {
      root = document.body
    }
    this.parse(md, rehypeOptions).then(({html, renders}) => {
      loadStyle('imarks-css', gCss)
      const parent = document.createElement('div')
      parent.classList.add('imarks')
      root.appendChild(parent)
      parent.innerHTML = html
      if (!renders) return

      for (const [k, render] of Object.entries(renders)) {
        if (!render) continue

        const options = imarkOptions
          ? imarkOptions[k as IMarkOptionsKey]
          : undefined
        ;(async (e) => {
          render(e, options)
        })(parent)
      }
    })
  }
}

const imark = new IMark()
export default imark
