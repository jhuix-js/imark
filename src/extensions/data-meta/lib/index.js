/**
 * @typedef {import('hast').Root} Root
 */

import {visitParents} from 'unist-util-visit-parents'

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
   * @param {Root} tree
   *   Tree.
   * @returns
   *   Transform.
   */
  return function (tree) {
    visitParents(tree, 'element', function (element) {
      if (element.data && element.data.meta) {
        element.properties['data-meta'] = element.data.meta
      }
    })
  }
}
