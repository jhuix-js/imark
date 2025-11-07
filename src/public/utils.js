import md5 from 'md5'

/**
 * Load style
 *
 * @param {string} id
 * @param {string} css
 */
export function loadStyle(id, css) {
  if (!document.head.querySelector('#' + id)) {
    let cssElement = document.createElement('style')
    cssElement.id = id
    cssElement.type = 'text/css'
    cssElement.appendChild(document.createTextNode(`${css}`))
    document.head.appendChild(cssElement)
  }
}

/**
 * Parse element meta
 *
 * @typedef {{
 *  diagramClass?: string,
 *  style?: string,
 *  hasAudio?: boolean,
 *  imageFormat?: string,
 *  options?: object,
 *  type?: string,
 *  kroki?: boolean | string
 * }} META
 * @param {HTMLElement} el
 * @returns {META | undefined}
 */
export function parseMeta(el) {
  /**
   * Meta object
   *
   * @type {META}
   */
  const meta = {}
  if (!el.dataset.meta) return meta

  try {
    /**
     * @type {{
     *  codeblock?: boolean | string,
     *  align?: string,
     *  width?: number | string,
     *  height?: number | string,
     *  style?: string,
     *  audio?: boolean,
     *  imageFormat?: string,
     *  options?: object,
     *  type?: string,
     *  kroki?: boolean | string
     * }}
     */
    const cfg = JSON.parse(el.dataset.meta)
    if (
      (typeof cfg.codeblock === 'boolean' && cfg.codeblock) ||
      (typeof cfg.codeblock === 'string' && cfg.codeblock.toLowerCase() === 'true')
    ) {
      return
    }

    if (cfg.align) {
      //default left
      if (cfg.align === 'center') {
        meta.diagramClass = 'diagram-center'
      } else if (cfg.align === 'right') {
        meta.diagramClass = 'diagram-right'
      }
    }
    if (cfg.width) {
      if (typeof cfg.width !== 'string') {
        meta.style = (!meta.style ? '' : meta.style) + `width:${cfg.width}px;`
      } else {
        meta.style = (!meta.style ? '' : meta.style) + `width:${cfg.width};`
      }
    }
    if (cfg.height) {
      if (typeof cfg.height !== 'string') {
        meta.style = (!meta.style ? '' : meta.style) + `height:${cfg.height}px;`
      } else {
        meta.style = (!meta.style ? '' : meta.style) + `height:${cfg.height};`
      }
    }
    if (cfg.style) {
      meta.style = meta.style ? meta.style + ' ' + cfg.style : cfg.style
    }
    if (cfg.audio) {
      meta.hasAudio = true
    }
    if (cfg.imageFormat) {
      meta.imageFormat = cfg.imageFormat
    }
    if (typeof cfg.options === 'object') {
      meta.options = cfg.options
    }
    if (cfg.type) {
      meta.type = cfg.type
    }
    if (cfg.kroki) {
      meta.kroki = cfg.kroki
    }
  } catch (error) {}
  return meta
}

/**
 * Check is object
 *
 * @param {object} item
 *     A object
 * @returns {boolean}
 *     Object is true, otherwise is false
 */
function isObject(item) {
  return item && typeof item === 'object' && !Array.isArray(item)
}

/**
 * Merge object with deepth
 *
 * @param {object} target
 *     Target object
 * @param {object[]} sources
 *     Source object or objects
 * @returns {object}
 *     Meraged Object
 */
export function deepMerge(target, ...sources) {
  for (const source of sources) {
    for (const [key, val] of Object.entries(source)) {
      // @ts-ignore
      if (isObject(val) && isObject(target[key])) {
        // @ts-ignore
        deepMerge(target[key], val)
      } else {
        Object.assign(target, { [key]: val })
      }
    }
  }
  return target
}

// /**
//  * Merge object with deepwith
//  *
//  * @param {object} dst
//  *     Dist object
//  * @param {object | object[]} src
//  *     Source object or objects
//  * @returns {object}
//  */
// export function deepMergeObject(dst, src) {
//   if (!dst || typeof dst !== 'object' || !src || typeof src !== 'object') {
//     return dst
//   }

//   if (Array.isArray(src)) {
//     src.forEach((obj) => {
//       deepMergeObject(dst, obj)
//     })
//     return dst
//   }

//   for (const [k, v] of Object.entries(src)) {
//     if (typeof v === 'undefined') continue
//     if (k in dst) {
//       // @ts-ignore
//       const d = dst[k]
//       if (d) {
//         if (typeof d === 'object' && typeof v === 'object' && v) {
//           deepMergeObject(d, v)
//           continue
//         }
//       }
//     }
//     if (v) {
//       // @ts-ignore
//       dst[k] = v
//     }
//   }

//   return dst
// }

/**
 * md5 hash
 *
 * @param {string} text
 * @returns {string}
 */
export function checkSum(text) {
  return md5(text).toString()
}
