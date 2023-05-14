import { ShortcutsType } from '../types'

export const badge: ShortcutsType = {
  name:'badge',
  value:
    "border border-light-neutral bg-light-neutral text-light-neutral-content rounded-[var(--badge)] " +
    "inline-flex items-center justify-center transition duration-200 ease-in-out " +
    "h-5 text-sm leading-5 w-[fit-content] pl-0.563rem pr-0.563rem "
}

export const badgePrimary: ShortcutsType = {
  name:'badge-primary',
  value:
    "border-light-primary bg-light-primary text-light-primary-content " +
    "dark:border-dark-primary dark:bg-dark-primary dark:text-dark-primary-content"
}

export const badgeSecondary: ShortcutsType = {
  name:'badge-secondary',
  value:
    "border-light-secondary bg-light-secondary text-light-secondary-content " +
    "dark:border-dark-secondary dark:bg-dark-secondary dark:text-dark-secondary-content"
}

export const badgeAccent: ShortcutsType = {
  name:'badge-accent',
  value:
    "border-light-accent bg-light-accent text-light-accent-content " +
    "dark:border-dark-accent dark:bg-dark-accent dark:text-dark-accent-content"
}

export const badgeInfo: ShortcutsType = {
  name:'badge-info',
  value:
    "border-transparent bg-light-info text-light-info-content " +
    "dark:border-transparent dark:bg-dark-info dark:text-dark-info-content"
}

export const badgeSuccess: ShortcutsType = {
  name:'badge-success',
  value:
    "border-transparent bg-light-success text-light-success-content " +
    "dark:border-transparent dark:bg-dark-success dark:text-dark-success-content"
}

export const badgeWarning: ShortcutsType = {
  name:'badge-warning',
  value:
    "border-transparent bg-light-warning text-light-warning-content " +
    "dark:border-transparent dark:bg-dark-warning dark:text-dark-warning-content"
}

export const badgeError: ShortcutsType = {
  name:'badge-error',
  value:
    "border-transparent bg-light-error text-light-error-content " +
    "dark:border-transparent dark:bg-dark-error dark:text-dark-error-content"
}

export const badgeGhost: ShortcutsType = {
  name:'badge-ghost',
  value:
    "border-light-base-200 bg-light-base-200 text-light-base-content " +
    "dark:border-dark-base-200 dark:bg-dark-base-200 dark:text-dark-base-content"
}

export const badgeOutline: ShortcutsType = {
  name:'badge-outline',
  value:
    // basic style
    "border-current border-opacity-50 bg-transparent text-current " +
    "dark:border-current dark:border-opacity-50 dark:bg-transparent dark:text-current " +
    // primary style
    "[&.btn-primary]:text-light-primary dark:[&.btn-primary]:text-dark-primary " +
    "[&.btn-primary]:border-light-primary [&.btn-primary]:bg-light-primary [&.btn-primary]:text-light-primary-content " +
    "dark:[&.btn-primary]:border-dark-primary dark:[&.btn-primary]:bg-dark-primary dark:[&.btn-primary]:text-dark-primary-content "
}
