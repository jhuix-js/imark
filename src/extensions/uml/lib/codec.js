import zlib from 'zlib'

/**
 * Encode plantuml text for 64 bits
 *
 * @param {string} data
 * @returns {string}
 */
function encode64(data) {
  var r = ''
  for (var i = 0; i < data.length; i += 3) {
    if (i + 2 == data.length) {
      r += append3bytes(data.charCodeAt(i), data.charCodeAt(i + 1), 0)
    } else if (i + 1 == data.length) {
      r += append3bytes(data.charCodeAt(i), 0, 0)
    } else {
      r += append3bytes(data.charCodeAt(i), data.charCodeAt(i + 1), data.charCodeAt(i + 2))
    }
  }
  return r
}

/**
 * Append bytes
 *
 * @param {number} b1
 * @param {number} b2
 * @param {number} b3
 * @returns {string}
 */
function append3bytes(b1, b2, b3) {
  var c1 = b1 >> 2
  var c2 = ((b1 & 0x3) << 4) | (b2 >> 4)
  var c3 = ((b2 & 0xf) << 2) | (b3 >> 6)
  var c4 = b3 & 0x3f
  var r = ''
  r += encode6bit(c1 & 0x3f)
  r += encode6bit(c2 & 0x3f)
  r += encode6bit(c3 & 0x3f)
  r += encode6bit(c4 & 0x3f)
  return r
}

/**
 * encode with 6 bit
 *
 * @param {number} b
 * @returns {string}
 */
function encode6bit(b) {
  if (b < 10) {
    return String.fromCharCode(48 + b)
  }
  b -= 10
  if (b < 26) {
    return String.fromCharCode(65 + b)
  }
  b -= 26
  if (b < 26) {
    return String.fromCharCode(97 + b)
  }
  b -= 26
  if (b == 0) {
    return '-'
  }
  if (b == 1) {
    return '_'
  }
  return '?'
}

/**
 * Decode with 6 bit
 *
 * @param {string} cc
 * @returns {number}
 */
function decode6bit(cc) {
  var c = cc.charCodeAt(0)
  if (cc === '_') return 63
  if (cc === '-') return 62
  if (c >= 97) return c - 61 // - 97 + 26 + 10
  if (c >= 65) return c - 55 // - 65 + 10
  if (c >= 48) return c - 48
  return '?'.charCodeAt(0)
}

/**
 * Extract bytes
 *
 * @param {string} data
 * @returns {Array<number>}
 */
function extract3bytes(data) {
  var c1 = decode6bit(data[0])
  var c2 = decode6bit(data[1])
  var c3 = decode6bit(data[2])
  var c4 = decode6bit(data[3])
  var b1 = (c1 << 2) | ((c2 >> 4) & 0x3f)
  var b2 = ((c2 << 4) & 0xf0) | ((c3 >> 2) & 0xf)
  var b3 = ((c3 << 6) & 0xc0) | (c4 & 0x3f)
  return [b1, b2, b3]
}

/**
 * Decode plantuml text for 64 bits
 *
 * @param {string} data
 * @returns {string}
 */
function decode64(data) {
  var r = ''
  var i = 0
  for (i = 0; i < data.length; i += 4) {
    var t = extract3bytes(data.substring(i, i + 4))
    r = r + String.fromCharCode(t[0])
    r = r + String.fromCharCode(t[1])
    r = r + String.fromCharCode(t[2])
  }
  return r
}

/**
 * Zlib encode
 *
 * @param {string} data
 * @returns {string}
 */
function encode(data) {
  return encode64(
    zlib
      .deflateRawSync(data, {
        level: 9
      })
      .toString('binary')
  )
}

/**
 * Zlib decode
 *
 * @param {string} data
 * @returns {string}
 */
function decode(data) {
  return zlib.inflateRawSync(Buffer.from(decode64(data), 'binary')).toString()
}

/**
 * Encode uml text
 *
 * @export
 * @param {string} data
 * @returns {string}
 */
export function encodeUml(data) {
  const startuml = '@startuml'
  const enduml = '@enduml'
  const s = `${startuml}${String(data.split(startuml)[1]).split(enduml)[0] || ''}${enduml}`
  return encode(s)
}

/**
 * Decode uml text
 *
 * @export
 * @param {string} data
 * @returns {string}
 */
export function decodeUml(data) {
  return decode(data)
}
