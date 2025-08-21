import type {IMarkPlugin, Render} from '../../types'
import {renderRailroad} from './lib/index'

export default function imarkRailroad(): IMarkPlugin {
  return {
    render: renderRailroad() as Render
  }
}
