import type { IMarkPlugin } from '../../types'
import { Processor } from 'unified'
import { deepMerge } from '../../public/utils'
import { HeadOptions, remarkHeadingId, renderToc } from './lib/index'

export type { HeadOptions, TocOptions } from './lib/index'

const tocSetting: HeadOptions = {}

export default function imarkToc(): IMarkPlugin {
  return {
    setting: (s: HeadOptions) => {
      deepMerge(tocSetting, s)
    },
    remark: (p: Processor): Processor => {
      return p.use<any, any, any>(remarkHeadingId, tocSetting)
    },
    render: renderToc()
  }
}
