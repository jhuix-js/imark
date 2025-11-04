/**
 * Kroki web api site
 *
 * @type {string}
 */
let krokiWebSite = 'https://kroki.io'

/**
 *
 * @param {string} website
 */
export function setKrokiWebSite(website) {
  if (website.length === 0) return
  if (website[website.length - 1] === '/') {
    krokiWebSite = website.substring(0, website.length - 1)
    return
  }

  krokiWebSite = website
}

/**
 *
 * @param {string} classname
 * @param {boolean | string} [kroki]
 * @returns {string}
 */
export function getKrokiDiagramType(classname, kroki) {
  let diagramType = ''
  if (typeof kroki === 'string' || !kroki) {
    if (!kroki || kroki.length === 0) {
      if (classname.substring(0, 15) === 'language-kroki-') {
        diagramType = classname.substring(15)
      }
    } else {
      diagramType = kroki
    }
  } else {
    if (classname.substring(0, 15) === 'language-kroki-') {
      diagramType = classname.substring(15)
    } else if (classname.substring(0, 9) === 'language-') {
      diagramType = classname.substring(9)
    }
  }
  return diagramType
}

/**
 *
 * @param {string} diagramType
 * @param {string} id
 * @param {string} classname
 * @param {string} imageFormat
 * @param {string} data
 * @param {(html: string | HTMLElement, id?: string) => void} callback
 * @returns
 */
export function getKrokiImage(diagramType, id, classname, imageFormat, data, callback) {
  let encoding = 'utf8'
  let mediaType = '*/*'
  if (imageFormat === 'txt' || imageFormat === 'atxt' || imageFormat === 'utxt') {
    mediaType = 'text/plain; charset=utf-8'
    encoding = 'utf8'
  } else if (imageFormat === 'svg') {
    mediaType = 'image/svg+xml'
    encoding = 'binary'
  } else if (imageFormat === 'png') {
    mediaType = 'image/png'
    encoding = 'binary'
  }

  try {
    fetch(`${krokiWebSite}/${diagramType}/${imageFormat}`, {
      method: 'POST',
      body: data,
      headers: { Accept: `${mediaType}`, 'Content-Type': 'text/plain; charset=utf-8' }
    })
      .then((res) => {
        if (res.status >= 400) {
          throw new Error('Bad response from kroki server')
        }

        res.text().then((text) => {
          const outerElement = document.createElement('div')
          if (classname.length > 0) {
            outerElement.className = classname
          }
          outerElement.innerHTML = text
          outerElement.children[0].id = id
          callback(outerElement)
        })
      })
      .catch((error) => {
        callback(`<pre class="language-text"><code>${error.toString()}</code></pre>`)
      })
  } catch (/** @type {any} */ error) {
    callback(`<pre class="language-text"><code>${error.toString()}</code></pre>`)
  }
}
