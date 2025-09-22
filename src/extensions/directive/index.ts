import type { IMarkPlugin, Render } from '../../types'
import { Processor } from 'unified'
import { remarkDirective as directive, renderDirective } from './lib'
import remarkDirective from 'remark-directive'

export default function imarkDirective(): IMarkPlugin {
  return {
    remark: (p: Processor): Processor => {
      return p.use(remarkDirective).use<any, any, any>(directive)
    },
    render: renderDirective() as Render
  }
}
