import { parseMeta } from '../../../public/utils'

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
   * @param {import('vega-embed').EmbedOptions} [options]
   *   Vega embed options.
   * @returns
   *   Transform.
   */
  return function (tree, options) {
    /** @type {import('vega-embed').EmbedOptions} */
    const config = {
      actions: { editor: true },
      theme: 'vox',
      tooltip: false,
      renderer: 'svg',
      ...options
    }
    /** @type {NodeListOf<HTMLElement>} */
    const els = tree.querySelectorAll('pre>code.language-vega')
    if (els.length === 0) return

    import('vega-embed').then((c) => {
      const vegaEmbed = c.default
      els.forEach((el, i) => {
        const pre = el.parentElement
        if (!pre) return

        const meta = parseMeta(el)
        if (!meta) return

        const code = el.innerText
        const id = `vega-${Date.now()}-${i}`
        const container = document.createElement('div')
        container.id = id + '-container'
        container.classList.add('echarts')
        if (el.dataset.meta) container.dataset.meta = el.dataset.meta
        //container.dataset.source = code
        let classname = ''
        if (meta.diagramClass && meta.diagramClass.length > 0) {
          container.classList.add(meta.diagramClass)
          classname = meta.diagramClass
        }
        const selector = document.createElement('div')
        selector.id = id
        if (classname.length > 0) {
          selector.classList.add(classname)
        }
        if (meta.style && meta.style.length > 0) {
          container.style.cssText = meta.style
          selector.style.cssText = 'width:100%;height:100%;display:inline-block'
        }
        container.append(selector)
        pre.replaceWith(container)
        if (meta.type?.toLowerCase() == 'javascript') {
          const option = window.eval(`(function(){${code}; return option;})();`)
          vegaEmbed(selector, option, config)
          return
        }

        const option = JSON.parse(code)
        vegaEmbed(selector, option, config)
      })
    })
  }
}
