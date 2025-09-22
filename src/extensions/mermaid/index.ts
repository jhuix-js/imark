import type { IMarkPlugin, Render } from '../../types'
import { renderMermaid } from './lib/index'

export type MermaidConfig = import('mermaid').MermaidConfig
export default function imarkMermaid(): IMarkPlugin {
  return {
    render: renderMermaid() as Render
  }
}
