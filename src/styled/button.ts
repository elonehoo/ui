import type { ShortcutsType } from '../types'

export const button: ShortcutsType = {
  name: 'btn',
  value:
    // btn style
    'border animate-[button-pop_0.25s_ease-out] uppercase outline-offset-2 '
    + 'font-semibold uppercase no-underline '
    + '[&:active:hover]:animate-none [&:active:hover]:scale-95 '
    + '[&:active:focus]:animate-none [&:active:focus]:scale-95 '
    // btn unstyle
    + 'inline-flex flex-shrink-0 cursor-pointer select-none flex-wrap items-center justify-center border-transparent text-center transition duration-200 ease-in-out rounded-0.5rem '
    + 'h-12 px-4 text-sm min-h-12 leading-[1em] '
    // default btn
    + 'border-light-neutral bg-light-neutral text-light-neutral-content no-underline '
    + 'dark:border-dark-neutral dark:bg-dark-neutral dark:text-dark-neutral-content '
    + 'hover:border-light-neutral-focus hover:bg-light-neutral-focus '
    + 'dark:hover:border-dark-neutral-focus dark:hover:bg-dark-neutral-focus '
    + '[&.btn-active]:border-light-neutral-focus [&.btn-active]:bg-light-neutral-focus '
    + 'dark:[&.btn-active]:border-dark-neutral-focus dark:[&.btn-active]:bg-dark-neutral-focus '
    + 'focus-visible:outline-2px focus-visible:outline-solid focus-visible:outline-#111318 '
    // disabled style
    + 'disabled:cursor-not-allowed disabled:animate-none disabled:border-opacity-0 disabled:bg-light-neutral disabled:dark:bg-dark-neutral disabled:bg-opacity-20 disabled:text-light-base-content disabled:dark:text-dark-base-content disabled:text-opacity-20 disabled:dark:text-opacity-20 '
    + 'disabled:hover:border-opacity-0 disabled:hover:bg-light-neutral disabled:hover:bg-opacity-20 disabled:hover:text-light-base-content disabled:dark:hover:text-dark-base-content disabled:hover:text-opacity-20 disabled:dark:hover:text-opacity-20 ',
}

export const buttonPrimary: ShortcutsType = {
  name: 'btn-primary',
  value:
    'border-light-primary bg-light-primary text-light-primary-content '
    + 'dark:border-dark-primary dark:bg-dark-primary dark:text-dark-primary-content '
    + 'hover:border-light-primary-focus hover:bg-light-primary-focus '
    + 'dark:hover:border-dark-primary-focus dark:hover:bg-dark-primary-focus '
    + '[&.btn-active]:border-light-primary-focus [&.btn-active]:bg-light-primary-focus '
    + 'dark:[&.btn-active]:border-dark-primary-focus dark:[&.btn-active]:bg-dark-primary-focus '
    + 'focus-visible:outline-2px focus-visible:outline-solid focus-visible:outline-#661AE6',
}

export const buttonSecondary: ShortcutsType = {
  name: 'btn-secondary',
  value:
    'border-light-secondary bg-light-secondary text-light-secondary-content '
    + 'dark:border-dark-secondary dark:bg-dark-secondary dark:text-dark-secondary-content '
    + 'hover:border-light-secondary-focus hover:bg-light-secondary-focus '
    + 'dark:hover:border-dark-secondary-focus dark:hover:bg-dark-secondary-focus '
    + '[&.btn-active]:border-light-secondary-focus [&.btn-active]:bg-light-secondary-focus '
    + 'dark:[&.btn-active]:border-dark-secondary-focus dark:[&.btn-active]:bg-dark-secondary-focus '
    + 'focus-visible:outline-2px focus-visible:outline-solid focus-visible:outline-#003320',
}

