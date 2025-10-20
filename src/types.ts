import type { Processor } from 'unified'
import type { Handler } from 'mdast-util-to-hast'
import type { EmojiOptions } from './extensions/emoji'
import type { KatexDelimiters, KatexOptions } from './extensions/katex'
import type { GfmOptions } from './extensions/gfm'
import type { TocOptions } from './extensions/toc'
import type { MermaidConfig } from './extensions/mermaid'
import type { EChartsInitOpts } from './extensions/echarts'
import type { AbcVisualParams } from './extensions/abc'
import type { UmlOptions } from './extensions/uml'
import type { WaveDromOptions } from './extensions/wavedrom'
import type { VegaEmbedOptions } from './extensions/vega'

export type RenderOption =
  | KatexOptions
  | TocOptions
  | MermaidConfig
  | EChartsInitOpts
  | AbcVisualParams
  | UmlOptions
  | WaveDromOptions
  | VegaEmbedOptions

export type RenderOptions = {
  katex: KatexOptions
  toc: TocOptions
  mermaid: MermaidConfig
  echarts: EChartsInitOpts
  abc: AbcVisualParams
  uml: UmlOptions
  wavedrom: WaveDromOptions
  vega: VegaEmbedOptions
}

export type RenderOptionsKey = keyof RenderOptions

export type RemarkSetting = KatexDelimiters | GfmOptions | EmojiOptions

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
  setting?: ((s: GfmOptions) => void) | ((s: KatexDelimiters) => void) | ((s: EmojiOptions) => void)
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
