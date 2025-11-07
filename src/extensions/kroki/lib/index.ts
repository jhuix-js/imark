import { Render } from '../../../types'
import { checkSum, parseMeta } from '../../../public/utils'
import { setKrokiWebSite, getKrokiDiagramType, getKrokiImage } from '../../../public/kroki'

export interface KrokiOptions {
  serverUrl?: string
  diagramTypes?: {
    prettyName: string
    diagramType: string
    langName: string[]
    url: string
    enabled: boolean
  }[]
  graphsCache?: { [key: string]: string }
}

const defaultOptions: KrokiOptions = {
  serverUrl: 'https://kroki.io',
  diagramTypes: [
    {
      prettyName: 'BlockDiag',
      diagramType: 'blockdiag',
      langName: ['pre>code.language-blockdiag', 'pre>code.language-kroki-blockdiag'],
      url: 'https://github.com/blockdiag/blockdiag',
      enabled: true
    },
    {
      prettyName: 'BPMN',
      diagramType: 'bpmn',
      langName: ['pre>code.language-bpmn', 'pre>code.language-kroki-bpmn'],
      url: 'https://github.com/bpmn-io/bpmn-js',
      enabled: true
    },
    {
      prettyName: 'Bytefield',
      diagramType: 'bytefield',
      langName: ['pre>code.language-bytefield', 'pre>code.language-kroki-bytefield'],
      url: 'https://github.com/Deep-Symmetry/bytefield-svg/',
      enabled: true
    },
    {
      prettyName: 'SeqDiag',
      diagramType: 'seqdiag',
      langName: ['pre>code.language-seqdiag', 'pre>code.language-kroki-seqdiag'],
      url: 'https://github.com/blockdiag/seqdiag',
      enabled: true
    },
    {
      prettyName: 'ActDiag',
      diagramType: 'actdiag',
      langName: ['pre>code.language-actdiag', 'pre>code.language-kroki-actdiag'],
      url: 'https://github.com/blockdiag/actdiag',
      enabled: true
    },
    {
      prettyName: 'NwDiag',
      diagramType: 'nwdiag',
      langName: ['pre>code.language-nwdiag', 'pre>code.language-kroki-nwdiag'],
      url: 'https://github.com/blockdiag/nwdiag',
      enabled: true
    },
    {
      prettyName: 'PacketDiag',
      diagramType: 'packetdiag',
      langName: ['pre>code.language-packetdiag', 'pre>code.language-kroki-packetdiag'],
      url: 'https://github.com/blockdiag/nwdiag',
      enabled: true
    },
    {
      prettyName: 'RackDiag',
      diagramType: 'rackdiag',
      langName: ['pre>code.language-rackdiag', 'pre>code.language-kroki-rackdiag'],
      url: 'https://github.com/blockdiag/nwdiag',
      enabled: true
    },
    {
      prettyName: 'C4 with PlantUML',
      diagramType: 'c4plantuml',
      langName: ['pre>code.language-c4plantuml', 'pre>code.language-kroki-c4plantuml'],
      url: 'https://github.com/RicardoNiepel/C4-PlantUML',
      enabled: true
    },
    {
      prettyName: 'D2',
      diagramType: 'd2',
      langName: ['pre>code.language-d2', 'pre>code.language-kroki-d2'],
      url: 'https://github.com/terrastruct/d2',
      enabled: true
    },
    {
      prettyName: 'DBML',
      diagramType: 'dbml',
      langName: ['pre>code.language-dbml', 'pre>code.language-kroki-dbml'],
      url: 'https://github.com/softwaretechnik-berlin/dbml-renderer',
      enabled: true
    },
    {
      prettyName: 'Ditaa',
      diagramType: 'ditaa',
      langName: ['pre>code.language-ditaa', 'pre>code.language-kroki-ditaa'],
      url: 'http://ditaa.sourceforge.net/',
      enabled: true
    },
    {
      prettyName: 'Diagrams.net',
      diagramType: 'diagramsnet',
      langName: ['pre>code.language-diagramsnet', 'pre>code.language-kroki-diagramsnet'],
      url: 'https://github.com/jgraph/drawio',
      enabled: true
    },
    {
      prettyName: 'Erd',
      diagramType: 'erd',
      langName: ['pre>code.language-erd', 'pre>code.language-kroki-erd'],
      url: 'https://github.com/BurntSushi/erd',
      enabled: true
    },
    {
      prettyName: 'Excalidraw',
      diagramType: 'excalidraw',
      langName: ['pre>code.language-excalidraw', 'pre>code.language-kroki-excalidraw'],
      url: 'https://github.com/excalidraw/excalidraw',
      enabled: true
    },
    {
      prettyName: 'GraphViz',
      diagramType: 'graphviz',
      langName: ['pre>code.language-graphviz', 'pre>code.language-kroki-graphviz'],
      url: 'https://www.graphviz.org/',
      enabled: true
    },
    {
      prettyName: 'Mermaid',
      diagramType: 'mermaid',
      langName: ['pre>code.language-kroki-mermaid'],
      url: 'https://github.com/knsv/mermaid',
      enabled: true
    },
    {
      prettyName: 'Nomnoml',
      diagramType: 'nomnoml',
      langName: ['pre>code.language-nomnoml', 'pre>code.language-kroki-nomnoml'],
      url: 'https://github.com/skanaar/nomnoml',
      enabled: true
    },
    {
      prettyName: 'Pikchr',
      diagramType: 'pikchr',
      langName: ['pre>code.language-pikchr', 'pre>code.language-kroki-pikchr'],
      url: 'https://github.com/drhsqlite/pikchr',
      enabled: true
    },
    {
      prettyName: 'PlantUML',
      diagramType: 'plantuml',
      langName: ['pre>code.language-kroki-plantuml'],
      url: 'https://github.com/plantuml/plantuml',
      enabled: true
    },
    {
      prettyName: 'Structurizr',
      diagramType: 'structurizr',
      langName: ['pre>code.language-structurizr', 'pre>code.language-kroki-structurizr'],
      url: 'https://structurizr.com/',
      enabled: true
    },
    {
      prettyName: 'Svgbob',
      diagramType: 'svgbob',
      langName: ['pre>code.language-svgbob', 'pre>code.language-kroki-svgbob'],
      url: 'https://github.com/ivanceras/svgbob',
      enabled: true
    },
    {
      prettyName: 'Symbolator',
      diagramType: 'symbolator',
      langName: ['pre>code.language-symbolator', 'pre>code.language-kroki-symbolator'],
      url: 'https://github.com/kevinpt/symbolator',
      enabled: true
    },
    {
      prettyName: 'TikZ',
      diagramType: 'tikz',
      langName: ['pre>code.language-tikz', 'pre>code.language-kroki-tikz'],
      url: 'https://github.com/pgf-tikz/pgf',
      enabled: true
    },
    {
      prettyName: 'UMlet',
      diagramType: 'umlet',
      langName: ['pre>code.language-umlet', 'pre>code.language-kroki-umlet'],
      url: 'https://github.com/umlet/umlet',
      enabled: true
    },
    {
      prettyName: 'Vega',
      diagramType: 'vega',
      langName: ['pre>code.language-kroki-vega'],
      url: 'https://github.com/vega/vega',
      enabled: true
    },
    {
      prettyName: 'Vega-Lite',
      diagramType: 'vegalite',
      langName: ['pre>code.language-kroki-vegalite'],
      url: 'https://github.com/vega/vega-lite',
      enabled: true
    },
    {
      prettyName: 'WaveDrom',
      diagramType: 'wavedrom',
      langName: ['pre>code.language-kroki-wavedrom'],
      url: 'https://github.com/wavedrom/wavedrom',
      enabled: true
    },
    {
      prettyName: 'WireViz',
      diagramType: 'wireviz',
      langName: ['pre>code.language-wireviz', 'pre>code.language-kroki-wireviz'],
      url: 'https://github.com/formatc1702/WireViz',
      enabled: true
    }
  ]
}