export const buttonAccent: ShortcutsType = {
  name: 'btn-accent',
  value:
    'border-light-accent bg-light-accent text-light-accent-content '
    + 'dark:border-dark-accent dark:bg-dark-accent dark:text-dark-accent-content '
    + 'hover:border-light-accent-focus hover:bg-light-accent-focus '
    + 'dark:hover:border-dark-accent-focus dark:hover:bg-dark-accent-focus '
    + '[&.btn-active]:border-light-accent-focus [&.btn-active]:bg-light-accent-focus '
    + 'dark:[&.btn-active]:border-dark-accent-focus dark:[&.btn-active]:bg-dark-accent-focus '
    + 'focus-visible:outline-2px focus-visible:outline-solid focus-visible:outline-#1FB2A5',
}

export const buttonInfo: ShortcutsType = {
  name: 'btn-info',
  value:
    'border-light-info bg-light-info text-light-info-content '
    + 'dark:border-dark-info dark:bg-dark-info dark:text-dark-info-content '
    + 'hover:border-light-info hover:bg-light-info '
    + 'dark:hover:border-dark-info dark:hover:bg-dark-info '
    + '[&.btn-active]:border-light-info [&.btn-active]:bg-light-info '
    + 'dark:[&.btn-active]:border-dark-info dark:[&.btn-active]:bg-dark-info '
    + 'focus-visible:outline-2px focus-visible:outline-solid focus-visible:outline-#3ABFF8',
}

export const buttonSuccess: ShortcutsType = {
  name: 'btn-success',
  value:
    'border-light-success bg-light-success text-light-success-content '
    + 'dark:border-dark-success dark:bg-dark-success dark:text-dark-success-content '
    + 'hover:border-light-success hover:bg-light-success '
    + 'dark:hover:border-dark-success dark:hover:bg-dark-success '
    + '[&.btn-active]:border-light-success [&.btn-active]:bg-light-success '
    + 'dark:[&.btn-active]:border-dark-success dark:[&.btn-active]:bg-dark-success '
    + 'focus-visible:outline-2px focus-visible:outline-solid focus-visible:outline-#36D399',
}

export const buttonWarning: ShortcutsType = {
  name: 'btn-warning',
  value:
    'border-light-warning bg-light-warning text-light-warning-content '
    + 'dark:border-dark-warning dark:bg-dark-warning dark:text-dark-warning-content '
    + 'hover:border-light-warning hover:bg-light-warning '
    + 'dark:hover:border-dark-warning dark:hover:bg-dark-warning '
    + '[&.btn-active]:border-light-warning [&.btn-active]:bg-light-warning '
    + 'dark:[&.btn-active]:border-dark-warning dark:[&.btn-active]:bg-dark-warning '
    + 'focus-visible:outline-2px focus-visible:outline-solid focus-visible:outline-#FBBD23',
}

export const buttonError: ShortcutsType = {
  name: 'btn-error',
  value:
    'border-light-error bg-light-error text-light-error-content '
    + 'dark:border-dark-error dark:bg-dark-error dark:text-dark-error-content '
    + 'hover:border-light-error hover:bg-light-error '
    + 'dark:hover:border-dark-error dark:hover:bg-dark-error '
    + '[&.btn-active]:border-light-error [&.btn-active]:bg-light-error '
    + 'dark:[&.btn-active]:border-dark-error dark:[&.btn-active]:bg-dark-error '
    + 'focus-visible:outline-2px focus-visible:outline-solid focus-visible:outline-#F97171',
}

export const buttonGhost: ShortcutsType = {
  name: 'btn-ghost',
  value:
    'border border-transparent bg-transparent text-current '
    + 'border-none dark:border-transparent dark:bg-transparent dark:text-current '
    + 'hover:border-opacity-0 hover:bg-light-base-content hover:bg-opacity-20 dark:hover:bg-dark-base-content dark:hover:bg-opacity-20 '
    + '[&.btn-active]:border-opacity-0 [&.btn-active]:bg-light-base-content [&.btn-active]:bg-opacity-20 '
    + 'dark:[&.btn-active]:bg-dark-base-content '
    + 'focus-visible:outline-2px focus-visible:outline-solid focus-visible:outline-current',
}

