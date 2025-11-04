import type { CacheOption, IMarkPlugin, Render } from '../../types'
import { renderVega } from './lib'

export type VegaEmbedOptions = import('vega-embed').EmbedOptions & CacheOption
export default function imarkVega(): IMarkPlugin {
  return {
    render: renderVega() as Render
  }
}
