import type {ShortcutsType} from '../types'
export const alert:ShortcutsType = {
  name:'alert',
  value: 'bg-light-base-200 p-4 rounded-1em dark:bg-dark-base-200 flex w-full flex-col items-center justify-between gap-4 space-y-2 md:flex-row md:space-y-0 [&>:where(h4)]:flex [&>:where(h4)]:items-center [&>:where(h4)]:gap-2'
}

export const alertInfo:ShortcutsType = {
  name:'alert-info',
  value: 'bg-light-info dark:bg-dark-info text-light-info-content dark:text-dark-info-content'
}

export const alertSuccess:ShortcutsType = {
  name:'alert-success',
  value: 'bg-light-success dark:bg-dark-success text-light-success-content dark:text-dark-success-content'
}

export const alertWarning:ShortcutsType = {
  name:'alert-warning',
  value: 'bg-light-warning dark:bg-dark-warning text-light-warning-content dark:text-dark-warning-content'
}

export const alertError:ShortcutsType = {
  name:'alert-error',
  value: 'bg-light-error dark:bg-dark-error text-light-error-content dark:text-dark-error-content'
}
