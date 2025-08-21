import type {IMarkPlugin, Render} from '../../types'
import {renderWaveDrom} from './lib/index'

export interface WaveDromOptions {
  WaveDromSkin: 'default' | 'dark' | 'lowkey' | 'narrow' | 'narrower' | 'narrowerer'
}
export default function imarkWaveDrom(): IMarkPlugin {
  return {
    render: renderWaveDrom() as Render
  }
}
