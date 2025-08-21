import type {IMarkPlugin, Render} from '../../types'
import {renderAbc} from './lib/index'

export type AbcVisualParams = import('abcjs').AbcVisualParams
export default function imarkAbc(): IMarkPlugin {
  return {
    render: renderAbc() as Render
  }
}
