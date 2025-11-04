import type { CacheOption, IMarkPlugin, Render } from '../../types'
import { renderRailroad } from './lib/index'

export type RailroadOptions = CacheOption

export default function imarkRailroad(): IMarkPlugin {
  return {
    render: renderRailroad() as Render
  }
}
