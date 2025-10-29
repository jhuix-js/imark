/**
 * @typedef {import('mdast').Nodes} Nodes
 * @typedef {import('mdast').RootContent} RootContent
 */

import { kebabCase, isEmpty } from 'lodash'
import { visit } from 'unist-util-visit'
import type { Root, RootContent, Nodes } from 'mdast'

/**
 * extract a children text for a node.
 *
 * @param {Array<RootContent>} children
 * @returns {string}
 */
function extractText(children: Array<RootContent>): string {
  return children
    .map((child) => {
      if ('value' in child && !isEmpty(child.value)) {
        return child.value
      } else if ('children' in child && child.children && child.children.length > 0) {
        return extractText(child.children)
      } else {
        return ''
      }
    })
    .join(' ')
}

/**
 * get default id.
 *
 * @param {Array<RootContent>} children
 * @returns {string}
 */
function getDefaultId(children: Array<RootContent>): string {
  return formatDefaultId(extractText(children))
}

/**
 * format default id.
 *
 * @param {string} value
 * @returns {string}
 */
function formatDefaultId(value: string): string {
  return kebabCase(value.replaceAll(/\\s+/g, ' ').trim())
}

/**
 * set node id.
 *
 * @param {Nodes} node
 * @param {string} id
 * @returns
 */
function setNodeId(node: Nodes, id: string) {
  if (!node.data) node.data = { hProperties: {} }
  // @ts-ignore
  if (!node.data.hProperties) node.data.hProperties = {}
  // @ts-ignore
  node.data.id = node.data.hProperties.id = id
}

/**
 * Transform a string into an applicable expression.
 *
 * @param {string} value
 * @returns {RegExp}
 */
function toExpression(value: string): RegExp {
  return new RegExp('^(' + value + ')$', 'i')
}

export interface HeadOptions {
  /**
   * Whether show chapter number.(default: `true`).
   * @type {boolean}
   */
  chapterNumber?: boolean
  /**
   * Whether apply defaults of heading id.(default: `false`)
   * @type {boolean}
   */
  defaults?: boolean
  /**
   * The heading regex expression of table of contents.
   * @type {string}
   */
  toc?: string
}

/**
 * The remark plugin for supporting custom id and default id
 *
 * @param {HeadOptions} [options]
 *   Configuration (optional).
 * @returns
 *   Transform.
 */
export function remarkHeadingId(options?: HeadOptions): (tree: Root) => void {
  const settings = {
    chapterNumber: true,
    defaults: false,
    toc: '[\\[【]Table[ -]Of[ -]Contents[\\]】]|[\\[【]目录[\\]】]|[\\[【]TOC[\\]】]|\\{\\{TOC\\}\\}',
    ...options
  }

  /**
   * Transform.
   *
   * @param {Root} tree
   *   Tree.
   * @returns
   *   Nothing.
   */
  return function (tree: Root) {
    let n = [0, 0, 0, 0, 0, 0]
    let currDepth = 1
    const test = settings.toc ? toExpression(settings.toc) : undefined
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
