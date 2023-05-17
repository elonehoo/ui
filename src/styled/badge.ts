import type { ShortcutsType } from '../types'

export const badge: ShortcutsType = {
  name: 'badge',
  value:
    'border border-light-neutral bg-light-neutral text-light-neutral-content rounded-[var(--badge)] '
    + 'inline-flex items-center justify-center transition duration-200 ease-in-out '
    + 'h-5 text-sm leading-5 w-[fit-content] pl-0.563rem pr-0.563rem [&.badge-outline]:bg-transparent ',
}

export const badgePrimary: ShortcutsType = {
  name: 'badge-primary',
  value:
    'border-light-primary bg-light-primary text-light-primary-content '
    + 'dark:border-dark-primary dark:bg-dark-primary dark:text-dark-primary-content '
    + '[&.badge-outline]:text-light-primary dark:[&.badge-outline]:text-dark-primary ',
}

export const badgeSecondary: ShortcutsType = {
  name: 'badge-secondary',
  value:
    'border-light-secondary bg-light-secondary text-light-secondary-content '
    + 'dark:border-dark-secondary dark:bg-dark-secondary dark:text-dark-secondary-content '
    + '[&.badge-outline]:text-light-secondary dark:[&.badge-outline]:text-dark-secondary ',
}

export const badgeAccent: ShortcutsType = {
  name: 'badge-accent',
  value:
    'border-light-accent bg-light-accent text-light-accent-content '
    + 'dark:border-dark-accent dark:bg-dark-accent dark:text-dark-accent-content '
    + '[&.badge-outline]:text-light-accent dark:[&.badge-outline]:text-dark-accent ',
}

export const badgeInfo: ShortcutsType = {
  name: 'badge-info',
  value:
    'border-light-info bg-light-info text-light-info-content '
    + 'dark:border-dark-info dark:bg-dark-info dark:text-dark-info-content '
    + '[&.badge-outline]:text-light-info dark:[&.badge-outline]:text-dark-info ',
}

export const badgeSuccess: ShortcutsType = {
  name: 'badge-success',
  value:
    'border-light-success bg-light-success text-light-success-content '
    + 'dark:border-dark-success dark:bg-dark-success dark:text-dark-success-content '
    + '[&.badge-outline]:text-light-success dark:[&.badge-outline]:text-dark-success ',
}

export const badgeWarning: ShortcutsType = {
  name: 'badge-warning',
  value:
    'border-light-warning bg-light-warning text-light-warning-content '
    + 'dark:border-dark-warning dark:bg-dark-warning dark:text-dark-warning-content '
    + '[&.badge-outline]:text-light-warning dark:[&.badge-outline]:text-dark-warning ',
}

export const badgeError: ShortcutsType = {
  name: 'badge-error',
  value:
    'border-light-error bg-light-error text-light-error-content '
    + 'dark:border-dark-error dark:bg-dark-error dark:text-dark-error-content '
    + '[&.badge-outline]:text-light-error dark:[&.badge-outline]:text-dark-error ',
}

export const badgeGhost: ShortcutsType = {
  name: 'badge-ghost',
  value:
    'border-light-base-200 bg-light-base-200 text-light-base-content '
    + 'dark:border-dark-base-200 dark:bg-dark-base-200 dark:text-dark-base-content',
}

export const badgeOutline: ShortcutsType = {
  name: 'badge-outline',
  value:
    // basic style
    'border-current border-opacity-50 bg-transparent text-current '
    + 'dark:border-current dark:border-opacity-50 dark:bg-transparent dark:text-current ',
}

export const badgeXs: ShortcutsType = {
  name: 'badge-xs',
  value:
    // basic style
    'h-3 text-xs leading-3 '
    + 'pl-0.313rem pr-0.313rem ',
}

export const badgeSm: ShortcutsType = {
  name: 'badge-sm',
  value:
    // basic style
    'h-4 text-xs leading-4 '
    + 'pl-0.438rem pr-0.438rem ',
}

export const badgeMd: ShortcutsType = {
  name: 'badge-md',
  value:
    // basic style
    'h-5 text-sm leading-5 '
    + 'pl-0.563rem pr-0.563rem ',
}

export const badgeLg: ShortcutsType = {
  name: 'badge-lg',
  value:
    // basic style
    'h-6 text-base leading-6 '
    + 'pl-0.588rem pr-0.688rem ',
}
