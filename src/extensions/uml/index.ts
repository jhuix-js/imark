import type { IMarkPlugin, Render } from '../../types'
import { renderUml } from './lib/index'

export interface UmlOptions {
  umlWebSite?: string
  imageFormat?: string
  svgRender?: (id: string, classname: string, code: string, index: Number) => Promise<string>
}

export default function imarkUml(): IMarkPlugin {
  return {
    render: renderUml() as Render
  }
}
