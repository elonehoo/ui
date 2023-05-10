import type {ShortcutsType} from '../types'

export const button:ShortcutsType = {
  name:'btn',
  value:
  "border animate-[button-pop_0.25s_ease-out] uppercase focus-visible:outline-offset-2 font-semibold uppercase no-underline " +
  "active:hover:animate-none active:hover:scale-95 active:focus:animate-none active:focus:scale-95 " +
  "inline-flex flex-shrink-0 cursor-pointer select-none flex-wrap items-center justify-center border-transparent text-center transition duration-200 ease-in-out rounded-0.5rem " +
  "h-12 px-4 text-sm min-h-12 leading-4"
}

export const buttonDefault:ShortcutsType = {
  name:'btn-default',
  value:
  "border-light-neutral dark:border-dark-neutral bg-light-neutral dark:bg-dark-neutral text-light-neutral-content dark:text-dark-neutral-content no-underline " +
  "hover:border-light-neutral-focus dark:hover:border-dark-neutral-focus hover:bg-light-neutral-focus dark:hover:bg-dark-neutral-focus " +
  "focus-visible:outline-2px focus-visible:outline-solid focus-visible:outline-#111318 outline-offset-2"
}

export const buttonDefaultActive:ShortcutsType = {
  name:'btn-default-active',
  value: "border-light-neutral-focus dark:border-dark-neutral-focus bg-light-neutral-focus dark:bg-dark-neutral-focus"
}
