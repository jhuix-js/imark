/**
 * @typedef {import('mdast').Root} Root
 *
 * @typedef Options
 *   Options fields.
 * @property {boolean | null | undefined} [defaults]
 *   (default: `false`).
 */

import {visit} from 'unist-util-visit'
import {setNodeId, getDefaultId} from './util.js'

/**
 * The remark plugin for supporting custom id and default id
 *
 * @param {Readonly<Options> | null | undefined} [options]
 *   Configuration (optional).
 * @returns
 *   Transform.
 */
export default function remarkHeadingId(options = {defaults: false}) {
  /**
   * Transform.
   *
   * @param {Root} tree
   *   Tree.
   * @returns {undefined}
   *   Nothing.
   */
  return function (tree) {
    visit(tree, 'heading', (node) => {
      let lastChild = node.children[node.children.length - 1]
      if (lastChild && lastChild.type === 'text') {
        let string = lastChild.value.replace(/ +$/, '')
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

      if (options && options.defaults) {
        // If no custom id was found, use default instead
        setNodeId(node, getDefaultId(node.children))
      }
    })
  }
}
