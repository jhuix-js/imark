import type {IMarkPlugin} from '../../types'
import {Processor} from 'unified'
import remarkHeadingId from './lib/index'

export default function imarkHeadingId(): IMarkPlugin {
  return {
    remark: (p: Processor): Processor => {
      return p.use<any, any, any>(remarkHeadingId, {defaults: true})
    }
  }
}
