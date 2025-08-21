/**
 * @typedef {import('hast').Root} Root
 * @typedef {import('hast').Text} Text
 * @typedef {import('hast').Element} Element
 * @typedef {import('../index').KatexDelimiter} KatexDelimiter
 * @typedef {import('../index').MathDelimiters} MathDelimiters
 * @typedef {import('../index').KatexDelimiters} KatexDelimiters
 */
import {visitParents} from 'unist-util-visit-parents'
import {parseMeta, loadStyle} from '../../../public/utils'
import asciimathToTex from './asciimath2tex'
// @ts-ignore
import katexCss from 'katex/dist/katex.min.css?inline'

/**
 * Render to html string.
 *
 * @typedef {(code: string) => string} RenderCallback
 * @param {string} id
 * @param {string} name
 * @param {string} data
 * @param {RenderCallback} callback
 * @returns {string}
 */
function renderToHtml(id, name, data, callback) {
  let html = ''
  const codes = data.split(/\n[ \f\r\t\v]*\n/)
  if (codes.length > 1) {
    codes.forEach((code) => {
      code = code.trim()
      if (code !== '') {
        let math = code
        if (callback) {
          math = callback(code)
        }
        html +=
          name.length > 0
            ? `<div id="${id}" class="${name}">${math}</div>`
            : `<div id="${id}">${math}</div>`
      } else {
        html += '<br>'
      }
    })
  } else {
    let math = data
    if (callback) {
      math = callback(data)
    }
    html +=
      name.length > 0
        ? `<div id="${id}" class="${name}">${math}</div>`
        : `<div id="${id}">${math}</div>`
  }
  return html
}

/** @type {KatexDelimiters} */
const defDelimiters = {
  texmath: {
    display: [
      {left: '$$', right: '$$'},
      {left: '\\[', right: '\\]'},
      {left: '\\begin{equation}', right: '\\end{equation}'},
      {left: '\\begin{align}', right: '\\end{align}'},
      {left: '\\begin{alignat}', right: '\\end{alignat}'},
      {left: '\\begin{gather}', right: '\\end{gather}'},
      {left: '\\begin{CD}', right: '\\end{CD}'}
    ],
    inline: [{left: '\\(', right: '\\)'}]
  },
  asciimath: {
    display: [{left: '@@', right: '@@'}],
    inline: [{left: '\\$', right: '\\$'}]
  }
}

/**
 * Get math delimiter from KatexDelimiters.
 *
 * @param {KatexDelimiters} delimiters
 *   Katex delimiters.
 * @param {'texmath' | 'asciimath'} style
 *   Math style.
 * @param {'display' | 'inline'} type
 *   Delimiter type.
 * @returns {KatexDelimiter[]}
 *   KatexDelimiter array.
 */
function getMathDelimiter(delimiters, style, type) {
  if (
    !(style in delimiters) ||
    !(delimiters[style] && type in delimiters[style]) ||
    !(delimiters[style][type] && Array.isArray(delimiters[style][type])) ||
    !delimiters[style][type].length
  ) {
    if (!defDelimiters[style] || !defDelimiters[style][type]) return []
    return defDelimiters[style][type]
  }

  delimiters[style][type].forEach((delimiter) => {
    delimiter.display = type === 'inline' ? false : true
    delimiter.asciimath = style !== 'asciimath' ? false : true
  })
  return delimiters[style][type]
}

/**
 * https://stackoverflow.com/questions/3446170/escape-string-for-use-in-javascript-regex
 * @param {string} str
 * @returns {string} regexp escaped string
 */
function escapeRegExp(str) {
  return str.replace(/[-[\]/{}()*+?.\\$^|]/g, '\\$&')
}

let inlineMathCount = 0

/**
 * Parse element
 *
 * @param {Element} node
 *   Hast Element.
 * @param {{test: RegExp, delimiter: KatexDelimiter}[]} mathDelimiters
 *   Hast Element.
 * @returns
 *   Transform.
 */
