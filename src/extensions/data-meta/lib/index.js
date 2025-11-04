/**
 * @typedef {import('hast').Root} HRoot
 * @typedef {import('mdast').Root} MRoot
 */

import {visit} from 'unist-util-visit'
import {visitParents} from 'unist-util-visit-parents'

/**
 * The remark plugin for supporting data meta
 *
 * @returns
 *   Transform.
 */

export function remarkDataMeta() {
  /**
   * Transform.
   *
   * @param {MRoot} tree
   *   Tree.
   * @returns
   *   Nothing.
   */
  return function (tree) {
    visit(tree, 'code', (node) => {
      if (node.meta) {
        const data = node.data || (node.data = {})
        const properties = data.hProperties || (data.hProperties = {})
        properties['data-meta'] = node.meta
      }
    })
  }
}

/**
 * Rehype elements with data meta attribute
 *
 * @returns
 *   Transform.
 */
export function rehypeDataMeta() {
  /**
   * Transform.
   *
   * @param {HRoot} tree
   *   Tree.
   * @returns
   *   Nothing.
   */
  return function (tree) {
    visitParents(tree, 'element', function (node) {
      if (node.data && node.data.meta) {
        console.log('data meta:', node.data.meta)
        node.properties['data-meta'] = node.data.meta
      }
    })
  }
}
