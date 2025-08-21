import {parseMeta} from '../../../public/utils'
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

function loadSkin() {
  // const skins = ['default', 'dark', 'lowkey', 'narrow', 'narrower', 'narrowerer']
  return {
    ...defSkin,
    ...darkSkin,
    ...lowkeySkin,
    ...narrowSkin,
    ...narrowerSkin,
    ...narrowererSkin
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
   * @returns
   *   Transform.
   */
  return function (tree) {
    /** @type {NodeListOf<HTMLElement>} */
    const els = tree.querySelectorAll('pre>code.language-wavedrom')
    if (els.length === 0) return

    // @ts-ignore
    import('wavedrom').then((c) => {
      const WaveDrom = c.default
      const waveSkin = loadSkin()
      els.forEach((el, i) => {
        const pre = el.parentElement
        if (!pre) return

        const meta = parseMeta(el)
        if (!meta) return

        const code = el.innerText
        const id = `WaveDrom_Display_${Date.now()}-${i}`
        const selector = document.createElement('div')
        selector.id = id
        if (el.dataset.meta) selector.dataset.meta = el.dataset.meta
        if (meta.diagramClass && meta.diagramClass.length > 0) {
          selector.classList.add(meta.diagramClass)
        }
        pre.replaceWith(selector)
        const obj = window.eval(`(${code})`)
        WaveDrom.renderWaveElement(i, obj, selector, waveSkin)
      })
    })
  }
}
