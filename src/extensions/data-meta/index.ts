import type {IMarkPlugin} from '../../types'
import type {Processor} from 'unified'
import {rehypeDataMeta} from './lib/index.js'

export default function imarkDataMeta(): IMarkPlugin {
  return {
    rehype: (p: Processor): Processor => {
      return p.use(rehypeDataMeta)
    }
  }
}
