import type { IMarkPlugin, Render } from '../../types'
import { rehypeKatex, renderKatex } from './lib/index'
import { Processor } from 'unified'
import { deepMerge } from '../../public/utils'

export interface KatexDelimiter {
  left: string
  right: string
  display?: boolean
  asciimath?: boolean
}
export interface MathDelimiters {
  display?: KatexDelimiter[]
  inline?: KatexDelimiter[]
}
export interface KatexDelimiters {
  texmath?: MathDelimiters
  asciimath?: MathDelimiters
}
const katexSetting: KatexDelimiters = {}
export type KatexOptions = import('katex').KatexOptions
export default function imarkKatex(): IMarkPlugin {
  return {
    setting: (s: KatexDelimiters) => {
      deepMerge(katexSetting, s)
    },
    rehype: (p: Processor): Processor => {
      return p.use(rehypeKatex, katexSetting)
    },
    render: renderKatex() as Render
  }
}