export const buttonLink: ShortcutsType = {
  name: 'btn-link',
  value:
    'border-transparent bg-transparent text-light-primary underline '
    + 'border-none dark:border-transparent dark:bg-transparent dark:text-light-primary '
    + 'hover:border-transparent hover:bg-transparent hover:underline dark:hover:bg-transparent '
    + '[&.btn-active]:border-transparent [&.btn-active]:bg-transparent [&.btn-active]:underline '
    + 'dark:[&.btn-active]:bg-transparent '
    + 'focus-visible:outline-2px focus-visible:outline-solid focus-visible:outline-current',
}

export const buttonOutline: ShortcutsType = {
  name: 'btn-outline',
  value:
    // default style
    'border-current bg-transparent dark:bg-transparent text-light-base-content dark:text-dark-base-content '
    + 'hover:border-light-base-content dark:hover:border-dark-base-content '
    + 'hover:bg-light-base-content dark:hover:bg-dark-base-content '
    + 'hover:text-light-base-100 dark:hover:text-dark-base-100 '
    // active style
    + '[&.btn-active]:border-light-base-content [&.btn-active]:dark:border-light-base-content '
    + '[&.btn-active]:bg-light-base-content [&.btn-active]:dark:bg-dark-base-content '
    + '[&.btn-active]:text-light-base-100 [&.btn-active]:dark:text-dark-base-100 '
    // primary style
    + '[&.btn-primary]:bg-transparent [&.btn-primary]:dark:bg-transparent '
    + '[&.btn-primary]:text-light-primary [&.btn-primary]:dark:text-dark-primary '
    // primary hover style
    + '[&.btn-primary]:hover:text-light-primary-content [&.btn-primary]:dark:hover:text-light-primary-content '
    + '[&.btn-primary]:hover:border-light-primary-focus [&.btn-primary]:dark:hover:border-dark-primary-focus '
    + '[&.btn-primary]:hover:bg-light-primary-focus [&.btn-primary]:dark:hover:bg-dark-primary-focus '
    // primary active style
    + '[&.btn-primary]:[&.btn-active]:text-light-primary-content [&.btn-primary]:[&.btn-active]:dark:text-light-primary-content '
    + '[&.btn-primary]:[&.btn-active]:border-light-primary-focus [&.btn-primary]:[&.btn-active]:dark:border-dark-primary-focus '
    + '[&.btn-primary]:[&.btn-active]:bg-light-primary-focus [&.btn-primary]:[&.btn-active]:dark:bg-dark-primary-focus '
    // secondary style
    + '[&.btn-secondary]:bg-transparent [&.btn-secondary]:dark:bg-transparent '
    + '[&.btn-secondary]:text-light-secondary [&.btn-secondary]:dark:text-dark-secondary '
    // secondary hover style
    + '[&.btn-secondary]:hover:text-light-secondary-content [&.btn-secondary]:dark:hover:text-light-secondary-content '
    + '[&.btn-secondary]:hover:border-light-secondary-focus [&.btn-secondary]:dark:hover:border-dark-secondary-focus '
    + '[&.btn-secondary]:hover:bg-light-secondary-focus [&.btn-secondary]:dark:hover:bg-dark-secondary-focus '
    // secondary active style
    + '[&.btn-secondary]:[&.btn-active]:text-light-secondary-content [&.btn-secondary]:[&.btn-active]:dark:text-light-secondary-content '
    + '[&.btn-secondary]:[&.btn-active]:border-light-secondary-focus [&.btn-secondary]:[&.btn-active]:dark:border-dark-secondary-focus '
    + '[&.btn-secondary]:[&.btn-active]:bg-light-secondary-focus [&.btn-secondary]:[&.btn-active]:dark:bg-dark-secondary-focus '
    // accent style
    + '[&.btn-accent]:bg-transparent [&.btn-accent]:dark:bg-transparent '
    + '[&.btn-accent]:text-light-accent [&.btn-accent]:dark:text-dark-accent '
    // accent hover style
    + '[&.btn-accent]:hover:text-light-accent-content [&.btn-accent]:dark:hover:text-light-accent-content '
    + '[&.btn-accent]:hover:border-light-accent-focus [&.btn-accent]:dark:hover:border-dark-accent-focus '
    + '[&.btn-accent]:hover:bg-light-accent-focus [&.btn-accent]:dark:hover:bg-dark-accent-focus '
    // accent active style
    + '[&.btn-accent]:[&.btn-active]:text-light-accent-content [&.btn-accent]:[&.btn-active]:dark:text-light-accent-content '
    + '[&.btn-accent]:[&.btn-active]:border-light-accent-focus [&.btn-accent]:[&.btn-active]:dark:border-dark-accent-focus '
    + '[&.btn-accent]:[&.btn-active]:bg-light-accent-focus [&.btn-accent]:[&.btn-active]:dark:bg-dark-accent-focus '
    // success style
    + '[&.btn-success]:bg-transparent [&.btn-success]:dark:bg-transparent '
    + '[&.btn-success]:text-light-success [&.btn-success]:dark:text-dark-success '
    // success hover style
    + '[&.btn-success]:hover:text-light-success-content [&.btn-success]:dark:hover:text-light-success-content '
    + '[&.btn-success]:hover:border-light-success [&.btn-success]:dark:hover:border-dark-success '
    + '[&.btn-success]:hover:bg-light-success [&.btn-success]:dark:hover:bg-dark-success '
    // success active style
    + '[&.btn-success]:[&.btn-active]:text-light-success-content [&.btn-success]:[&.btn-active]:dark:text-light-success-content '
    + '[&.btn-success]:[&.btn-active]:border-light-success [&.btn-success]:[&.btn-active]:dark:border-dark-success '
    + '[&.btn-success]:[&.btn-active]:bg-light-success [&.btn-success]:[&.btn-active]:dark:bg-dark-success '
    // info style
    + '[&.btn-info]:bg-transparent [&.btn-info]:dark:bg-transparent '
    + '[&.btn-info]:text-light-info [&.btn-info]:dark:text-dark-info '
    // info hover style
    + '[&.btn-info]:hover:text-light-info-content [&.btn-info]:dark:hover:text-light-info-content '
    + '[&.btn-info]:hover:border-light-info [&.btn-info]:dark:hover:border-dark-info '
    + '[&.btn-info]:hover:bg-light-info [&.btn-info]:dark:hover:bg-dark-info '
    // info active style
    + '[&.btn-info]:[&.btn-active]:text-light-info-content [&.btn-info]:[&.btn-active]:dark:text-light-info-content '
    + '[&.btn-info]:[&.btn-active]:border-light-info [&.btn-info]:[&.btn-active]:dark:border-dark-info '
    + '[&.btn-info]:[&.btn-active]:bg-light-info [&.btn-info]:[&.btn-active]:dark:bg-dark-info '
    // warning style
    + '[&.btn-warning]:bg-transparent [&.btn-warning]:dark:bg-transparent '
    + '[&.btn-warning]:text-light-warning [&.btn-warning]:dark:text-dark-warning '
    // warning hover style
    + '[&.btn-warning]:hover:text-light-warning-content [&.btn-warning]:dark:hover:text-light-warning-content '
    + '[&.btn-warning]:hover:border-light-warning [&.btn-warning]:dark:hover:border-dark-warning '
    + '[&.btn-warning]:hover:bg-light-warning [&.btn-warning]:dark:hover:bg-dark-warning '
    // warning active style
    + '[&.btn-warning]:[&.btn-active]:text-light-warning-content [&.btn-warning]:[&.btn-active]:dark:text-light-warning-content '
    + '[&.btn-warning]:[&.btn-active]:border-light-warning [&.btn-warning]:[&.btn-active]:dark:border-dark-warning '
    + '[&.btn-warning]:[&.btn-active]:bg-light-warning [&.btn-warning]:[&.btn-active]:dark:bg-dark-warning '
    // error style
    + '[&.btn-error]:bg-transparent [&.btn-error]:dark:bg-transparent '
    + '[&.btn-error]:text-light-error [&.btn-error]:dark:text-dark-error '
    // error hover style
    + '[&.btn-error]:hover:text-light-error-content [&.btn-error]:dark:hover:text-light-error-content '
    + '[&.btn-error]:hover:border-light-error [&.btn-error]:dark:hover:border-dark-error '
    + '[&.btn-error]:hover:bg-light-error [&.btn-error]:dark:hover:bg-dark-error '
    // error active style
    + '[&.btn-error]:[&.btn-active]:text-light-error-content [&.btn-error]:[&.btn-active]:dark:text-light-error-content '
    + '[&.btn-error]:[&.btn-active]:border-light-error [&.btn-error]:[&.btn-active]:dark:border-dark-error '
    + '[&.btn-error]:[&.btn-active]:bg-light-error [&.btn-error]:[&.btn-active]:dark:bg-dark-error ',
}

