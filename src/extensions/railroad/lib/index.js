import {parseMeta, loadStyle} from '../../../public/utils'
// @ts-ignore
import railroadCss from 'railroad-diagrams/railroad-diagrams.css?inline'

/**
 * Render elements with a `language-railroad`.
 *
 * @returns
 *   Transform.
 */
export function renderRailroad() {
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
    const els = tree.querySelectorAll('pre>code.language-railroad')
    if (els.length === 0) return

    // @ts-ignore
    import('railroad-diagrams').then((c) => {
      Object.keys(c.default).forEach((k) => {
        // @ts-ignore
        window[k] = c.default[k]
      })
      loadStyle('railroad-css', railroadCss)
      els.forEach((el, i) => {
        const pre = el.parentElement
        if (!pre) return

        const meta = parseMeta(el)
        if (!meta) return

        const code = el.innerText
        const id = `railroad-${Date.now()}-${i}`
        const selector = document.createElement('div')
        selector.id = id
        if (el.dataset.meta) selector.dataset.meta = el.dataset.meta
        if (meta.diagramClass && meta.diagramClass.length > 0) {
          selector.classList.add(meta.diagramClass)
        }
        pre.replaceWith(selector)
        const railroadElement = window.eval(code).format()
        railroadElement.addTo(selector)
      })
    })
  }
}
