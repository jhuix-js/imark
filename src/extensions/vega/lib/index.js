import { checkSum, parseMeta } from '../../../public/utils'
import { getKrokiDiagramType, getKrokiImage } from '../../../public/kroki'
/**
 * Render elements with a `language-vega`.
 *
 * @returns
 *   Transform.
 */
export function renderVega() {
  /**
   * Transform.
   *
   * @param {HTMLElement} tree
   *   Tree.
   * @param {import('../index').VegaEmbedOptions} [options]
   *   Vega embed options.
   * @returns
   *   Transform.
   */
  return function (tree, options) {
    /** @type {import('../index').VegaEmbedOptions} */
    const config = {
      actions: { editor: true },
      theme: 'vox',
      tooltip: false,
      renderer: 'svg',
      ...options
    }
    const graphsCache = config.graphsCache
    // @ts-ignore
    let vegaEmbed = null
    /**
     * Native Render
     *
     * @param {object} vegaEmbed
     * @param {string} id
     * @param {string[]} classlist
     * @param {string} style
     * @param {string} data
     * @param {boolean} json
     * @param {HTMLElement} parent
     * @param {string} checksum
     * @returns
     */
    function nativeRender(vegaEmbed, id, classlist, style, data, json, parent, checksum) {
      const container = document.createElement('div')
      container.id = id + '-container'
      container.classList.add(...classlist)
      if (style.length > 0) {
        container.style.cssText = style
      }
      const selector = document.createElement('div')
      selector.id = id
      selector.style.cssText = 'width:100%;height:100%;display:inline-block'
      container.append(selector)
      parent.replaceWith(container)
      const option = json ? JSON.parse(data) : window.eval(`(function(){${data}; return option;})();`)
      // @ts-ignore
      vegaEmbed(selector, option, config)
      if (graphsCache && checksum.length > 0) {
        graphsCache[checksum] = container.outerHTML
      }
    }
    /** @type {NodeListOf<HTMLElement>} */
    const els = tree.querySelectorAll('pre>code.language-vega,pre>code.language-vege-lite')
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

      const classlist = ['vega']
      if (meta.diagramClass && meta.diagramClass.length > 0) {
        classlist.push(meta.diagramClass)
      }
      const id = `vega_${Date.now()}-${i}`
      const style = meta.style ? meta.style : ''

      const json = !meta.type ? true : meta.type.toLowerCase() !== 'javascript'
      if (json) {
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
      }

      // @ts-ignore
      if (!vegaEmbed) {
        // @ts-ignore
        import('vega-embed').then((c) => {
          vegaEmbed = c.default
          nativeRender(vegaEmbed, id, classlist, style, data, json, pre, checksum)
        })
        return
      }

      nativeRender(vegaEmbed, id, classlist, style, data, json, pre, checksum)
    })

    // import('vega-embed').then((c) => {
    //   const vegaEmbed = c.default
    //   els.forEach((el, i) => {
    //     const pre = el.parentElement
    //     if (!pre) return

    //     const meta = parseMeta(el)
    //     if (!meta) return

    //     const code = el.innerText
    //     const id = `vega-${Date.now()}-${i}`
    //     const container = document.createElement('div')
    //     container.id = id + '-container'
    //     container.classList.add('vega')
    //     if (el.dataset.meta) container.dataset.meta = el.dataset.meta
    //     //container.dataset.source = code
    //     let classname = ''
    //     if (meta.diagramClass && meta.diagramClass.length > 0) {
    //       container.classList.add(meta.diagramClass)
    //       classname = meta.diagramClass
    //     }
    //     const selector = document.createElement('div')
    //     selector.id = id
    //     if (classname.length > 0) {
    //       selector.classList.add(classname)
    //     }
    //     if (meta.style && meta.style.length > 0) {
    //       container.style.cssText = meta.style
    //       selector.style.cssText = 'width:100%;height:100%;display:inline-block'
    //     }
    //     container.append(selector)
    //     pre.replaceWith(container)
    //     if (meta.type?.toLowerCase() == 'javascript') {
    //       const option = window.eval(`(function(){${code}; return option;})();`)
    //       vegaEmbed(selector, option, config)
    //       return
    //     }

    //     const option = JSON.parse(code)
    //     vegaEmbed(selector, option, config)
    //   })
    // })
  }
}
