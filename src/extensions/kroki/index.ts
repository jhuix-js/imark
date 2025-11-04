import type { IMarkPlugin } from '../../types'
import { renderKroki } from './lib/index'
export type { KrokiOptions } from './lib/index'

export default function imarkKroki(): IMarkPlugin {
  return {
    render: renderKroki()
  }
}
