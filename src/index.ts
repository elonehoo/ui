import type { Preset } from 'unocss'

export default function elonehooUI(): Preset {
  return {
    name: 'elonehoo-ui',
    shortcuts: [
      { 'space-vertical': '[flex-flow:column_nowrap]' },
      [/^btn-((rose|pink|fuchsia|purple|violet|indigo|blue|sky|cyan|teal|emerald|green|lime|yellow|amber|orange|red|gray|slate|zinc|neutral|stone|light|dark|lightblue|warmgray|truegray|coolgray|bluegray))$/, ([, c]) => `focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 px-2.5 py-1.5 shadow-sm text-white dark:text-gray-900 bg-${c}-500 hover:bg-${c}-600 disabled:bg-${c}-500 disabled:hover:bg-${c}-500 dark:bg-${c}-400 dark:hover:bg-${c}-500 dark:disabled:bg-${c}-400 dark:disabled:hover:bg-${c}-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-${c}-500 dark:focus-visible:outline-${c}-400 inline-flex items-center`],
      [/^btn-outline-((rose|pink|fuchsia|purple|violet|indigo|blue|sky|cyan|teal|emerald|green|lime|yellow|amber|orange|red|gray|slate|zinc|neutral|stone|light|dark|lightblue|warmgray|truegray|coolgray|bluegray))$/, ([, c]) => `focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 px-2.5 py-1.5 ring-1 ring-inset ring-current text-${c}-500 dark:text-${c}-400 hover:bg-${c}-50 disabled:bg-transparent dark:hover:bg-${c}-950 dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-${c}-500 dark:focus-visible:ring-${c}-400 inline-flex items-center`],
      [/^btn-soft-((rose|pink|fuchsia|purple|violet|indigo|blue|sky|cyan|teal|emerald|green|lime|yellow|amber|orange|red|gray|slate|zinc|neutral|stone|light|dark|lightblue|warmgray|truegray|coolgray|bluegray))$/, ([, c]) => `focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 px-2.5 py-1.5 text-${c}-500 dark:text-${c}-400 bg-${c}-50 hover:bg-${c}-100 disabled:bg-${c}-50 dark:bg-${c}-950 dark:hover:bg-${c}-900 dark:disabled:bg-${c}-950 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-${c}-500 dark:focus-visible:ring-${c}-400 inline-flex items-center`],
      [/^btn-ghost-((rose|pink|fuchsia|purple|violet|indigo|blue|sky|cyan|teal|emerald|green|lime|yellow|amber|orange|red|gray|slate|zinc|neutral|stone|light|dark|lightblue|warmgray|truegray|coolgray|bluegray))$/, ([, c]) => `focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 px-2.5 py-1.5 text-${c}-500 dark:text-${c}-400 hover:bg-${c}-50 disabled:bg-transparent dark:hover:bg-${c}-950 dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-${c}-500 dark:focus-visible:ring-${c}-400 inline-flex items-center`],
      [/^btn-link-((rose|pink|fuchsia|purple|violet|indigo|blue|sky|cyan|teal|emerald|green|lime|yellow|amber|orange|red|gray|slate|zinc|neutral|stone|light|dark|lightblue|warmgray|truegray|coolgray|bluegray))$/, ([, c]) => `focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 px-2.5 py-1.5 text-${c}-500 hover:text-${c}-600 disabled:text-${c}-500 dark:text-${c}-400 dark:hover:text-${c}-500 dark:disabled:text-${c}-400 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-${c}-500 dark:focus-visible:ring-${c}-400 inline-flex items-center`],
      [/^btn-black-((rose|pink|fuchsia|purple|violet|indigo|blue|sky|cyan|teal|emerald|green|lime|yellow|amber|orange|red|gray|slate|zinc|neutral|stone|light|dark|lightblue|warmgray|truegray|coolgray|bluegray))$/, ([, c]) => `focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 px-2.5 py-1.5 shadow-sm text-white dark:text-gray-900 bg-${c}-500 hover:bg-${c}-600 disabled:bg-${c}-500 dark:bg-${c}-400 dark:hover:bg-${c}-500 dark:disabled:bg-${c}-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-${c}-500 dark:focus-visible:outline-${c}-400 w-full flex justify-center items-center`],
      [/^btn-((2xs|xs|sm|md|lg|xl))$/, ([, size]) => {
        if (size === '2xs')
          return 'text-xs gap-x-1 px-2 py-1'

        else if (size === 'xs' || size === 'sm')
          return 'text-xs gap-x-1.5 px-2.5 py-1.5'

        else if (size === 'md')
          return 'text-sm gap-x-2 px-3 py-2'

        else if (size === 'lg')
          return 'text-sm gap-x-2.5 px-3.5 py-2.5'

        else
          return 'text-base gap-x-2.5 px-3.5 py-2.5'
      }],
      [/^space-((start|center|end|between|around|evenly|stretch))$/, ([, c]) => `flex justify-${c} gap-[8px_12px] [flex-flow:row_wrap]`],
      { avatar: 'relative inline-flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-full h-8 w-8 text-xs' },
      [/^avatar-((3xs|2xs|xs|sm|md|lg|xl|2xl|3xl))$/, ([, size]) => {
        if (size === '3xs')
          return 'h-4 w-4 text-[8px]'

        else if (size === '2xs')
          return 'h-5 w-5 text-[10px]'

        else if (size === 'xs')
          return 'h-6 w-6 text-[11px]'

        else if (size === 'sm')
          return 'h-8 w-8 text-xs'

        else if (size === 'md')
          return 'h-10 w-10 text-sm'

        else if (size === 'lg')
          return 'h-12 w-12 text-base'

        else if (size === 'xl')
          return 'h-14 w-14 text-lg'

        else if (size === '2xl')
          return 'h-16 w-16 text-xl'

        else
          return 'h-20 w-20 text-2xl'
      }],
      [/^badge-((rose|pink|fuchsia|purple|violet|indigo|blue|sky|cyan|teal|emerald|green|lime|yellow|amber|orange|red|gray|slate|zinc|neutral|stone|light|dark|lightblue|warmgray|truegray|coolgray|bluegray))$/, ([, c]) => `inline-flex items-center font-medium rounded-md text-xs px-2 py-1 bg-${c}-50 dark:bg-${c}-400 dark:bg-opacity-10 text-${c}-500 dark:text-${c}-400 ring-1 ring-inset ring-${c}-500 dark:ring-${c}-400 ring-opacity-10 dark:ring-opacity-20`],
      [/^badge-((xs|sm|md|lg))$/, ([, size]) => {
        if (size === 'xs')
          return 'text-xs px-1.5 py-0.5'

        else if (size === 'sm')
          return 'text-xs px-2 py-1'

        else if (size === 'md')
          return 'text-sm px-2 py-1'

        else
          return 'text-sm px-2.5 py-1.5'
      }],
    ],
  }
}
