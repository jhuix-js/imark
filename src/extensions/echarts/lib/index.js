import {parseMeta} from '../../../public/utils'

/**
 * Render elements with a `language-echarts`.
 *
 * @returns
 *   Transform.
 */
export function renderEcharts() {
  /**
   * Transform.
   *
   * @param {HTMLElement} tree
   *   Tree.
   * @param {import('echarts').EChartsInitOpts} [options]
   *   ECharts Init Options.
   * @returns
   *   Transform.
   */
  return function (tree, options) {
    /** @type {import('echarts').EChartsInitOpts} */
    const config = {
      renderer: 'svg',
      ssr: false,
      useDirtyRect: false,
      ...options
    }
    /** @type {NodeListOf<HTMLElement>} */
    const els = tree.querySelectorAll('pre>code.language-echarts')
    if (els.length === 0) return

    import('echarts').then((c) => {
      const echarts = c
      els.forEach((el, i) => {
        const pre = el.parentElement
        if (!pre) return

        const meta = parseMeta(el)
        if (!meta) return

        const code = el.innerText
        const id = `echarts-${Date.now()}-${i}`
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
        let chart = echarts.getInstanceByDom(selector)
        if (!chart) {
          selector.innerHTML = ''
        }
        chart = echarts.init(selector, null, {...config, ...meta.options})
        if (meta.type?.toLowerCase() == 'javascript') {
          const option = window.eval(`(function(){${code}; return option;})();`)
          chart.setOption(option)
          return
        }
        const option = JSON.parse(code)
        chart.setOption(option)
      })
    })
  }
}
