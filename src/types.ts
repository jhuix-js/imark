import type { Processor } from 'unified'
import type { Handler } from 'mdast-util-to-hast'
import type { EmojiOptions } from './extensions/emoji'
import type { KatexDelimiters, KatexOptions } from './extensions/katex'
import type { GfmOptions } from './extensions/gfm'
import type { HeadOptions, TocOptions } from './extensions/toc'
import type { MermaidConfig } from './extensions/mermaid'
import type { EChartsInitOpts } from './extensions/echarts'
import type { AbcVisualParams } from './extensions/abc'
import type { UmlOptions } from './extensions/uml'
import type { WaveDromOptions } from './extensions/wavedrom'
import type { VegaEmbedOptions } from './extensions/vega'
import type { KrokiOptions } from './extensions/kroki'

/**
 * Cache Option
 */
export type CacheOption = {
  graphsCache?: { [key: string]: string }
}

/**
 * Render options type defined.
 */
export type RenderOption =
  | KatexOptions
  | TocOptions
  | MermaidConfig
  | EChartsInitOpts
  | AbcVisualParams
  | UmlOptions
  | WaveDromOptions
  | VegaEmbedOptions
  | KrokiOptions

/**
 * Render options
 */
export type RenderOptions = {
  /**
   * The options of render katex.
   * @type {KatexOptions}
   */
  katex?: KatexOptions
  /**
   * The options of render toc.
   * @type {TocOptions}
   */
  toc?: TocOptions
  /**
   * The options of render mermaid.
   * @type {MermaidConfig}
   */
  mermaid?: MermaidConfig
  /**
   * The options of render echart.
   * @type {EChartsInitOpts}
   */
  echarts?: EChartsInitOpts
  /**
   * The options of render abc.
   * @type {AbcVisualParams}
   */
  abc?: AbcVisualParams
  /**
   * The options of render planuml.
   * @type {UmlOptions}
   */
  uml?: UmlOptions
  /**
   * The options of render wavedrom.
   * @type {WaveDromOptions}
   */
  wavedrom?: WaveDromOptions
  /**
   * The options of render vega.
   * @type {VegaEmbedOptions}
   */
  vega?: VegaEmbedOptions
  /**
   * The options of render kroki.
   * @type {KrokiOptions}
   */
  kroki?: KrokiOptions
}

export type RenderOptionsKey = keyof RenderOptions

export type RemarkSetting = HeadOptions | KatexDelimiters | GfmOptions | EmojiOptions

export type Render = ((tree: HTMLElement, option?: RenderOption) => void) | (() => void)

export interface RenderContext {
  /**
   * The html string of the render
   */
  html: string
  /**
   * Virtual file format used in [unified](https://unifiedjs.com/)
   *
   * Get the HTML output by calling `vfile.toString()`
   */
  renders?: Record<string, Render>
}

export type Handlers = Partial<Record<string, Handler>>

export interface IMarkPlugin {
  /**
   * Setting for parse markdown
   */
  setting?:
    | ((s: HeadOptions) => void)
    | ((s: GfmOptions) => void)
    | ((s: KatexDelimiters) => void)
    | ((s: EmojiOptions) => void)
  /**
   * Customize markdown parse by remark plugins:
   *
   * https://github.com/remarkjs/remark/blob/main/doc/plugins.md
   */
  remark?: (p: Processor) => Processor
  /**
   * Rehype handlers for remark rehype
   */
  handlers?: Handlers
  /**
   * Customize HTML parse by rehype plugins:
   *
   * https://github.com/rehypejs/rehype/blob/main/doc/plugins.md
   */
  rehype?: (p: Processor) => Processor
  /**
   * Render for the element, triggers when element props changes
   */
  render?: Render
}

export type IMarkPlugins = Record<string, IMarkPlugin>
