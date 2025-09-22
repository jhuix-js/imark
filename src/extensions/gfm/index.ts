import type { IMarkPlugin } from '../../types'
import type { Processor } from 'unified'
import { deepMerge } from '../../public/utils'
import remarkGfm from 'remark-gfm'
import { extendedTableFromMarkdownOptions } from 'mdast-util-extended-table'
import { remarkExtendedTable, extendedTableHandlers } from 'remark-extended-table'

type remarkGfmOptions = import('remark-gfm').Options
export interface GfmOptions extends remarkGfmOptions, extendedTableFromMarkdownOptions {}

const gfmSetting: GfmOptions = {
  tablePipeAlign: true,
  tableCellPadding: true,
  colspanWithEmpty: true
}
export default function imarkGfm(): IMarkPlugin {
  return {
    setting: (s: GfmOptions) => {
      deepMerge(gfmSetting, s)
    },
    remark: (p: Processor): Processor => {
      // return p.use(remarkGfm, gfmSetting)
      return p.use(remarkGfm, gfmSetting).use(remarkExtendedTable, gfmSetting)
    },
    handlers: extendedTableHandlers
  }
}
