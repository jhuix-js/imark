/**
 * @import {Root} from 'mdast'
 */

import { h } from 'hastscript'
import { visit } from 'unist-util-visit'
import { loadStyle } from '../../../public/utils'

let directiveCss = ''

/**
 * The remark plugin for supporting custom id and default id
 *
 * @returns
 *   Transform.
 */
export function remarkDirective() {
  /**
   * Transform.
   *
   * @param {Root} tree
   *   Tree.
   * @returns {undefined}
   *   Nothing.
   */
  return function (tree) {
    visit(tree, (node) => {
      switch (node.type) {
        case 'containerDirective':
          {
            const name = node.name ? node.name.toLowerCase() : ''
            if (name === 'note' || name === 'alert' || name === '提示' || name === '注意') {
              const data = node.data || (node.data = {})
              const tagName = 'div'
              data.hName = tagName
              data.hProperties = h(tagName, node.attributes || {}).properties
              const className = data.hProperties.className
                ? !Array.isArray(data.hProperties.className)
                  ? // @ts-ignore
                    (data.hProperties.className = [data.hProperties.className])
                  : data.hProperties.className
                : (data.hProperties.className = [])
              const typeName = name === 'alert' || name === '注意' ? 'alert' : 'container'
              className.unshift(typeName)
              className.unshift('imark-container')
              if (data.hProperties.afterStyle || data.hProperties.beforeStyle) {
                const randName = typeName + '-' + Date.now() + '-' + Math.floor(Math.random() * 10000)
                className.push(randName)
                directiveCss +=
                  `.${className.join('.')}` +
                  (!!data.hProperties.afterStyle
                    ? ':after{' + data.hProperties.afterStyle + '}'
                    : ':before{' + data.hProperties.beforeStyle + '}')
              }
              if (node.children.length > 0) {
                const childData = node.children[0].data || (node.children[0].data = {})
                // @ts-ignore
                if (childData.directiveLabel) {
                  const prop = childData.hProperties || (childData.hProperties = {})
                  const childClassName = prop.className
                    ? !Array.isArray(prop.className)
                      ? // @ts-ignore
                        (prop.className = [prop.className])
                      : prop.className
                    : (prop.className = [])
                  childClassName.push('container-title')
                }
              }
            }
          }
          break
        case 'leafDirective':
          {
            const name = node.name ? node.name.toLowerCase() : ''
            if (name === 'media' || name === '媒体') {
              const data = node.data || (node.data = {})
              data.hName = 'div'
              if (node.children.length > 0) {
                const title = {
                  type: 'paragraph',
                  children: [node.children[0]],
                  positon: node.children[0].position,
                  data: {
                    hProperties: {
                      className: ['media-title']
                    }
                  }
                }
                // @ts-ignore
                node.children.splice(0, 1, title)
              }
              const attributes = node.attributes || {}
              const id = attributes.id
              const url = attributes.url || ''
              const width = attributes.width || 200
              const height = attributes.height || 200
              const allowFullScreen = !!attributes.allowFullScreen
              const frameBorder = attributes.frameBorder || 0
              const className =
                attributes.className && !Array.isArray(attributes.className)
                  ? // @ts-ignore
                    (attributes.className = [attributes.className])
                  : attributes.className
              const paragraph = {
                type: 'paragraph',
                children: [],
                data: {
                  hName: 'iframe',
                  hProperties: {
                    id: id,
                    className: className,
                    src: url,
                    width: width,
                    height: height,
                    frameBorder: frameBorder,
                    allow: 'picture-in-picture',
                    allowFullScreen: allowFullScreen
                  }
                },
                position: node.position
              }
              // @ts-ignore
              node.children.push(paragraph)
            }
          }
          break
        case 'textDirective':
          {
            const data = node.data || (node.data = {})
            const name = node.name ? node.name.toLowerCase() : ''
            let tagName = 'span'
            if (name === 'css') {
              if (node.children.length > 0) {
                tagName = 'style'
              } else {
                tagName = 'link'
              }
            }

            data.hName = tagName
            data.hProperties = h(tagName, node.attributes || {}).properties
          }
          break
      }
    })
  }
}

/**
 * Render directive css.
 *
 * @returns
 *   Transform.
 */
export function renderDirective() {
  /**
   * Transform.
   *
   * @param {HTMLElement} tree
   *   Tree.
   * @returns
   *   Transform.
   */
  return function (tree) {
    if (directiveCss.length > 0) {
      loadStyle('directive-css', directiveCss)
    }
  }
}
