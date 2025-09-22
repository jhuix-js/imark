import { raw } from 'hast-util-raw'
import { VFile } from 'vfile'
import type { Root } from 'hast'
import type { Raw } from 'mdast-util-to-hast'
import type { Parent, Node } from 'unist'

function findChildren(tree: Parent, cb: (node: Node, index: number, parent: Parent) => number) {
  if (!tree || !tree.children || !tree.children.length || !cb) {
    return
  }

  let index = -1
  // The length might change, so we do not cache it.
  while (++index < tree.children.length) {
    // Skip missing values.
    if (!(index in tree.children)) {
      continue
    }

    findChildren(tree.children[index] as Parent, cb)

    const result = cb(tree.children[index] as Parent, index, tree)

    // If `callback` returns a `number`, move `index` over to `number`.
    if (typeof result === 'number') {
      // Make sure that negative numbers do not break the loop.
      if (result < 0) {
        break
      }

      index = result - 1
    }
  }
}

/**
 * Rehype html elements for raw element
 *
 * @returns {(tree: Root) => void}
 *   Transform.
 */
export default function rehypeRaw(): (tree: Root) => void {
  /**
   * Transform.
   *
   * @param {Root} tree
   *   Tree.
   * @returns
   *   Nothing.
   */
  return (tree: Root) => {
    findChildren(tree, (node: Node, index: number, parent: Parent): number => {
      if (node.type === 'raw') {
        const root = raw(
          { type: 'root', children: [node as Raw] },
          {
            file: new VFile((node as Raw).value)
          }
        ) as Parent
        parent.children.splice(index, 1, ...root.children)
      }
      return index + 1
    })
  }
}
