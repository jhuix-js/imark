/**
 * @typedef {import('mdast').Nodes} Nodes
 * @typedef {import('mdast').RootContent} RootContent
 */

import {kebabCase, isEmpty} from 'lodash'

/**
 * extract a children text for a node.
 *
 * @param {Array<RootContent>} children
 * @returns {string}
 */
const extractText = (children) => {
  return children
    .map((child) => {
      if ('value' in child && !isEmpty(child.value)) {
        return child.value
      } else if (
        'children' in child &&
        child.children &&
        child.children.length > 0
      ) {
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
const getDefaultId = (children) => {
  return formatDefaultId(extractText(children))
}

/**
 * format default id.
 *
 * @param {string} value
 * @returns {string}
 */
const formatDefaultId = (value) => {
  return kebabCase(value.replaceAll(/\\s+/g, ' ').trim())
}

/**
 * set node id.
 *
 * @param {Nodes} node
 * @param {string} id
 * @returns
 */
const setNodeId = (node, id) => {
  if (!node.data) node.data = {}
  if (!node.data.hProperties) node.data.hProperties = {}
  // @ts-ignore
  node.data.id = node.data.hProperties.id = id
}

export {extractText, getDefaultId, formatDefaultId, setNodeId}
