import type { ShortcutsType } from '../types'

export const avatar: ShortcutsType = {
  name: 'avatar',
  value:
    'relative inline-flex '
    + '[&>div]:block [&>div]:aspect-square [&>div]:overflow-hidden '
    + '[&>img]:h-full [&>img]:w-full [&>img]:object-cover '
    + '[&>div]:[&.placeholder]:flex [&>div]:[&.placeholder]:items-center [&>div]:[&.placeholder]:justify-center '
    // online style
    + 'before:[&.online]:content-[\'\'] before:[&.online]:absolute before:[&.online]:z-10 before:[&.online]:rounded-full '
    + 'before:[&.online]:bg-light-success dark:before:[&.online]:bg-dark-success '
    + 'before:[&.online]:w-15% before:[&.online]:h-15% before:[&.online]:top-15% before:[&.online]:right-5% '
    + 'before:[&.online]:shadow-[0_0_0_2px_#2A303C] '
    // offline style
    + 'before:[&.offline]:content-[\'\'] before:[&.offline]:absolute before:[&.offline]:z-10 before:[&.offline]:rounded-full '
    + 'before:[&.offline]:bg-light-base-300 dark:before:[&.offline]:bg-dark-base-300 '
    + 'before:[&.offline]:w-15% before:[&.offline]:h-15% before:[&.offline]:top-15% before:[&.offline]:right-5% '
    + 'before:[&.offline]:shadow-[0_0_0_2px_#2A303C] ',
}

export const avatarGroup: ShortcutsType = {
  name: 'avatar-group',
  value:
    'flex overflow-hidden '
    + '[&>:where(.avatar)]:overflow-hidden [&>:where(.avatar)]:rounded-full '
    + '[&>:where(.avatar)]:border-4 [&>:where(.avatar)]:border-light-base-100 '
    + 'dark:[&>:where(.avatar)]:border-dark-base-100',
}
