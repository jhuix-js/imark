import type { IMarkPlugin } from '../../types'
import { Processor } from 'unified'
import { deepMerge } from '../../public/utils'
import remarkEmoji from 'remark-emoji'

export type EmojiOptions = import('remark-emoji').RemarkEmojiOptions
const emojiSetting: EmojiOptions = { accessible: true, emoticon: false }
export default function imarkEmoji(): IMarkPlugin {
  return {
    setting: (s: EmojiOptions) => {
      deepMerge(emojiSetting, s)
    },
    remark: (p: Processor): Processor => {
      return p.use<any, any, any>(remarkEmoji, emojiSetting)
    }
  }
}
