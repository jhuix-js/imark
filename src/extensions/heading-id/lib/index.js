/**
 * @typedef {import('mdast').Root} Root
 *
 * @typedef Options
 *   Options fields.
 * @property {boolean | null | undefined} [defaults]
 *   (default: `false`).
 * @property {boolean | null | undefined} [chapterNumber]
 *   Whether show chapter number (default: `false`).
 * @property {string | undefined} [heading]
 *   The heading regex expression of table of contents.
 */

import { visit } from 'unist-util-visit'
import { setNodeId, getDefaultId } from './util.js'

/**
 * Transform a string into an applicable expression.
 *
 * @param {string} value
 * @returns {RegExp}
 */
function toExpression(value) {
  return new RegExp('^(' + value + ')$', 'i')
}

/**
 * The remark plugin for supporting custom id and default id
 *
 * @param {Readonly<Options> | null | undefined} [options]
 *   Configuration (optional).
 * @returns
 *   Transform.
 */
export default function remarkHeadingId(options) {
  const settings = {
    defaults: false,
    chapterNumber: true,
    heading: '[\\[【]Table[ -]Of[ -]Contents[\\]】]|[\\[【]目录[\\]】]|[\\[【]TOC[\\]】]|\\{\\{TOC\\}\\}',
    ...options
  }

  /**
   * Transform.
   *
   * @param {Root} tree
   *   Tree.
   * @returns {undefined}
   *   Nothing.
   */
  return function (tree) {
    let n = [0, 0, 0, 0, 0, 0]
    let currDepth = 1
    const test = settings.heading ? toExpression(settings.heading) : undefined
    visit(tree, 'heading', (node) => {
      let lastChild = node.children[node.children.length - 1]
      if (lastChild && lastChild.type !== 'text' && 'children' in lastChild) {
        // @ts-ignore
        lastChild = lastChild.children[lastChild.children.length - 1]
      }
      if (lastChild && lastChild.type === 'text') {
        let string = lastChild.value.replace(/ +$/, '')
        if (test && test.test(string)) {
          setNodeId(node, 'imark-toc-head')
          return
        }

        if (settings.chapterNumber && node.depth > 1) {
          if (currDepth !== node.depth) {
            currDepth = node.depth
            let i = currDepth
            while (i < n.length) {
              n[i] = 0
              i++
            }
          }
          let prefix = ''
          let i = 1
          n[currDepth - 1]++
          while (i < node.depth) {
            prefix += `${n[i]}.`
            i++
          }
          string = prefix + ' ' + string
          lastChild.value = string
        }

        let matched = string.match(/ {#([^]+?)}$/)
        if (matched) {
          let id = matched[1]
          if (!!id.length) {
            setNodeId(node, id)

            string = string.substring(0, matched.index)
            lastChild.value = string
            return
          }
        }
      }

      if (settings.defaults) {
        // If no custom id was found, use default instead
        setNodeId(node, getDefaultId(node.children))
      }
    })
  }
}
