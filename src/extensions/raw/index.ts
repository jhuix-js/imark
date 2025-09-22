import type { IMarkPlugin } from '../../types'
import { Processor } from 'unified'
import rehypeRaw from './lib/index'

export default function imarkRaw(): IMarkPlugin {
  return {
    rehype: (p: Processor): Processor => {
      return p.use(rehypeRaw)
    }
  }
}