function parseNode(node, mathDelimiters) {
  if (!node.children || node.children.length === 0) return

  node.children.forEach((element) => {
    if (element.type !== 'text' || element.value === '\n') return

    /** @type {Text} */
    const text = element
    const newContent = mathDelimiters.reduce((acc, {test, delimiter}) => {
      return acc.replace(test, (match, math) => {
        const _ = match
        ++inlineMathCount
        if (delimiter.asciimath) {
          math = asciimathToTex(math)
        }
        if (delimiter.display) {
          math = `\\[${math}\\]`
        } else {
          math = `\\(${math}\\)`
        }
        return math
      })
    }, text.value)
    text.value = newContent
  })
}
/**
 * Rehype elements with katex
 *
 * @param {KatexDelimiters} delimiters
 *   Katex delimiters.
 * @returns
 *   Transform.
 */
export function rehypeKatex(delimiters) {
  /** @type {KatexDelimiter[]} */
  const katexDelimites = getMathDelimiter(delimiters, 'texmath', 'display')
    .concat(getMathDelimiter(delimiters, 'texmath', 'inline'))
    .concat(getMathDelimiter(delimiters, 'asciimath', 'display'))
    .concat(getMathDelimiter(delimiters, 'asciimath', 'inline'))
  const mathDelimiters = katexDelimites.map((delimiter) => {
    const test = new RegExp(
      `${escapeRegExp(delimiter.left)}(.+?)${escapeRegExp(delimiter.right)}`,
      'g'
    )
    return {test, delimiter}
  })

  const headings = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
  /**
   * Transform.
   *
   * @param {Root} tree
   *   Tree.
   * @returns
   *   Transform.
   */
  return function (tree) {
    inlineMathCount = 0
    visitParents(tree, 'element', (node) => {
      if (headings.indexOf(node.tagName) === -1) {
        parseNode(node, mathDelimiters)
      }
    })
  }
}

/**
 * Render elements with a `language-latex|katex|asciimath`.
 *
 * @returns
 *   Transform.
 */
export function renderKatex() {
  /**
   * Transform.
   *
   * @param {HTMLElement} tree
   *   Tree.
   * @param {import('katex').KatexOptions} [options]
   *   Katex Options.
   * @returns
   *   Transform.
   */
  return function (tree, options) {
    const config = {
      displayMode: true,
      throwOnError: false, // fail silently
      errorColor: '#ff0000',
      ...options
    }
    /** @type {NodeListOf<HTMLElement>} */
    const katexs = tree.querySelectorAll(
      'pre>code.language-latex,language-katex'
    )
    /** @type {NodeListOf<HTMLElement>} */
    const asciimaths = tree.querySelectorAll('pre>code.language-asciimath')
    // /** @type {NodeListOf<HTMLElement>} */
    // const katexMaths = tree.querySelectorAll('.katex-math')
    if (inlineMathCount > 0) {
      // @ts-ignore
      import('katex/dist/contrib/auto-render.mjs').then((c) => {
        const render = c.default
        loadStyle('katex-css', katexCss)
        render(tree)
      })
    }
    if (katexs.length === 0 && asciimaths.length === 0) return

    import('katex').then((c) => {
      const katex = c.default
      loadStyle('katex-css', katexCss)
      if (katexs.length > 0) {
        katexs.forEach((el, i) => {
          const pre = el.parentElement
          if (!pre) return

          const meta = parseMeta(el)
          if (!meta) return

          const data = el.innerText
          const id = `katex-${Date.now()}-${i}`
          let className = ''
          if (meta.diagramClass && meta.diagramClass.length > 0) {
            className = meta.diagramClass
          }
          pre.outerHTML = renderToHtml(id, className, data, (code) => {
            return katex.renderToString(code, config)
          })
        })
      }

      if (asciimaths.length > 0) {
        asciimaths.forEach((el, i) => {
          const pre = el.parentElement
          if (!pre) return

          const meta = parseMeta(el)
          if (!meta) return

          const data = el.innerText
          const id = `asciimath-${Date.now()}-${i}`
          let className = ''
          if (meta.diagramClass && meta.diagramClass.length > 0) {
            className = meta.diagramClass
          }
          pre.outerHTML = renderToHtml(id, className, data, (code) => {
            return katex.renderToString(asciimathToTex(code), config)
          })
        })
      }
    })
  }
}
