import type { RenderOptionsKey, RenderContext } from './types'
import Converter from './converter'
import { loadStyle } from './public/utils'
// @ts-ignore
import gCss from './css/index.css?inline'

export type RehypeOptions = import('./converter').RehypeOptions
export type Schema = import('hast-util-sanitize').Schema
export type RenderOptions = import('./types').RenderOptions
export type RemarkSetting = import('./types').RemarkSetting
export type IMarkPlugins = import('./types').IMarkPlugins

export interface ImarkOptions {
  remark?: RemarkSetting
  rehype?: RehypeOptions
  render?: RenderOptions
}

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
      this.converter.schema = { ...this.converter.schema, ...schema }
    } else {
      const plugins = schema as IMarkPlugins
      this.converter.plugins = { ...this.converter.plugins, ...plugins }
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
  parse(md: string, remarkOptions?: RemarkSetting, rephypeOptions?: RehypeOptions): Promise<RenderContext> {
    return this.converter.toHTML(md, remarkOptions, rephypeOptions)
  }

  /**
   * Render markdown to a html element
   *
   * @param {string} md
   * @param {HTMLElement} [root]
   * @param {ImarkOptions} [imarkOptions]
   */
  render(md: string, root?: HTMLElement, imarkOptions?: ImarkOptions) {
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
