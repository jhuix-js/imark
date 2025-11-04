import { checkSum, parseMeta } from '../../../public/utils'
import { getKrokiDiagramType, getKrokiImage } from '../../../public/kroki'
// @ts-ignore
import defSkin from 'wavedrom/skins/default.js'
// @ts-ignore
import darkSkin from 'wavedrom/skins/dark.js'
// @ts-ignore
import lowkeySkin from 'wavedrom/skins/lowkey.js'
// @ts-ignore
import narrowSkin from 'wavedrom/skins/narrow.js'
// @ts-ignore
import narrowerSkin from 'wavedrom/skins/narrower.js'
// @ts-ignore
import narrowererSkin from 'wavedrom/skins/narrowerer.js'

/**
 *
 * @param {string} skinName
 * @returns {object}
 */
function loadSkin(skinName) {
  // const skins = ['default', 'dark', 'lowkey', 'narrow', 'narrower', 'narrowerer']
  switch (skinName) {
    case 'dark':
      return darkSkin
    case 'lowkey':
      return lowkeySkin
    case 'narrow':
      return narrowSkin
    case 'narrower':
      return narrowerSkin
    case 'narrowerer':
      return narrowererSkin
    default:
      return defSkin
  }
}

/**
 * Render elements with a `language-wavedrom`.
 *
 * @returns
 *   Transform.
 */
export function renderWaveDrom() {
  /**
   * Transform.
   *
   * @param {HTMLElement} tree
   *   Tree.
   * @param {import('../index').WaveDromOptions} [options]
   *   Vega embed options.
   * @returns
   *   Transform.
   */
  return function (tree, options) {
    const config = {
      WaveDromSkin: 'default',
      ...options
    }
    const graphsCache = config.graphsCache
    // @ts-ignore
    let waveDrom = null
    /**
     * Native Render
     *
     * @param {object} waveDrom
     * @param {Number} index
     * @param {string} id
     * @param {string} classname
     * @param {string} data
     * @param {HTMLElement} parent
     * @param {string} checksum
     * @param {object} waveSkin
     * @returns
     */
    function nativeRender(waveDrom, index, id, classname, data, parent, checksum, waveSkin) {
      const selector = document.createElement('div')
      selector.id = id
      selector.classList.add(classname)
      parent.replaceWith(selector)
      const obj = window.eval(`(${data})`)
      // @ts-ignore
      waveDrom.renderWaveElement(index, obj, selector, waveSkin)
      if (graphsCache && checksum.length > 0) {
        graphsCache[checksum] = selector.outerHTML
      }
    }

    /** @type {NodeListOf<HTMLElement>} */
    const els = tree.querySelectorAll('pre>code.language-wavedrom')
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

      const classname = meta.diagramClass ?? ''
      const id = `WaveDrom_Display_${Date.now()}-${i}`
      const krokiDiagramType = getKrokiDiagramType(el.className, meta.kroki)
      if (krokiDiagramType.length > 0) {
        const krokiImageFormat = meta.imageFormat ? meta.imageFormat : 'svg'
        const id = `mermaid-${Date.now()}-${i}`

        getKrokiImage(krokiDiagramType, id, classname, krokiImageFormat, data, (html) => {
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

      const waveSkin = loadSkin(config.WaveDromSkin)
      // @ts-ignore
      if (!waveDrom) {
        // @ts-ignore
        import('wavedrom').then((c) => {
          waveDrom = c.default
          nativeRender(waveDrom, i, id, classname, data, pre, checksum, waveSkin)
        })
        return
      }

      nativeRender(waveDrom, i, id, classname, data, pre, checksum, waveSkin)
    })

    // // @ts-ignore
    // import('wavedrom').then((c) => {
    //   const WaveDrom = c.default
    //   const waveSkin = loadSkin(config.WaveDromSkin)
    //   els.forEach((el, i) => {
    //     const pre = el.parentElement
    //     if (!pre) return

    //     const meta = parseMeta(el)
    //     if (!meta) return

    //     const code = el.innerText
    //     const id = `WaveDrom_Display_${Date.now()}-${i}`

    //     const selector = document.createElement('div')
    //     selector.id = id
    //     if (el.dataset.meta) selector.dataset.meta = el.dataset.meta
    //     if (meta.diagramClass && meta.diagramClass.length > 0) {
    //       selector.classList.add(meta.diagramClass)
    //     }
    //     pre.replaceWith(selector)
    //     const obj = window.eval(`(${code})`)
    //     WaveDrom.renderWaveElement(i, obj, selector, waveSkin)
    //   })
    // })
  }
}
