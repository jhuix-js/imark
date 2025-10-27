import type { IMarkPlugin, Render } from '../../types'
import { rehypeKatex, renderKatex } from './lib/index'
import { Processor } from 'unified'
import { deepMerge } from '../../public/utils'

/**
 * This is delimiters to look for katex math or asciimath.
 */
export interface KatexDelimiter {
  /**
   * A string which starts the math expression (i.e. the left delimiter).
   * @type {string}
   */
  left: string
  /**
   * A string which ends the math expression (i.e. the right delimiter).
   * @type {string}
   */
  right: string
  /**
   * Whether the math in the expression should be rendered in display or inline mode.
   * @type {boolean}
   */
  display?: boolean
  /**
   * Whether the math be rendered by asciimath or katex math.
   * @type {boolean}
   */
  asciimath?: boolean
}

/**
 * This is a list of delimiters to look for katex math or asciimath,
 * processed in the same order as the list.
 */
export interface MathDelimiters {
  /**
   * The list of delimiters that the expression should be rendered in display mode.
   * @type {KatexDelimiter[]}
   */
  display?: KatexDelimiter[]
  /**
   * The list of delimiters that the expression should be rendered in inline mode.
   * @type {KatexDelimiter[]}
   */
  inline?: KatexDelimiter[]
}

/**
 * This is a list of delimiters to look for katex math or asciimath.
 */
export interface KatexDelimiters {
  /**
   * The list of delimiters for katex math.
   * @type {MathDelimiters}
   */
  texmath?: MathDelimiters
  /**
   * The list of delimiters for asciimath.
   * @type {MathDelimiters}
   */
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
