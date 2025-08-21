import type {IMarkPlugin} from '../../types'
import {deepMerge} from '../../public/utils'
import {renderToc} from './lib/index'

export type TocOptions = import('./lib/index').TocOptions
const tocSetting: TocOptions = {}
export default function imarkToc(): IMarkPlugin {
  return {
    setting: (s: TocOptions) => {
      deepMerge(tocSetting, s)
    },
    render: renderToc()
  }
}
