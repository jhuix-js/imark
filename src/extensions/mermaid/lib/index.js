import {parseMeta} from '../../../public/utils'

/**
 * Render elements with a `language-echarts`.
 *
 * @returns
 *   Transform.
 */
export function renderMermaid() {
  /**
   * Transform.
   *
   * @param {HTMLElement} tree
   *   Tree.
   * @param {import('mermaid').MermaidConfig} [options]
   *   Mermaid config.
   * @returns
   *   Transform.
   */
  return function (tree, options) {
    /** @type {import('mermaid').MermaidConfig} */
    const config = {
      theme: 'forest',
      logLevel: 4,
      startOnLoad: false,
      arrowMarkerAbsolute: false,
      flowchart: {
        curve: 'basis'
      },
      gantt: {
        axisFormat: '%m/%d/%Y'
      },
      sequence: {
        actorMargin: 50
      },
      suppressErrorRendering: true,
      ...options
    }
    /** @type {NodeListOf<HTMLElement>} */
    const els = tree.querySelectorAll('pre>code.language-mermaid')
    if (els.length === 0) return

    import('mermaid').then((c) => {
      const mermaid = c.default
      mermaid.initialize(config)
      els.forEach((el, i) => {
        const pre = el.parentElement
        if (!pre) return

        const meta = parseMeta(el)
        if (!meta) return

        const data = el.innerText
        const id = `mermaid-${Date.now()}-${i}`
        const className = meta.diagramClass
        mermaid
          .render(id, data)
          .then((m) => {
            pre.outerHTML = `<div class="${className}">${m.svg}</div>`
          })
          .catch((e) => {
            console.log(e)
          })
      })
    })
  }
}
