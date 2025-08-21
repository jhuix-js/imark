/**
 * @typedef {import('abcjs')} ABC
 * @typedef {import('abcjs').AbcVisualParams} Options
 * @typedef {import('abcjs').SynthObjectController} SynthObjectController
 * @typedef {import('abcjs').NoteTimingEvent} NoteTimingEvent
 */

/**
 * Cursor control class
 */
class cursorControl {
  /**
   * Creates an instance of cursorControl.
   *
   * @constructor
   * @param {string} id
   */
  constructor(id) {
    const self = this

    /**
     * @type {() => void}
     */
    self.onReady = function () {}
    /**
     * @type {() => void}
     */
    self.onStart = function () {
      const tag = '#' + id + ' svg'
      const svg = document.querySelector(tag)
      const cursor = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'line'
      )
      cursor.setAttribute('class', 'abcjs-cursor')
      // @ts-ignore
      cursor.setAttributeNS(null, 'x1', 0)
      // @ts-ignore
      cursor.setAttributeNS(null, 'y1', 0)
      // @ts-ignore
      cursor.setAttributeNS(null, 'x2', 0)
      // @ts-ignore
      cursor.setAttributeNS(null, 'y2', 0)
      // @ts-ignore
      svg.appendChild(cursor)
    }
    /**
     * @type {number}
     */
    self.beatSubdivisions = 2
    /**
     * Beate event
     *
     * @type {(beatNumber: number, totalBeats: number, totalTime: number) => void}
     * @param {number} beatNumber
     * @param {number} totalBeats
     * @param {number} totalTime
     * @returns
     */
    self.onBeat = function (beatNumber, totalBeats, totalTime) {}
    /**
     * Note timing event
     *
     * @type {(ev: NoteTimingEvent) => void}
     * @param {NoteTimingEvent} ev
     * @returns
     */
    self.onEvent = function (ev) {
      if (ev.measureStart && ev.left === null) return // this was the second part of a tie across a measure line. Just ignore it.

      const className = '#' + id + ' svg .highlight'
      const lastSelection = document.querySelectorAll(className)
      for (let k = 0; k < lastSelection.length; k++)
        lastSelection[k].classList.remove('highlight')

      if (ev.elements) {
        for (let i = 0; i < ev.elements.length; i++) {
          const note = ev.elements[i]
          for (let j = 0; j < note.length; j++) {
            note[j].classList.add('highlight')
          }
        }
      }

      const tag = '#' + id + ' svg .abcjs-cursor'
      const cursor = document.querySelector(tag)
      if (cursor) {
        // @ts-ignore
        cursor.setAttribute('x1', ev.left - 2)
        // @ts-ignore
        cursor.setAttribute('x2', ev.left - 2)
        // @ts-ignore
        cursor.setAttribute('y1', ev.top)
        // @ts-ignore
        cursor.setAttribute('y2', ev.top + ev.height)
      }
    }
    /**
     * @type {() => void}
     */
    self.onFinished = function () {
      const className = '#' + id + ' svg .highlight'
      const els = document.querySelectorAll(className)
      for (let i = 0; i < els.length; i++) {
        els[i].classList.remove('highlight')
      }
      const tag = '#' + id + ' svg .abcjs-cursor'
      const cursor = document.querySelector(tag)
      if (cursor) {
        // @ts-ignore
        cursor.setAttribute('x1', 0)
        // @ts-ignore
        cursor.setAttribute('x2', 0)
        // @ts-ignore
        cursor.setAttribute('y1', 0)
        // @ts-ignore
        cursor.setAttribute('y2', 0)
      }
    }
  }
}

/**
 * Abc class
 *
 * @export
 * @class Abc
 */
export default class Abc {
  /**
   * Creates an instance of Abc.
   *
   * @param {ABC} abc
   */
  constructor(abc) {
    const self = this
    const ABCJS = abc

    /**
     * Render abc to a html element
     *
     * @type {(selector: string | HTMLElement, music: string, audio: string | HTMLElement | undefined, options: Options | undefined) => void}
     * @param {string | HTMLElement} selector
     *   selector element.
     * @param {string} music
     *   tune text.
     * @param {string | HTMLElement | undefined} [audio]
     *   audio element.
     * @param {Options | undefined} [options]
     *   optional.
     * @returns
     *   Transform.
     */
    self.render = function (selector, music, audio, options) {
      let id = ''
      if (typeof selector === 'string') {
        id = selector
      } else if (selector instanceof HTMLElement) {
        id = selector.id
      }
      if (!id) return

      /** @type {Options} */
      let abcOptions = {
        add_classes: true,
        responsive: 'resize',
        ...options
      }
      /** @type {SynthObjectController | null | undefined} */
      let synthControl
      if (audio) {
        let aid = ''
        if (typeof audio === 'string') {
          aid = audio
        } else if (audio instanceof HTMLElement) {
          aid = audio.id
        }
        if (aid) {
          if (ABCJS.synth.supportsAudio()) {
            synthControl = new ABCJS.synth.SynthController()
            synthControl.load('#' + aid, new cursorControl(id), {
              displayLoop: true,
              displayRestart: true,
              displayPlay: true,
              displayProgress: true,
              displayWarp: true
            })
          } else {
            const q = document.querySelector(aid)
            if (q) {
              q.innerHTML =
                "<div class='audio-error'>Audio is not supported in this browser.</div>"
            }
          }
        }
      }
      renderTune(selector, music, abcOptions, false, synthControl)

      /**
       * Render tune
       *
       * @param {string | HTMLElement} selector
       * @param {string} music
       * @param {Options} options
       * @param {boolean | undefined} [userAction]
       * @param {SynthObjectController | null | undefined} [synthControl]
       */
      function renderTune(selector, music, options, userAction, synthControl) {
        if (!synthControl) {
          ABCJS.renderAbc(selector, music, options)
          return
        }

        synthControl.disable(true)
        const visualObj = ABCJS.renderAbc(selector, music, options)[0]
        const midiBuffer = new ABCJS.synth.CreateSynth()
        midiBuffer
          .init({
            visualObj: visualObj
          })
          .then(() => {
            synthControl
              .setTune(visualObj, !!userAction)
              .then(() => {
                console.log('Audio successfully loaded.')
              })
              .catch((/** @type {Error}*/ error) => {
                console.warn('Audio problem:', error)
              })
          })
          .catch((/** @type {Error}*/ error) => {
            console.warn('Audio problem:', error)
          })
      }
    }
  }
}
