import type {IMarkPlugin} from '../../types'
import type {Processor} from 'unified'
import {remarkDataMeta} from './lib/index.js'

export default function imarkDataMeta(): IMarkPlugin {
  return {
    remark: (p: Processor): Processor => {
      return p.use<any, any, any>(remarkDataMeta)
    }
    // ,
    // rehype: (p: Processor): Processor => {
    //   return p.use(rehypeDataMeta)
    // }
  }
}
