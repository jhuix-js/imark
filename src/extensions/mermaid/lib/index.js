import fetch from 'cross-fetch'
import { checkSum, parseMeta } from '../../../public/utils'
import { getKrokiDiagramType, getKrokiImage } from '../../../public/kroki'

/**
 * Render elements with a `language-memaid`.
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
   * @param {import('../index').MermaidConfig} [options]
   *   Mermaid config.
   * @returns
   *   Transform.
   */
  return function (tree, options) {
    /** @type {import('../index').MermaidConfig} */
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
    const graphsCache = config.graphsCache
    /**
     * @type {import("mermaid").Mermaid | null}
     */
    let mermaid = null
    /**
     * Native Render
     *
     * @param {import("mermaid").Mermaid} mermaid
     * @param {string} id
     * @param {string[]} classlist
     * @param {string} style
     * @param {string} data
     * @param {HTMLElement} parent
     * @param {string} checksum
     * @returns
     */
    function nativeRender(mermaid, id, classlist, style, data, parent, checksum) {
      style = style.length > 0 ? ` style="${style}"` : ``
      const classname = classlist.length > 0 ? ` class="${classlist.join(' ')}"` : ''
      mermaid
        .render(id, data)
        .then((m) => {
          const outerHTML = `<div${classname}${style}>${m.svg}</div>`
          if (graphsCache && checksum.length > 0) {
            graphsCache[checksum] = outerHTML
          }
          parent.outerHTML = outerHTML
        })
        .catch((e) => {
          console.log(e)
        })
    }

    /** @type {NodeListOf<HTMLElement>} */
    const els = tree.querySelectorAll('pre>code.language-mermaid')
    if (els.length === 0) return

    els.forEach((el, i) => {
      const pre = el.parentElement
      if (!pre) return

      const meta = parseMeta(el)
      if (!meta) return

      let checksum = ''
      const data = el.innerText
      if (graphsCache) {
        checksum = checkSum(JSON.stringify(meta) + data)
        const diagramInCache = graphsCache[checksum]
        if (diagramInCache) {
          pre.outerHTML = diagramInCache
          return
        }
      }

      const classlist = ['mermaid']
      if (meta.diagramClass && meta.diagramClass.length > 0) {
        classlist.push(meta.diagramClass)
      }
      const id = `mermaid-${Date.now()}-${i}`
      const style = meta.style ? meta.style : ''
      const krokiDiagramType = getKrokiDiagramType(el.className, meta.kroki)
      if (krokiDiagramType.length > 0) {
        const krokiImageFormat = meta.imageFormat ? meta.imageFormat : 'svg'
        getKrokiImage(krokiDiagramType, id, classlist, style, krokiImageFormat, data, (html) => {
          if (typeof html === 'string') {
            if (graphsCache && checksum.length > 0) {
              graphsCache[checksum] = html
            }
            pre.outerHTML = html
          } else {
            if (graphsCache && checksum.length > 0) {
              graphsCache[checksum] = html.outerHTML
            }
            pre.replaceWith(html)
          }
        })
        return
      }

      if (!mermaid) {
        import('mermaid').then((c) => {
          c.default.initialize(config)
          mermaid = c.default
          nativeRender(mermaid, id, classlist, style, data, pre, checksum)
        })
        return
      }

      nativeRender(mermaid, id, classlist, style, data, pre, checksum)
    })

    // import('mermaid').then((c) => {
    //   const mermaid = c.default
    //   mermaid.initialize(config)
    //   els.forEach((el, i) => {
    //     const pre = el.parentElement
    //     if (!pre) return

    //     const meta = parseMeta(el)
    //     if (!meta) return

    //     const data = el.innerText
    //     const id = `mermaid-${Date.now()}-${i}`
    //     const className = meta.diagramClass
    //     mermaid
    //       .render(id, data)
    //       .then((m) => {
    //         pre.outerHTML = `<div class="${className}">${m.svg}</div>`
    //       })
    //       .catch((e) => {
    //         console.log(e)
    //       })
    //   })
    // })
  }
}
