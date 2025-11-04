import type { CacheOption, IMarkPlugin, Render } from '../../types'
import { renderWaveDrom } from './lib/index'

export type WaveDromOptions = {
  /**
   * The skin of render wave drom.
   * @defaultValue default
   */
  WaveDromSkin: 'default' | 'dark' | 'lowkey' | 'narrow' | 'narrower' | 'narrowerer'
} & CacheOption
export default function imarkWaveDrom(): IMarkPlugin {
  return {
    render: renderWaveDrom() as Render
  }
}
