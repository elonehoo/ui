import type { Preset } from 'unocss'

export default function elonehooUI(): Preset {
  return {
    name: 'elonehoo-ui',
    shortcuts: [
      { 'space-vertical': '[flex-flow:column_nowrap]' },
      { modal: 'w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-dark-800 p-6 text-left align-middle shadow-xl transition-all' },
      [/^btn-((rose|pink|fuchsia|purple|violet|indigo|blue|sky|cyan|teal|emerald|green|lime|yellow|amber|orange|red|gray|slate|zinc|neutral|stone|light|dark|lightblue|warmgray|truegray|coolgray|bluegray))$/, ([, color]) => `focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 px-2.5 py-1.5 shadow-sm text-${color === 'light' ? 'gray-900' : 'white'} dark:text-gray-900 bg-${color}-500 hover:bg-${color}-600 disabled:bg-${color}-500 disabled:hover:bg-${color}-500 dark:bg-${color}-400 dark:hover:bg-${color}-500 dark:disabled:bg-${color}-400 dark:disabled:hover:bg-${color}-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-${color}-500 dark:focus-visible:outline-${color}-400 inline-flex items-center`],
      [/^btn-outline-((rose|pink|fuchsia|purple|violet|indigo|blue|sky|cyan|teal|emerald|green|lime|yellow|amber|orange|red|gray|slate|zinc|neutral|stone|light|dark|lightblue|warmgray|truegray|coolgray|bluegray))$/, ([, color]) => `focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 px-2.5 py-1.5 ring-1 ring-inset ring-current text-${color}-500 dark:text-${color}-400 hover:bg-${color}-50 disabled:bg-transparent dark:hover:bg-${color}-950 dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-${color}-500 dark:focus-visible:ring-${color}-400 inline-flex items-center`],
      [/^btn-soft-((rose|pink|fuchsia|purple|violet|indigo|blue|sky|cyan|teal|emerald|green|lime|yellow|amber|orange|red|gray|slate|zinc|neutral|stone|light|dark|lightblue|warmgray|truegray|coolgray|bluegray))$/, ([, color]) => `focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 px-2.5 py-1.5 text-${color}-500 dark:text-${color}-400 bg-${color}-50 hover:bg-${color}-100 disabled:bg-${color}-50 dark:bg-${color}-950 dark:hover:bg-${color}-900 dark:disabled:bg-${color}-950 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-${color}-500 dark:focus-visible:ring-${color}-400 inline-flex items-center`],
      [/^btn-ghost-((rose|pink|fuchsia|purple|violet|indigo|blue|sky|cyan|teal|emerald|green|lime|yellow|amber|orange|red|gray|slate|zinc|neutral|stone|light|dark|lightblue|warmgray|truegray|coolgray|bluegray))$/, ([, color]) => `focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 px-2.5 py-1.5 text-${color}-500 dark:text-${color}-400 hover:bg-${color}-50 disabled:bg-transparent dark:hover:bg-${color}-950 dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-${color}-500 dark:focus-visible:ring-${color}-400 inline-flex items-center`],
      [/^btn-link-((rose|pink|fuchsia|purple|violet|indigo|blue|sky|cyan|teal|emerald|green|lime|yellow|amber|orange|red|gray|slate|zinc|neutral|stone|light|dark|lightblue|warmgray|truegray|coolgray|bluegray))$/, ([, color]) => `focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 px-2.5 py-1.5 text-${color}-500 hover:text-${color}-600 disabled:text-${color}-500 dark:text-${color}-400 dark:hover:text-${color}-500 dark:disabled:text-${color}-400 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-${color}-500 dark:focus-visible:ring-${color}-400 inline-flex items-center`],
      [/^btn-black-((rose|pink|fuchsia|purple|violet|indigo|blue|sky|cyan|teal|emerald|green|lime|yellow|amber|orange|red|gray|slate|zinc|neutral|stone|light|dark|lightblue|warmgray|truegray|coolgray|bluegray))$/, ([, color]) => `focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 px-2.5 py-1.5 shadow-sm text-${color === 'light' ? 'gray-900' : 'white'} dark:text-gray-900 bg-${color}-500 hover:bg-${color}-600 disabled:bg-${color}-500 dark:bg-${color}-400 dark:hover:bg-${color}-500 dark:disabled:bg-${color}-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-${color}-500 dark:focus-visible:outline-${color}-400 w-full flex justify-center items-center`],
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
      [/^space-((start|center|end|between|around|evenly|stretch))$/, ([, layout]) => `flex justify-${layout} gap-[8px_12px] [flex-flow:row_wrap]`],
      { avatar: 'relative inline-flex items-center justify-center bg-gray-100 dark:bg-dark-800 rounded-full h-8 w-8 text-xs' },
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
      [/^badge-((rose|pink|fuchsia|purple|violet|indigo|blue|sky|cyan|teal|emerald|green|lime|yellow|amber|orange|red|gray|slate|zinc|neutral|stone|light|dark|lightblue|warmgray|truegray|coolgray|bluegray))$/, ([, color]) => `inline-flex items-center font-medium rounded-md text-xs px-2 py-1 bg-${color}-50 dark:bg-${color}-400 dark:bg-opacity-10 text-${color}-500 dark:text-${color}-400 ring-1 ring-inset ring-${color}-500 dark:ring-${color}-400 ring-opacity-10 dark:ring-opacity-20`],
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
      { kbd: 'inline-flex items-center justify-center text-gray-900 dark:text-white h-5 min-w-[20px] text-[11px] px-1 rounded font-medium font-sans bg-gray-100 dark:bg-gray-800 ring-1 ring-gray-300 dark:ring-gray-700 ring-inset' },
      [/^kbd-((xs|sm|md))$/, ([, size]) => {
        if (size === 'xs')
          return 'h-4 min-w-[16px] text-[10px]'

        else if (size === 'sm')
          return 'h-5 min-w-[20px] text-[11px]'

        else
          return 'h-6 min-w-[24px] text-[12px]'
      }],
      [/^input-((none|rose|pink|fuchsia|purple|violet|indigo|blue|sky|cyan|teal|emerald|green|lime|yellow|amber|orange|red|gray|slate|zinc|neutral|stone|light|dark|lightblue|warmgray|truegray|coolgray|bluegray))$/, ([, color]) => {
        if (color === 'none')
          return 'relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 rounded-md placeholder-gray-400 dark:placeholder-gray-500 text-sm px-2.5 py-1.5 bg-transparent focus:ring-0 focus:shadow-none'

        else
          return `relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 rounded-md placeholder-gray-400 dark:placeholder-gray-500 text-sm px-2.5 py-1.5 shadow-sm bg-white dark:bg-dark-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-${color}-500 dark:focus:ring-${color}-400`
      }],
      [/^input-((2xs|xs|sm|md|lg|xl))$/, ([, size]) => {
        if (size === '2xs')
          return 'text-xs gap-x-1 px-2 py-1'

        else if (size === 'xs')
          return 'text-xs gap-x-1.5 px-2.5 py-1.5'

        else if (size === 'sm')
          return 'text-sm gap-x-2 px-2.5 py-1.5'
        else if (size === 'md')
          return 'text-sm gap-x-2 px-3 py-2'
        else if (size === 'lg')
          return 'text-sm gap-x-2 px-3.5 py-2.5'
        else
          return 'text-base gap-x-2 px-3.5 py-2.5'
      }],
      [/^textarea-((none|rose|pink|fuchsia|purple|violet|indigo|blue|sky|cyan|teal|emerald|green|lime|yellow|amber|orange|red|gray|slate|zinc|neutral|stone|light|dark|lightblue|warmgray|truegray|coolgray|bluegray))$/, ([, color]) => {
        if (color === 'none')
          return 'relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 rounded-md placeholder-gray-400 dark:placeholder-gray-500 text-sm px-2.5 py-1.5 bg-transparent focus:ring-0 focus:shadow-none resize-none'

        else
          return `relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 rounded-md placeholder-gray-400 dark:placeholder-gray-500 text-sm px-2.5 py-1.5 shadow-sm bg-white dark:bg-dark-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-${color}-500 dark:focus:ring-${color}-400 resize-none`
      }],
      [/^textarea-((2xs|xs|sm|md|lg|xl))$/, ([, size]) => {
        if (size === '2xs')
          return 'text-xs gap-x-1 px-2 py-1'

        else if (size === 'xs')
          return 'text-xs gap-x-1.5 px-2.5 py-1.5'

        else if (size === 'sm')
          return 'text-sm gap-x-2 px-2.5 py-1.5'
        else if (size === 'md')
          return 'text-sm gap-x-2 px-3 py-2'
        else if (size === 'lg')
          return 'text-sm gap-x-2 px-3.5 py-2.5'
        else
          return 'text-base gap-x-2 px-3.5 py-2.5'
      }],
      [/^select-((rose|pink|fuchsia|purple|violet|indigo|blue|sky|cyan|teal|emerald|green|lime|yellow|amber|orange|red|gray|slate|zinc|neutral|stone|light|dark|lightblue|warmgray|truegray|coolgray|bluegray))$/, ([, color]) => `select-arrow appearance-none relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 rounded-md text-sm px-2.5 py-1.5 shadow-sm bg-white dark:bg-dark-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-${color}-500 dark:focus:ring-${color}-400 pe-9`],
      [/^select-((2xs|xs|sm|md|lg|xl))$/, ([, size]) => {
        if (size === '2xs')
          return 'text-xs gap-x-1 px-2 py-1'

        else if (size === 'xs')
          return 'text-xs gap-x-1.5 px-2.5 py-1.5'

        else if (size === 'sm')
          return 'text-sm gap-x-2 px-2.5 py-1.5'
        else if (size === 'md')
          return 'text-sm gap-x-2 px-3 py-2'
        else if (size === 'lg')
          return 'text-sm gap-x-2 px-3.5 py-2.5'
        else
          return 'text-base gap-x-2 px-3.5 py-2.5'
      }],
      [/^toggle-((rose|pink|fuchsia|purple|violet|indigo|blue|sky|cyan|teal|emerald|green|lime|yellow|amber|orange|red|gray|slate|zinc|neutral|stone|light|dark|lightblue|warmgray|truegray|coolgray|bluegray))$/, ([, color]) => `shrink-0 h-6 w-12 cursor-pointer appearance-none border duration-300 focus-visible:outline-color-${color}-200  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 border-${color} bg-${color} bg-opacity-40 checked:bg-opacity-100 ease-in-out rounded-3xl indeterminate:shadow-[-1.5rem_0_0_2px_white_inset,0_0_0_2px_white_inset] shadow-[-1.5rem_0_0_2px_white_inset,0_0_0_2px_white_inset] checked:shadow-[1.5rem_0_0_2px_white_inset,0_0_0_2px_white_inset] dark:shadow-[-1.5rem_0_0_2px_black_inset,0_0_0_2px_black_inset] checked:dark:shadow-[1.5rem_0_0_2px_black_inset,0_0_0_2px_black_inset] indeterminate:dark:shadow-[1.5rem_0_0_2px_black_inset,0_0_0_2px_black_inset] disabled:cursor-not-allowed`],
      { 'toggle-none': 'indeterminate:shadow-[0_0_2px_white_inset,0_0_0_2px_white_inset]! shadow-[0_0_2px_white_inset,0_0_0_2px_white_inset]! checked:shadow-[0_0_2px_white_inset,0_0_0_2px_white_inset]! dark:shadow-[0_0_2px_black_inset,0_0_0_2px_black_inset]! checked:dark:shadow-[0_0_2px_black_inset,0_0_0_2px_black_inset]! indeterminate:dark:shadow-[0_0_2px_black_inset,0_0_0_2px_black_inset]!' },
      [/^toggle-((xs|sm|md|lg))$/, ([, size]) => {
        if (size === 'xs')
          return 'h-4! w-6! indeterminate:shadow-[-0.5rem_0_0_2px_white_inset,0_0_0_2px_white_inset]! shadow-[-0.5rem_0_0_2px_white_inset,0_0_0_2px_white_inset]! checked:shadow-[0.5rem_0_0_2px_white_inset,0_0_0_2px_white_inset]! dark:shadow-[-0.5rem_0_0_2px_black_inset,0_0_0_2px_black_inset]! checked:dark:shadow-[0.5rem_0_0_2px_black_inset,0_0_0_2px_black_inset]! indeterminate:dark:shadow-[0.5rem_0_0_2px_black_inset,0_0_0_2px_black_inset]!'

        else if (size === 'sm')
          return 'h-5! w-8! indeterminate:shadow-[-0.75rem_0_0_2px_white_inset,0_0_0_2px_white_inset]! shadow-[-0.75rem_0_0_2px_white_inset,0_0_0_2px_white_inset]! checked:shadow-[0.75rem_0_0_2px_white_inset,0_0_0_2px_white_inset]! dark:shadow-[-0.75rem_0_0_2px_black_inset,0_0_0_2px_black_inset]! checked:dark:shadow-[0.75rem_0_0_2px_black_inset,0_0_0_2px_black_inset]! indeterminate:dark:shadow-[0.75rem_0_0_2px_black_inset,0_0_0_2px_black_inset]!'

        else if (size === 'md')
          return 'h-6! w-12! indeterminate:shadow-[-1.5rem_0_0_2px_white_inset,0_0_0_2px_white_inset]! shadow-[-1.5rem_0_0_2px_white_inset,0_0_0_2px_white_inset]! checked:shadow-[1.5rem_0_0_2px_white_inset,0_0_0_2px_white_inset]! dark:shadow-[-1.5rem_0_0_2px_black_inset,0_0_0_2px_black_inset]! checked:dark:shadow-[1.5rem_0_0_2px_black_inset,0_0_0_2px_black_inset]! indeterminate:dark:shadow-[1.5rem_0_0_2px_black_inset,0_0_0_2px_black_inset]!'
        else
          return 'h-8! w-16! indeterminate:shadow-[-2rem_0_0_2px_white_inset,0_0_0_2px_white_inset]! shadow-[-2rem_0_0_2px_white_inset,0_0_0_2px_white_inset]! checked:shadow-[2rem_0_0_2px_white_inset,0_0_0_2px_white_inset]! dark:shadow-[-2rem_0_0_2px_black_inset,0_0_0_2px_black_inset]! checked:dark:shadow-[2rem_0_0_2px_black_inset,0_0_0_2px_black_inset]! indeterminate:dark:shadow-[2rem_0_0_2px_black_inset,0_0_0_2px_black_inset]!'
      }],
      [/^card-((box|body|head|footer))$/, ([, layout]) => {
        if (layout === 'box')
          return 'overflow-hidden rounded-lg divide-y divide-gray-200 dark:divide-gray-800 ring-1 ring-gray-200 dark:ring-gray-800 shadow bg-white dark:bg-gray-900 w-full'

        else if (layout === 'body')
          return 'px-4 py-5 sm:p-6'

        else if (layout === 'head')
          return 'px-4 py-5 sm:px-6'

        else
          return 'px-4 py-4 sm:px-6'
      }],
      [/^skeleton-((rose|pink|fuchsia|purple|violet|indigo|blue|sky|cyan|teal|emerald|green|lime|yellow|amber|orange|red|gray|slate|zinc|neutral|stone|light|dark|lightblue|warmgray|truegray|coolgray|bluegray))$/, ([, color]) => `animate-pulse bg-${color}-100 dark:bg-${color}-800`],
      { content: 'mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl w-full' },
      [/^model-code-((rose|pink|fuchsia|purple|violet|indigo|blue|sky|cyan|teal|emerald|green|lime|yellow|amber|orange|red|gray|slate|zinc|neutral|stone|light|dark|lightblue|warmgray|truegray|coolgray|bluegray))$/, ([, color]) => `relative overflow-hidden overflow-x-auto min-w-72 bg-${color} text-${color === 'light' ? 'black' : 'white'} rounded-4 py-5 before:content-[""] before:block before:h-3 before:w-3 before:opacity-30 before:shadow-[1.4em_0,2.8em_0,4.2em_0] before:mb-4 before:rounded-full`],
      { 'code-line': 'pr-5 before:content-[""] flex justify-start before:mr-2ch before:content-[attr(data-prefix)] before:inline-block before:text-right before:w-8 before:opacity-50' },
      [/^checkbox-((rose|pink|fuchsia|purple|violet|indigo|blue|sky|cyan|teal|emerald|green|lime|yellow|amber|orange|red|gray|slate|zinc|neutral|stone|light|dark|lightblue|warmgray|truegray|coolgray|bluegray))$/, ([, color]) => `shrink-0 h-6 w-6 cursor-pointer appearance-none border rounded-lg border-${color} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-${color} checked:bg-${color} checked:bg-no-repeat checked:animate-[checkmark_0.2s_ease-in-out] checked:checkbox-bg-img-${color} indeterminate:bg-${color} indeterminate:bg-no-repeat indeterminate:animate-[checkmark_0.2s_ease-in-out] indeterminate:checkbox-bg-img-${color}`],
      [/^checkbox-((xs|sm|md|lg))$/, ([, layout]) => {
        if (layout === 'xs')
          return 'w-4 h-4'

        else if (layout === 'sm')
          return 'w-5 h-5'

        else if (layout === 'md')
          return 'w-6 h-6'

        else
          return 'w-8 h-8'
      }],
      [/^radio-((rose|pink|fuchsia|purple|violet|indigo|blue|sky|cyan|teal|emerald|green|lime|yellow|amber|orange|red|gray|slate|zinc|neutral|stone|light|dark|lightblue|warmgray|truegray|coolgray|bluegray))$/, ([, color]) => `shrink-0 h-6 w-6 cursor-pointer appearance-none border rounded-full radiomark-${color} border-${color} checked:bg-${color} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-${color}`],
      [/^radio-((xs|sm|md|lg))$/, ([, layout]) => {
        if (layout === 'xs')
          return 'w-4 h-4'

        else if (layout === 'sm')
          return 'w-5 h-5'

        else if (layout === 'md')
          return 'w-6 h-6'

        else
          return 'w-8 h-8'
      }],
      [/^table-((box|main|th|body|td))$/, ([, layout]) => {
        if (layout === 'box')
          return 'flex border border-gray-200 dark:border-gray-800 relative rounded-md bg-white dark:bg-dark-900 overflow-x-auto'

        else if (layout === 'main')
          return 'min-w-full table-fixed divide-y divide-gray-300 dark:divide-gray-800'

        else if (layout === 'th')
          return 'text-left rtl:text-right px-3 py-3.5 text-dark-950 dark:text-white font-semibold text-sm'

        else if (layout === 'body')
          return 'divide-y divide-gray-200 dark:divide-dark-800'

        else
          return 'whitespace-nowrap px-3 py-4 text-gray-500 dark:text-gray-400 text-sm'
      }],
      [/^range-((rose|pink|fuchsia|purple|violet|indigo|blue|sky|cyan|teal|emerald|green|lime|yellow|amber|orange|red|gray|slate|zinc|neutral|stone|light|dark|lightblue|warmgray|truegray|coolgray|bluegray))$/, ([,color]) => `h-6 w-full cursor-pointer appearance-none overflow-hidden bg-transparent rounded-2xl focus:[outline:none] range-focus-visible-${color} range-webkit-slider-runnable-track-${color} range-moz-range-track-${color} range-webkit-slider-thumb-${color} range-moz-range-thumb-${color}`],
      [/^alert-((rose|pink|fuchsia|purple|violet|indigo|blue|sky|cyan|teal|emerald|green|lime|yellow|amber|orange|red|gray|slate|zinc|neutral|stone|light|dark|lightblue|warmgray|truegray|coolgray|bluegray))$/, ([,color]) => `grid w-full grid-flow-row content-start items-center justify-items-center gap-4 text-center border text-${color === 'dark' ? 'white' : 'black'} bg-${color} p-4 rounded-2xl border-${color} sm:grid-flow-col sm:grid-cols-[auto_minmax(auto,1fr)] sm:justify-items-start sm:text-left`],
      ['toast', 'fixed flex min-w-fit flex-col whitespace-nowrap gap-2 translate-x-0 translate-y-0 p-4 left-auto right-0 top-auto bottom-0 animate-[zoom-in_0.25s_ease-out]'],
      [/^toast-((start|center|end|bottom|middle|top))$/, ([, layout]) => {
        if (layout === 'start')
          return 'translate-x-0! left-0! right-auto!'

        else if (layout === 'center')
          return 'top-50%! translate-x-[-50%]! left-50%! '

        else if (layout === 'end')
          return 'translate-x-0! right-0! left-auto!'

        else if (layout === 'bottom')
          return 'translate-y-0! bottom-0! top-auto!'

        else if (layout === 'middle')
          return 'left-50%! translate-y-[-50%]! top-50%! '

        else
          return 'translate-y-0! top-0! bottom-auto!'
      }],
      [/^dropdown-((box|relative|label|content|items|item))$/, ([, layout]) => {
        if (layout === 'box')
          return 'flex'

        else if (layout === 'relative')
          return 'relative'

        else if (layout === 'label')
          return 'inline-flex w-full'

        else if (layout === 'content')
          return 'z-20 w-full absolute m-0 inset-[0px_0px_auto_auto] [transform:translate3d(0px,40px,0px)]'

        else if (layout === 'items')
          return 'relative focus:outline-none overflow-y-auto scroll-py-1 ring-1 ring-gray-200 dark:ring-gray-700 rounded-md shadow-lg bg-white dark:bg-dark-800 p-1 max-h-60'

        else
          return 'cursor-default select-none relative flex items-center justify-between gap-1 rounded-md px-2 py-1.5 text-sm text-gray-900 dark:text-white pe-7 hover:bg-gray-100 dark:hover:bg-dark-900'
      }],
      [/^tooltip-((rose|pink|fuchsia|purple|violet|indigo|blue|sky|cyan|teal|emerald|green|lime|yellow|amber|orange|red|gray|slate|zinc|neutral|stone|light|dark|lightblue|warmgray|truegray|coolgray|bluegray))$/, ([, color]) =>
        `tooltip-basic-${color} tooltip-before-after-basic-${color} tooltip-after-${color} tooltip-hover-after-before-${color} tooltip-before-${color} tooltip-top-${color} `,
      ],
      [/^tooltip-((left|bottom|right))-((rose|pink|fuchsia|purple|violet|indigo|blue|sky|cyan|teal|emerald|green|lime|yellow|amber|orange|red|gray|slate|zinc|neutral|stone|light|dark|lightblue|warmgray|truegray|coolgray|bluegray))$/, ([,layout,,color]) => {
        return `tooltip-${layout}-${color} `
      }],
      [/^page-((box|main|body|star|end|content))$/, ([,layout]) => {
        if (layout === 'box')
          return 'flex items-center justify-between py-3'

        else if (layout === 'main')
          return 'bg-white dark:bg-dark-900'

        else if (layout === 'body')
          return 'isolate inline-flex -space-x-px rounded-md shadow-sm'

        else if (layout === 'star')
          return 'relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 dark:ring-gray-800 hover:bg-gray-50 dark:hover:bg-dark-950 focus:z-20 focus:outline-offset-0'

        else if (layout === 'end')
          return 'relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 dark:ring-gray-800 hover:bg-gray-50 dark:hover:bg-dark-950 focus:z-20 focus:outline-offset-0'

        else
          return 'relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 dark:text-gray-400 ring-1 ring-inset ring-gray-300 dark:ring-gray-800 hover:bg-gray-50 dark:hover:bg-dark-950 focus:z-20 focus:outline-offset-0'
      }],
    ],
    rules: [
      ['select-arrow', {
        'background-image': 'linear-gradient(45deg,transparent 50%,currentColor 50%),linear-gradient(135deg,currentColor 50%,transparent 50%)',
        'background-position': 'calc(100% - 20px) calc(1px + 50%),calc(100% - 16px) calc(1px + 50%)',
        'background-size': '4px 4px,4px 4px',
        'background-repeat': 'no-repeat',
      }],
      [/^checkbox-bg-img-((rose|pink|fuchsia|purple|violet|indigo|blue|sky|cyan|teal|emerald|green|lime|yellow|amber|orange|red|gray|slate|zinc|neutral|stone|light|dark|lightblue|warmgray|truegray|coolgray|bluegray))$/, ([,color], data: any) => {
        if (color === 'dark') {
          return `
          .${data.rawSelector}:checked{
            background-image: linear-gradient(-45deg, rgba(0, 0, 0, 0) 65%, ${data.theme.colors[color].DEFAULT} 65.99%), linear-gradient(45deg, rgba(0, 0, 0, 0) 75%, ${data.theme.colors[color].DEFAULT} 75.99%), linear-gradient(-45deg, ${data.theme.colors[color].DEFAULT} 40%, rgba(0, 0, 0, 0) 40.99%), linear-gradient(45deg, ${data.theme.colors[color].DEFAULT} 30%, rgb(255, 255, 255) 30.99%, rgb(255, 255, 255) 40%, rgba(0, 0, 0, 0) 40.99%), linear-gradient(-45deg, rgb(255, 255, 255) 50%, ${data.theme.colors[color].DEFAULT} 50.99%);
          }
          .${data.rawSelector}:indeterminate{
            background-image:linear-gradient(90deg, rgba(0, 0, 0, 0) 80%, ${data.theme.colors[color].DEFAULT} 80%), linear-gradient(-90deg, rgba(0, 0, 0, 0) 80%, ${data.theme.colors[color].DEFAULT} 80%), linear-gradient(0deg, ${data.theme.colors[color].DEFAULT} 43%, rgb(255, 255, 255) 43%, rgb(255, 255, 255) 57%, ${data.theme.colors[color].DEFAULT} 57%)
          }
          @keyframes checkmark {
            0% {
              background-position-y: 5px;
            }
            50% {
              background-position-y: -2px;
            }
            100% {
              background-position-y: 0;
            }
          }
          `
        }
        else {
          return `
          .${data.rawSelector}:checked{
            background-image: linear-gradient(-45deg, rgba(0, 0, 0, 0) 65%, ${data.theme.colors[color].DEFAULT} 65.99%), linear-gradient(45deg, rgba(0, 0, 0, 0) 75%, ${data.theme.colors[color].DEFAULT} 75.99%), linear-gradient(-45deg, ${data.theme.colors[color].DEFAULT} 40%, rgba(0, 0, 0, 0) 40.99%), linear-gradient(45deg, ${data.theme.colors[color].DEFAULT} 30%, rgb(29, 35, 42) 30.99%, rgb(29, 35, 42) 40%, rgba(0, 0, 0, 0) 40.99%), linear-gradient(-45deg, rgb(29, 35, 42) 50%, ${data.theme.colors[color].DEFAULT} 50.99%)
          }
          .${data.rawSelector}:indeterminate{
            background-image: linear-gradient(90deg, rgba(0, 0, 0, 0) 80%, ${data.theme.colors[color].DEFAULT} 80%), linear-gradient(-90deg, rgba(0, 0, 0, 0) 80%, ${data.theme.colors[color].DEFAULT} 80%), linear-gradient(0deg, ${data.theme.colors[color].DEFAULT} 43%, rgb(29, 35, 42) 43%, rgb(29, 35, 42) 57%, ${data.theme.colors[color].DEFAULT} 57%)
          }
          @keyframes checkmark {
            0% {
              background-position-y: 5px;
            }
            50% {
              background-position-y: -2px;
            }
            100% {
              background-position-y: 0;
            }
          }
          `
        }
      }],
      [/^radiomark-((rose|pink|fuchsia|purple|violet|indigo|blue|sky|cyan|teal|emerald|green|lime|yellow|amber|orange|red|gray|slate|zinc|neutral|stone|light|dark|lightblue|warmgray|truegray|coolgray|bluegray))$/, ([,color]) => {
        return `
          :root {
            --radiomark-color: #FFFFFF;
          }
          .dark:root {
            --radiomark-color: #000000;
          }
          .radio-${color}:checked{
            animation: radiomark 0.2s ease-in-out;
            box-shadow: var(--radiomark-color) 0px 0px 0px 4px inset, var(--radiomark-color) 0px 0px 0px 4px inset;
          }
          @keyframes radiomark {
            0% {
              box-shadow: 0 0 0 12px var(--radiomark-color) inset, 0 0 0 12px var(--radiomark-color) inset;
            }
            50% {
              box-shadow: 0 0 0 3px var(--radiomark-color) inset, 0 0 0 3px var(--radiomark-color) inset;
            }
            100% {
              box-shadow: 0 0 0 4px var(--radiomark-color) inset, 0 0 0 4px var(--radiomark-color) inset;
            }
          }
        `
      }],
      [/^range-((xs|sm|md|lg))$/, ([,size]) => {
        if (size === 'xs') {
          return `
          .range-xs {
            height: 1rem !important;
          }
          .range-xs::-webkit-slider-runnable-track {
              height: .25rem !important;
          }
          .range-xs::-moz-range-track {
              height: .25rem !important;
          }
          .range-xs::-webkit-slider-thumb {
            height: 1rem !important;
            width: 1rem !important;
            --filler-offset: .4rem !important;
          }
          .range-xs::-moz-range-thumb {
            height: 1rem !important;
            width: 1rem !important;
            --filler-offset: .4rem !important;
          }
          `
        }
        else if (size === 'sm') {
          return `
          .range-sm {
            height: 1.25rem !important;
          }
          .range-sm::-webkit-slider-runnable-track {
            height: 0.25rem !important;
          }
          .range-sm::-moz-range-track {
            height: 0.25rem !important;
          }
          .range-sm::-webkit-slider-thumb {
            height: 1.25rem !important;
            width: 1.25rem !important;
            --filler-offset: 0.5rem !important;
          }
          .range-sm::-moz-range-thumb {
            height: 1.25rem !important;
            width: 1.25rem !important;
            --filler-offset: 0.5rem !important;
          }
          `
        }
        else if (size === 'md') {
          return `
          .range-md {
            height: 1.5rem !important;
          }

          .range-md::-webkit-slider-runnable-track {
            height: .5rem !important;
          }

          .range-md::-moz-range-track {
            height: .5rem !important;
          }

          .range-md::-webkit-slider-thumb {
            height: 1.5rem !important;
            width: 1.5rem !important;
            --filler-offset: .6rem !important;
          }

          .range-md::-moz-range-thumb {
            height: 1.5rem !important;
            width: 1.5rem !important;
            --filler-offset: .6rem !important;
          }
          `
        }
        else {
          return `
          .range-lg {
            height: 2rem !important;
          }

          .range-lg::-webkit-slider-runnable-track {
            height: 1rem !important;
          }

          .range-lg::-moz-range-track {
            height: 1rem !important;
          }

          .range-lg::-webkit-slider-thumb {
            height: 2rem !important;
            width: 2rem !important;
            --filler-offset: 1rem !important;
          }

          .range-lg::-moz-range-thumb {
            height: 2rem !important;
            width: 2rem !important;
            --filler-offset: 1rem !important;
          }
          `
        }
      }],
      [/^range-focus-visible-((rose|pink|fuchsia|purple|violet|indigo|blue|sky|cyan|teal|emerald|green|lime|yellow|amber|orange|red|gray|slate|zinc|neutral|stone|light|dark|lightblue|warmgray|truegray|coolgray|bluegray))$/, ([,color], data: any) => {
        return `
        .range-${color}:focus-visible {
          --focus-shadow: 0 0 0 6px #1D232A inset, 0 0 0 2rem ${data.theme.colors[color].DEFAULT} inset
        }
        `
      }],
      [/^range-webkit-slider-runnable-track-((rose|pink|fuchsia|purple|violet|indigo|blue|sky|cyan|teal|emerald|green|lime|yellow|amber|orange|red|gray|slate|zinc|neutral|stone|light|dark|lightblue|warmgray|truegray|coolgray|bluegray))$/, ([,color]) => {
        return `
        .range-${color}::-webkit-slider-runnable-track {
          height: .5rem;
          width: 100%;
          background-color: #a6adba1a;
          border-radius: 1rem
        }
        `
      }],
      [/^range-moz-range-track-((rose|pink|fuchsia|purple|violet|indigo|blue|sky|cyan|teal|emerald|green|lime|yellow|amber|orange|red|gray|slate|zinc|neutral|stone|light|dark|lightblue|warmgray|truegray|coolgray|bluegray))$/, ([,color]) => {
        return `
        .range-${color}::-moz-range-track {
          height: .5rem;
          width: 100%;
          background-color: #a6adba1a;
          border-radius: 1rem
        }
        `
      }],
      [/^range-webkit-slider-thumb-((rose|pink|fuchsia|purple|violet|indigo|blue|sky|cyan|teal|emerald|green|lime|yellow|amber|orange|red|gray|slate|zinc|neutral|stone|light|dark|lightblue|warmgray|truegray|coolgray|bluegray))$/, ([,color], data: any) => {
        return `
        .range-${color}::-webkit-slider-thumb {
          position: relative;
          height: 1.5rem;
          width: 1.5rem;
          border-style: none;
          background-color: ${color === 'dark' ? '#FFF' : '#000'};
          border-radius: 1rem;
          -moz-appearance: none;
          appearance: none;
          -webkit-appearance: none;
          top: 50%;
          color: ${data.theme.colors[color].DEFAULT};
          transform: translateY(-50%);
          --filler-size: 100rem;
          --filler-offset: .6rem;
          box-shadow: 0 0 0 3px ${data.theme.colors[color].DEFAULT} inset,var(--focus-shadow,0 0),calc(var(--filler-size) * -1 - var(--filler-offset)) 0 0 var(--filler-size)
        }
        `
      }],
      [/^range-moz-range-thumb-((rose|pink|fuchsia|purple|violet|indigo|blue|sky|cyan|teal|emerald|green|lime|yellow|amber|orange|red|gray|slate|zinc|neutral|stone|light|dark|lightblue|warmgray|truegray|coolgray|bluegray))$/, ([,color], data: any) => {
        return `
        .range-${color}::-moz-range-thumb {
          position: relative;
          height: 1.5rem;
          width: 1.5rem;
          border-style: none;
          background-color: ${color === 'dark' ? '#FFF' : '#000'};
          border-radius: 1rem;
          top: 50%;
          color: ${data.theme.colors[color].DEFAULT};
          --filler-size: 100rem;
          --filler-offset: .5rem;
          box-shadow: 0 0 0 3px ${data.theme.colors[color].DEFAULT} inset,var(--focus-shadow,0 0),calc(var(--filler-size) * -1 - var(--filler-offset)) 0 0 var(--filler-size)
        }
        `
      }],
      [/^tooltip-basic-((rose|pink|fuchsia|purple|violet|indigo|blue|sky|cyan|teal|emerald|green|lime|yellow|amber|orange|red|gray|slate|zinc|neutral|stone|light|dark|lightblue|warmgray|truegray|coolgray|bluegray))$/, ([,color]) => {
        return `
        .tooltip-${color} {
          position: relative;
          display: inline-block;
          text-align: center;
          --tooltip-tail-offset: calc(100% + 0.0625rem - 0.1875rem);
          --tooltip-offset: calc(100% + 1px + 0.1875rem);
        }
        `
      }],
      [/^tooltip-before-after-basic-((rose|pink|fuchsia|purple|violet|indigo|blue|sky|cyan|teal|emerald|green|lime|yellow|amber|orange|red|gray|slate|zinc|neutral|stone|light|dark|lightblue|warmgray|truegray|coolgray|bluegray))$/, ([,color]) => {
        return `
        .tooltip-${color}:before,
        .tooltip-${color}:after {
          opacity: 0;
          transition-property: color, background-color, border-color, outline-color,
            text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter,
            backdrop-filter;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-duration: 200ms;
          transition-delay: 100ms;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
        `
      }],
      [/^tooltip-after-((rose|pink|fuchsia|purple|violet|indigo|blue|sky|cyan|teal|emerald|green|lime|yellow|amber|orange|red|gray|slate|zinc|neutral|stone|light|dark|lightblue|warmgray|truegray|coolgray|bluegray))$/, ([,color]) => {
        return `
        .tooltip-${color}:after {
          position: absolute;
          content: "";
          border-style: solid;
          border-width: 0.1875rem;
          width: 0;
          height: 0;
          display: block;
        }
        `
      }],
      [/^tooltip-hover-after-before-((rose|pink|fuchsia|purple|violet|indigo|blue|sky|cyan|teal|emerald|green|lime|yellow|amber|orange|red|gray|slate|zinc|neutral|stone|light|dark|lightblue|warmgray|truegray|coolgray|bluegray))$/, ([,color]) => {
        return `
        .tooltip-${color}.tooltip-open:before,
        .tooltip-${color}.tooltip-open:after,
        .tooltip-${color}:hover:before,
        .tooltip-${color}:hover:after {
          opacity: 1;
          transition-delay: 75ms;
        }
        .tooltip:has(:focus-visible):after,
        .tooltip:has(:focus-visible):before {
          opacity: 1;
          transition-delay: 75ms;
        }
        .tooltip:not([data-tip]):hover:before,
        .tooltip:not([data-tip]):hover:after {
          visibility: hidden;
          opacity: 0;
        }
        `
      }],
      [/^tooltip-before-((rose|pink|fuchsia|purple|violet|indigo|blue|sky|cyan|teal|emerald|green|lime|yellow|amber|orange|red|gray|slate|zinc|neutral|stone|light|dark|lightblue|warmgray|truegray|coolgray|bluegray))$/, ([,color], data: any) => {
        return `
        .tooltip-${color}:before {
          max-width: 20rem;
          border-radius: 0.25rem;
          padding-left: 0.5rem;
          padding-right: 0.5rem;
          padding-top: 0.25rem;
          padding-bottom: 0.25rem;
          font-size: 0.875rem;
          line-height: 1.25rem;
          background-color: ${data.theme.colors[color].DEFAULT};
          color: ${color === 'light' ? data.theme.colors.gray.DEFAULT : data.theme.colors.gray[900]};
          width: max-content;
          position: absolute;
          pointer-events: none;
          z-index: 1;
          content: attr(data-tip);
        }
        `
      }],
      [/^tooltip-top-((rose|pink|fuchsia|purple|violet|indigo|blue|sky|cyan|teal|emerald|green|lime|yellow|amber|orange|red|gray|slate|zinc|neutral|stone|light|dark|lightblue|warmgray|truegray|coolgray|bluegray))$/, ([,color], data: any) => {
        return `
        .tooltip-${color},
        .tooltip-top {
          &:after {
            transform: translateX(-50%);
            border-color: ${data.theme.colors[color].DEFAULT} transparent transparent transparent;
            top: auto;
            left: 50%;
            right: auto;
            bottom: var(--tooltip-tail-offset);
          }
          &:before {
            transform: translateX(-50%);
            top: auto;
            left: 50%;
            right: auto;
            bottom: var(--tooltip-offset);
          }
        }
        `
      }],
      [/^tooltip-bottom-((rose|pink|fuchsia|purple|violet|indigo|blue|sky|cyan|teal|emerald|green|lime|yellow|amber|orange|red|gray|slate|zinc|neutral|stone|light|dark|lightblue|warmgray|truegray|coolgray|bluegray))$/, ([,color], data: any) => {
        return `
        .tooltip-${color} {
          &:after  {
            transform: translateX(-50%) !important;
            border-color: transparent transparent ${data.theme.colors[color].DEFAULT} transparent !important;
            top: var(--tooltip-tail-offset) !important;
            left: 50% !important;
            right: auto !important;
            bottom: auto !important;
          }
          &:before {
            transform: translateX(-50%) !important;
            top: var(--tooltip-offset) !important;
            left: 50% !important;
            right: auto !important;
            bottom: auto !important;
          }
        }
        `
      }],
      [/^tooltip-left-((rose|pink|fuchsia|purple|violet|indigo|blue|sky|cyan|teal|emerald|green|lime|yellow|amber|orange|red|gray|slate|zinc|neutral|stone|light|dark|lightblue|warmgray|truegray|coolgray|bluegray))$/, ([,color], data: any) => {
        return `
        .tooltip-${color} {
          &:after {
            transform: translateY(-50%) !important;
            border-color: transparent transparent transparent ${data.theme.colors[color].DEFAULT} !important;
            top: 50% !important;
            left: auto !important;
            right: calc(var(--tooltip-tail-offset) + 0.0625rem) !important;
            bottom: auto !important;
          }
          &:before {
            transform: translateY(-50%) !important;
            top: 50% !important;
            left: auto !important;
            right: var(--tooltip-offset) !important;
            bottom: auto !important;
          }
        }
        `
      }],
      [/^tooltip-right-((rose|pink|fuchsia|purple|violet|indigo|blue|sky|cyan|teal|emerald|green|lime|yellow|amber|orange|red|gray|slate|zinc|neutral|stone|light|dark|lightblue|warmgray|truegray|coolgray|bluegray))$/, ([,color], data: any) => {
        return `
        .tooltip-${color} {
          &:after {
            transform: translateY(-50%) !important;
            border-color: transparent ${data.theme.colors[color].DEFAULT} transparent transparent !important;
            top: 50% !important;
            left: calc(var(--tooltip-tail-offset) + 0.0625rem) !important;
            right: auto !important;
            bottom: auto !important;
          }
          &:before {
            transform: translateY(-50%) !important;
            top: 50% !important;
            left: var(--tooltip-offset) !important;
            right: auto !important;
            bottom: auto !important;
          }
        }
        `
      }],
    ],
  }
}
