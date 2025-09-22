import type { IMarkPlugin, Render } from '../../types'
import { renderEcharts } from './lib/index'

export type EChartsInitOpts = import('echarts').EChartsInitOpts
export default function imarkEcharts(): IMarkPlugin {
  return {
    render: renderEcharts() as Render
  }
}
