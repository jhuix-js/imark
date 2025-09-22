import type { IMarkPlugin } from '../../types'
import { renderToc } from './lib/index'

export type TocOptions = import('./lib/index').TocOptions
export default function imarkToc(): IMarkPlugin {
  return {
    render: renderToc()
  }
}
