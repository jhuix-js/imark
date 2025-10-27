import type { IMarkPlugin, Render } from '../../types'
import { renderUml } from './lib/index'

/**
 * The options for render plantuml.
 */
export interface UmlOptions {
  /**
   * Plantuml website.
   * @type {string}
   */
  umlWebSite?: string
  /**
   * Render image format. Includes svg,png,jpg etc.
   * @type {string}
   */
  imageFormat?: string
  /**
   * Render for svg
   * @param {string} id
   * @param {string} classname 
   * @param {string} code 
   * @param {Number} index 
   * @returns {Promise<string>}
   */
  svgRender?: (id: string, classname: string, code: string, index: Number) => Promise<string>
}

export default function imarkUml(): IMarkPlugin {
  return {
    render: renderUml() as Render
  }
}
