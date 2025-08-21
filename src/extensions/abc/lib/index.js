import Abc from './abc'
import {parseMeta, loadStyle} from '../../../public/utils'
// @ts-ignore
import abcCss from './abc.css?inline'

/**
 * Render elements with a `language-abc`.
 *
 * @returns
 *   Transform.
 */
export function renderAbc() {
  /**
   * Transform.
   *
   * @param {HTMLElement} tree
   *   Tree.
   * @param {import('abcjs').AbcVisualParams} [options]
   *   Mermaid config.
   * @returns
   *   Transform.
   */
  return function (tree, options) {
    /** @type {NodeListOf<HTMLElement>} */
    const els = tree.querySelectorAll('pre>code.language-abc')
    if (els.length === 0) return

    import('abcjs').then((c) => {
      const abc = new Abc(c.default)
      els.forEach((el, i) => {
        const pre = el.parentElement
        if (!pre) return

        const meta = parseMeta(el)
        if (!meta) return

        const music = el.innerText
        const id = `abc-${Date.now()}-${i}`
        const container = document.createElement('div')
        container.id = id + '-container'
        container.classList.add('abc')
        if (el.dataset.meta) container.dataset.meta = el.dataset.meta
        // container.dataset.source = music
        if (meta.diagramClass && meta.diagramClass.length > 0) {
          container.classList.add(meta.diagramClass)
        }
        const selector = document.createElement('div')
        selector.id = id
        if (meta.style && meta.style.length > 0) {
          container.style.cssText = meta.style
          selector.style.cssText = 'width:100%;height:100%;display:inline-block'
        }
        container.append(selector)
        /** @type {HTMLElement | undefined} */
        let audio
        if (meta.hasAudio) {
          loadStyle('abc-css', abcCss)
          audio = document.createElement('div')
          audio.id = id + '-audio'
          audio.classList.add('abc-audio')
          if (meta.style && meta.style.length > 0) {
            audio.style.cssText = 'width:100%;height:100%;display:inline-block'
          }
          container.append(audio)
        }
        pre.replaceWith(container)
        abc.render(selector, music, audio, {...options, ...meta.options})
      })
    })
  }
}
