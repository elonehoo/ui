import type {ShortcutsType} from '../types'

export const avatar:ShortcutsType = {
  name:'avatar',
  value: "relative inline-flex [&>div]:block [&>div]:aspect-square [&>div]:overflow-hidden [&>img]:h-full [&>img]:w-full [&>img]:object-cover [&>div]:[&>.placeholder]:flex"
}

export const avatarGroup:ShortcutsType = {
  name:'avatar-group',
  value: "flex overflow-hidden [&>:where(.avatar)]:overflow-hidden [&>:where(.avatar)]:rounded-full [&>:where(.avatar)]:border-4 [&>:where(.avatar)]:border-light-base-100 dark:[&>:where(.avatar)]:border-dark-base-100"
}
