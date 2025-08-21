import type {IMarkPlugin} from '../../types'
import type {Processor} from 'unified'
import remarkGfm from 'remark-gfm'

export default function imarkGfm(): IMarkPlugin {
  return {
    remark: (p: Processor): Processor => {
      return p.use(remarkGfm)
    }
  }
}