export const buttonDisabled: ShortcutsType = {
  name: 'btn-disabled',
  value:
    'cursor-not-allowed animate-none border-opacity-0 bg-light-neutral dark:bg-dark-neutral bg-opacity-20 dark:bg-opacity-20 text-light-base-content dark:text-dark-base-content text-opacity-20 dark:text-opacity-20 '
    + 'hover:border-opacity-0 hover:bg-light-neutral dark:hover:bg-dark-neutral hover:bg-opacity-20 hover:text-light-base-content dark:hover:text-dark-base-content hover:text-opacity-20 dark:hover:text-opacity-20 ',
}

export const buttonSquare: ShortcutsType = {
  name: 'btn-square',
  value:
    'h-12 w-12 p-0 '
    + '[&>:where(.btn-xs)]:h-6 [&>:where(.btn-xs)]:w-6 [&>:where(.btn-xs)]:p-0 '
    + '[&>:where(.btn-sm)]:h-8 [&>:where(.btn-sm)]:w-8 [&>:where(.btn-sm)]:p-0 '
    + '[&>:where(.btn-md)]:h-12 [&>:where(.btn-md)]:w-12 [&>:where(.btn-md)]:p-0 '
    + '[&>:where(.btn-lg)]:h-16 [&>:where(.btn-lg)]:w-16 [&>:where(.btn-lg)]:p-0 ',
}

