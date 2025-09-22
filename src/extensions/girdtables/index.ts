import type { IMarkPlugin } from '../../types'
import type { Processor } from 'unified'
// @ts-ignore
import remarkGridTable from '@adobe/remark-gridtables'
// @ts-ignore
import { TYPE_TABLE, mdast2hastGridTablesHandler } from '@adobe/mdast-util-gridtables'

export default function imarkGirdTables(): IMarkPlugin {
  return {
    remark: (p: Processor): Processor => {
      return p.use(remarkGridTable)
    },
    handlers: {
      [TYPE_TABLE]: mdast2hastGridTablesHandler()
    }
  }
}
