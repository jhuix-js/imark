import type { IMarkPlugin } from '../../types'
import type { Processor } from 'unified'
import { deepMerge } from '../../public/utils'
import remarkGfm from '@jhuix/remark-gfm'
import { gfmTableHastHandlers } from '@jhuix/mdast-util-gfm-table'

export type GfmOptions = import('@jhuix/remark-gfm').Options
// export interface GfmOptions extends remarkGfmOptions {}

const gfmSetting: GfmOptions = {
  colspanWithEmpty: true,
  tablePipeAlign: true,
  tableCellPadding: true
}
export default function imarkGfm(): IMarkPlugin {
  return {
    setting: (s: GfmOptions) => {
      deepMerge(gfmSetting, s)
    },
    remark: (p: Processor): Processor => {
      return p.use(remarkGfm, gfmSetting)
    },
    handlers: gfmTableHastHandlers()
  }
}