export const buttonCircle: ShortcutsType = {
  name: 'btn-circle',
  value:
    'h-12 w-12 rounded-full p-0 '
    + '[&>:where(.btn-xs)]:h-6 [&>:where(.btn-xs)]:w-6 [&>:where(.btn-xs)]:rounded-full [&>:where(.btn-xs)]:p-0 '
    + '[&>:where(.btn-xs)]:h-8 [&>:where(.btn-xs)]:w-8 [&>:where(.btn-xs)]:rounded-full [&>:where(.btn-xs)]:p-0 '
    + '[&>:where(.btn-xs)]:h-12 [&>:where(.btn-xs)]:w-12 [&>:where(.btn-xs)]:rounded-full [&>:where(.btn-xs)]:p-0 '
    + '[&>:where(.btn-xs)]:h-16 [&>:where(.btn-xs)]:w-16 [&>:where(.btn-xs)]:rounded-full [&>:where(.btn-xs)]:p-0 ',
}

export const buttonXs: ShortcutsType = {
  name: 'btn-xs',
  value: 'h-6 px-2 min-h-6 text-0.75em',
}

export const buttonSm: ShortcutsType = {
  name: 'btn-sm',
  value: 'h-8 px-3 min-h-8 text-0.875em',
}

export const buttonMd: ShortcutsType = {
  name: 'btn-md',
  value: 'h-12 px-4 min-h-12 text-0.875em',
}

export const buttonLg: ShortcutsType = {
  name: 'btn-lg',
  value: 'h-16 px-6 min-h-16 text-1.125em',
}

export const buttonWide: ShortcutsType = {
  name: 'btn-wide',
  value: 'w-64',
}

export const buttonBlock: ShortcutsType = {
  name: 'btn-block',
  value: 'w-full',
}
