import type {IMarkPlugin, Render} from '../../types'
import {Processor} from 'unified'
import {remarkDirective, renderDirective} from './lib/index'

export default function imarkDirective(): IMarkPlugin {
  return {
    remark: (p: Processor): Processor => {
      return p.use<any, any, any>(remarkDirective)
    },
    render: renderDirective() as Render
  }
}
