import { parseMeta } from '../../../public/utils'
import { encodeUml } from './codec'

/**
 * Render elements with a `language-plantuml`.
 *
 * @returns
 *   Transform.
 */
export function renderUml() {
  const defaultUmlWebsite = 'www.plantuml.com/plantuml'
  const defaultImageFormat = 'svg'

  /**
   * Transform.
   *
   * @param {HTMLElement} tree
   *   Tree.
   * @param {import('../index').UmlOptions} [options]
   *   Uml options.
   * @returns
   *   Transform.
   */
  return function (tree, options) {
    const config = {
      umlWebSite: defaultUmlWebsite,
      imageFormat: defaultImageFormat,
      ...options
    }
    /** @type {NodeListOf<HTMLElement>} */
    const els = tree.querySelectorAll('pre>code.language-plantuml')
    if (els.length === 0) return

    els.forEach((el, i) => {
      const pre = el.parentElement
      if (!pre) return

      const meta = parseMeta(el)
      if (!meta) return

      const code = el.innerText
      const id = `uml-${Date.now()}-${i}`
      const container = document.createElement('div')
      container.id = id
      container.classList.add('uml')
      if (el.dataset.meta) container.dataset.meta = el.dataset.meta
      // container.dataset.source = code
      let classname = ''
      if (meta.diagramClass && meta.diagramClass.length > 0) {
        container.classList.add(meta.diagramClass)
        classname = meta.diagramClass
      }
      let imageFormat = config.imageFormat
      if (meta.imageFormat) {
        imageFormat = meta.imageFormat
      }
      if (imageFormat === 'svg') {
        if (typeof config.svgRender === 'function' && config.svgRender) {
          config.svgRender(id, classname, code, i).then((svgData) => {
            container.innerHTML = svgData
            pre.replaceWith(container)
          })
        } else if (typeof window !== 'undefined' && window.fetch) {
          const protocol = window && window.location.protocol
          const website = (protocol === 'http:' || protocol === 'https:' ? '//' : 'https://') + config.umlWebSite
          const imageExtension = `.${imageFormat}`
          const uml = encodeUml(code)
          const src = `${website}/${imageFormat}/${uml}${imageExtension}`
          window
            .fetch(src)
            .then((response) => {
              if (response.ok) {
                return response.text()
              }
            })
            .then((svgData) => {
              if (svgData) {
                container.innerHTML = svgData
              }
              pre.replaceWith(container)
            })
            .catch((error) => {
              console.error('fetch plantuml error:', error.toString())
            })
        }
      } else {
        const protocol = window && window.location.protocol
        const website = (protocol === 'http:' || protocol === 'https:' ? '//' : 'https://') + config.umlWebSite
        const imageExtension = imageFormat !== defaultImageFormat ? `.${imageFormat}` : ''
        const uml = encodeUml(code)
        const selector = document.createElement('img')
        selector.src = `${website}/${imageFormat}/${uml}${imageExtension}`
        container.append(selector)
        pre.replaceWith(container)
      }
    })
  }
}