/**
 * Render heading elements.
 *
 * @returns {Render}
 *   Transform.
 */
export function renderKroki(): Render {
  /**
   * Transform.
   *
   * @param {HTMLElement} tree
   *   Tree.
   * @param {KrokiOptions} [options]
   *   Kroki config.
   * @returns
   */
  return function (tree: HTMLElement, options?: KrokiOptions) {
    /** @type {KrokiOptions} */
    const settings: KrokiOptions = {
      ...defaultOptions,
      ...options
    }

    const graphsCache = settings.graphsCache
    if (settings.serverUrl) {
      setKrokiWebSite(settings.serverUrl)
    }
    const classList: string[] = []
    settings.diagramTypes?.forEach((t) => {
      if (t.enabled) {
        classList.push(...t.langName)
      }
    })
    if (classList.length === 0) return

    const classnames = classList.join(',')
    /** @type {NodeListOf<HTMLElement>} */
    const els: NodeListOf<HTMLElement> = tree.querySelectorAll(classnames)
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

      const krokiDiagramType = getKrokiDiagramType(el.className, true)
      if (krokiDiagramType.length > 0) {
        const classlist = [`${krokiDiagramType}`]
        if (meta.diagramClass && meta.diagramClass.length > 0) {
          classlist.push(meta.diagramClass)
        }
        const style = meta.style ? meta.style : ''
        const krokiImageFormat = meta.imageFormat ? meta.imageFormat : 'svg'
        const id = `${krokiDiagramType}-${Date.now()}-${i}`
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
      }
    })
  } as Render
}
