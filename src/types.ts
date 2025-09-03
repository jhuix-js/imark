import type {Processor} from 'unified'
import type {MermaidConfig} from './extensions/mermaid'
import type {EChartsInitOpts} from './extensions/echarts'
import type {AbcVisualParams} from './extensions/abc'
import type {UmlOptions} from './extensions/uml'
import type {TocOptions} from './extensions/toc'
import type {WaveDromOptions} from './extensions/wavedrom'
import type {KatexDelimiters, KatexOptions} from './extensions/katex'

export type RenderOption =
  | MermaidConfig
  | EChartsInitOpts
  | AbcVisualParams
  | UmlOptions
  | WaveDromOptions
  | KatexOptions
  | TocOptions

export type RenderOptions = {
  mermaid: MermaidConfig
  echarts: EChartsInitOpts
  abc: AbcVisualParams
  uml: UmlOptions
  wavedrom: WaveDromOptions
  katex: KatexOptions
  toc: TocOptions
}

export type RenderOptionsKey = keyof RenderOptions

export type RemarkSetting = KatexDelimiters | TocOptions

export type Render =
  | ((tree: HTMLElement, option?: RenderOption) => void)
  | (() => void)

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

export interface IMarkPlugin {
  /**
   * Setting for parse markdown
   */
  setting?: ((s: KatexDelimiters) => void) | ((s: TocOptions) => void)
  /**
   * Customize markdown parse by remark plugins:
   *
   * https://github.com/remarkjs/remark/blob/main/doc/plugins.md
   */
  remark?: (p: Processor) => Processor
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
