import type { Preset } from 'unocss'

export default function elonehooUI(): Preset {
  return {
    name: 'elonehoo-ui',
    shortcuts: [
      { 'space-vertical': '[flex-flow:column_nowrap]' },
      [/^btn-((rose|pink|fuchsia|purple|violet|indigo|blue|sky|cyan|teal|emerald|green|lime|yellow|amber|orange|red|gray|slate|zinc|neutral|stone|light|dark|lightblue|warmgray|truegray|coolgray|bluegray))$/, ([, color]) => `focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 px-2.5 py-1.5 shadow-sm text-white dark:text-gray-900 bg-${color}-500 hover:bg-${color}-600 disabled:bg-${color}-500 disabled:hover:bg-${color}-500 dark:bg-${color}-400 dark:hover:bg-${color}-500 dark:disabled:bg-${color}-400 dark:disabled:hover:bg-${color}-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-${color}-500 dark:focus-visible:outline-${color}-400 inline-flex items-center`],
      [/^btn-outline-((rose|pink|fuchsia|purple|violet|indigo|blue|sky|cyan|teal|emerald|green|lime|yellow|amber|orange|red|gray|slate|zinc|neutral|stone|light|dark|lightblue|warmgray|truegray|coolgray|bluegray))$/, ([, color]) => `focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 px-2.5 py-1.5 ring-1 ring-inset ring-current text-${color}-500 dark:text-${color}-400 hover:bg-${color}-50 disabled:bg-transparent dark:hover:bg-${color}-950 dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-${color}-500 dark:focus-visible:ring-${color}-400 inline-flex items-center`],
      [/^btn-soft-((rose|pink|fuchsia|purple|violet|indigo|blue|sky|cyan|teal|emerald|green|lime|yellow|amber|orange|red|gray|slate|zinc|neutral|stone|light|dark|lightblue|warmgray|truegray|coolgray|bluegray))$/, ([, color]) => `focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 px-2.5 py-1.5 text-${color}-500 dark:text-${color}-400 bg-${color}-50 hover:bg-${color}-100 disabled:bg-${color}-50 dark:bg-${color}-950 dark:hover:bg-${color}-900 dark:disabled:bg-${color}-950 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-${color}-500 dark:focus-visible:ring-${color}-400 inline-flex items-center`],
      [/^btn-ghost-((rose|pink|fuchsia|purple|violet|indigo|blue|sky|cyan|teal|emerald|green|lime|yellow|amber|orange|red|gray|slate|zinc|neutral|stone|light|dark|lightblue|warmgray|truegray|coolgray|bluegray))$/, ([, color]) => `focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 px-2.5 py-1.5 text-${color}-500 dark:text-${color}-400 hover:bg-${color}-50 disabled:bg-transparent dark:hover:bg-${color}-950 dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-${color}-500 dark:focus-visible:ring-${color}-400 inline-flex items-center`],
      [/^btn-link-((rose|pink|fuchsia|purple|violet|indigo|blue|sky|cyan|teal|emerald|greenlime|yellow|amber|orange|red|gray|slate|zinc|neutral|stone|light|dark|lightblue|warmgray|truegray|coolgray|bluegray))$/, ([, color]) => `focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 px-2.5 py-1.5 text-${color}-500 hover:text-${color}-600 disabled:text-${color}-500 dark:text-${color}-400 dark:hover:text-${color}-500 dark:disabled:text-${color}-400 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-${color}-500 dark:focus-visible:ring-${color}-400 inline-flex items-center`],
      [/^btn-black-((rose|pink|fuchsia|purple|violet|indigo|blue|sky|cyan|teal|emerald|green|lime|yellow|amber|orange|red|gray|slate|zinc|neutral|stone|light|dark|lightblue|warmgray|truegray|coolgray|bluegray))$/, ([, color]) => `focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 px-2.5 py-1.5 shadow-sm text-white dark:text-gray-900 bg-${color}-500 hover:bg-${color}-600 disabled:bg-${color}-500 dark:bg-${color}-400 dark:hover:bg-${color}-500 dark:disabled:bg-${color}-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-${color}-500 dark:focus-visible:outline-${color}-400 w-full flex justify-center items-center`],
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
      [/^space-((start|center|end|between|around|evenly|stretch))$/, ([, color]) => `flex justify-${color} gap-[8px_12px] [flex-flow:row_wrap]`],
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
          return `relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 rounded-md placeholder-gray-400 dark:placeholder-gray-500 text-sm px-2.5 py-1.5 shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-${color}-500 dark:focus:ring-${color}-400`
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
          return 'form-textarea relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 rounded-md placeholder-gray-400 dark:placeholder-gray-500 text-sm px-2.5 py-1.5 bg-transparent focus:ring-0 focus:shadow-none resize-none'

        else
          return `relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 rounded-md placeholder-gray-400 dark:placeholder-gray-500 text-sm px-2.5 py-1.5 shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-${color}-500 dark:focus:ring-${color}-400 resize-none`
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
      [/^select-((rose|pink|fuchsia|purple|violet|indigo|blue|sky|cyan|teal|emerald|green|lime|yellow|amber|orange|red|gray|slate|zinc|neutral|stone|light|dark|lightblue|warmgray|truegray|coolgray|bluegray))$/, ([, color]) => `select-arrow appearance-none relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 rounded-md text-sm px-2.5 py-1.5 shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-${color}-500 dark:focus:ring-${color}-400 pe-9`],
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
      {'toggle-none':'indeterminate:shadow-[0_0_2px_white_inset,0_0_0_2px_white_inset]! shadow-[0_0_2px_white_inset,0_0_0_2px_white_inset]! checked:shadow-[0_0_2px_white_inset,0_0_0_2px_white_inset]! dark:shadow-[0_0_2px_black_inset,0_0_0_2px_black_inset]! checked:dark:shadow-[0_0_2px_black_inset,0_0_0_2px_black_inset]! indeterminate:dark:shadow-[0_0_2px_black_inset,0_0_0_2px_black_inset]!'},
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
        if(layout === 'box'){
          return 'overflow-hidden rounded-lg divide-y divide-gray-200 dark:divide-gray-800 ring-1 ring-gray-200 dark:ring-gray-800 shadow bg-white dark:bg-gray-900 w-full'
        }else if(layout === 'body'){
          return 'px-4 py-5 sm:p-6'
        }else if(layout === 'head'){
          return 'px-4 py-5 sm:px-6'
        }else{
          return 'px-4 py-4 sm:px-6'
        }
      }],
      [/^skeleton-((rose|pink|fuchsia|purple|violet|indigo|blue|sky|cyan|teal|emerald|green|lime|yellow|amber|orange|red|gray|slate|zinc|neutral|stone|light|dark|lightblue|warmgray|truegray|coolgray|bluegray))$/, ([, color]) => `animate-pulse bg-${color}-100 dark:bg-${color}-800`],
      { 'content': 'mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl w-full' },
      [/^model-code-((rose|pink|fuchsia|purple|violet|indigo|blue|sky|cyan|teal|emerald|green|lime|yellow|amber|orange|red|gray|slate|zinc|neutral|stone|light|dark|lightblue|warmgray|truegray|coolgray|bluegray))$/, ([, color]) => `relative overflow-hidden overflow-x-auto min-w-72 bg-${color} text-${color === 'light' ? 'black' : 'white'} rounded-4 py-5 before:content-[""] before:block before:h-3 before:w-3 before:opacity-30 before:shadow-[1.4em_0,2.8em_0,4.2em_0] before:mb-4 before:rounded-full`],
      {'code-line':'pr-5 before:content-[""] flex justify-start before:mr-2ch before:content-[attr(data-prefix)] before:inline-block before:text-right before:w-8 before:opacity-50'},
      [/^checkbox-((rose|pink|fuchsia|purple|violet|indigo|blue|sky|cyan|teal|emerald|green|lime|yellow|amber|orange|red|gray|slate|zinc|neutral|stone|light|dark|lightblue|warmgray|truegray|coolgray|bluegray))$/, ([, color]) => `shrink-0 h-6 w-6 cursor-pointer appearance-none border rounded-lg border-${color} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-${color} checked:bg-${color} checked:bg-no-repeat checked:animate-[checkmark_0.2s_ease-in-out] checked:checkbox-bg-img-${color} indeterminate:bg-${color} indeterminate:bg-no-repeat indeterminate:animate-[checkmark_0.2s_ease-in-out] indeterminate:checkbox-bg-img-${color}`],
      [/^checkbox-((xs|sm|md|lg))$/, ([, layout]) => {
        if(layout === 'xs'){
          return 'w-4 h-4'
        }else if(layout === 'sm'){
          return 'w-5 h-5'
        }else if(layout === 'md'){
          return 'w-6 h-6'
        }else{
          return 'w-8 h-8'
        }
      }],
      [/^radio-((rose|pink|fuchsia|purple|violet|indigo|blue|sky|cyan|teal|emerald|green|lime|yellow|amber|orange|red|gray|slate|zinc|neutral|stone|light|dark|lightblue|warmgray|truegray|coolgray|bluegray))$/, ([, color]) => `shrink-0 h-6 w-6 cursor-pointer appearance-none border rounded-full radiomark-${color} border-${color} checked:bg-${color} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-${color}`],
      [/^radio-((xs|sm|md|lg))$/, ([, layout]) => {
        if(layout === 'xs'){
          return 'w-4 h-4'
        }else if(layout === 'sm'){
          return 'w-5 h-5'
        }else if(layout === 'md'){
          return 'w-6 h-6'
        }else{
          return 'w-8 h-8'
        }
      }],
    ],
    rules:[
      ['select-arrow',{
        'background-image': 'linear-gradient(45deg,transparent 50%,currentColor 50%),linear-gradient(135deg,currentColor 50%,transparent 50%)',
        'background-position': 'calc(100% - 20px) calc(1px + 50%),calc(100% - 16px) calc(1px + 50%)',
        'background-size': '4px 4px,4px 4px',
        'background-repeat': 'no-repeat'
      }],
      [/^checkbox-bg-img-((rose|pink|fuchsia|purple|violet|indigo|blue|sky|cyan|teal|emerald|green|lime|yellow|amber|orange|red|gray|slate|zinc|neutral|stone|light|dark|lightblue|warmgray|truegray|coolgray|bluegray))$/,([,color],data:any)=>{
        if(color === 'dark'){
          return `
          .${data.rawSelector}:checked{
            background-image: linear-gradient(-45deg, rgba(0, 0, 0, 0) 65%, ${data.theme.colors[color].DEFAULT} 65.99%), linear-gradient(45deg, rgba(0, 0, 0, 0) 75%, ${data.theme.colors[color].DEFAULT} 75.99%), linear-gradient(-45deg, ${data.theme.colors[color].DEFAULT} 40%, rgba(0, 0, 0, 0) 40.99%), linear-gradient(45deg, ${data.theme.colors[color].DEFAULT} 30%, rgb(255, 255, 255) 30.99%, rgb(255, 255, 255) 40%, rgba(0, 0, 0, 0) 40.99%), linear-gradient(-45deg, rgb(255, 255, 255) 50%, ${data.theme.colors[color].DEFAULT} 50.99%);
          }
          .${data.awSelector}:indeterminate{
            background-image:linear-gradient(90deg, rgba(0, 0, 0, 0) 80%, ${data.theme.colors[color].DEFAULT} 80%), linear-gradient(-90deg, rgba(0, 0, 0, 0) 80%, ${data.theme.colors[color].DEFAULT} 80%), linear-gradient(0deg, ${data.theme.colors[color].DEFAULT} 43%, rgb(255, 255, 255) 43%, rgb(255, 255, 255) 57%, ${data.theme.colors[color].DEFAULT} 57%)
          }
          `
        }else {
          return `
          .${data.rawSelector}:checked{
            background-image: linear-gradient(-45deg, rgba(0, 0, 0, 0) 65%, ${data.theme.colors[color].DEFAULT} 65.99%), linear-gradient(45deg, rgba(0, 0, 0, 0) 75%, ${data.theme.colors[color].DEFAULT} 75.99%), linear-gradient(-45deg, ${data.theme.colors[color].DEFAULT} 40%, rgba(0, 0, 0, 0) 40.99%), linear-gradient(45deg, ${data.theme.colors[color].DEFAULT} 30%, rgb(29, 35, 42) 30.99%, rgb(29, 35, 42) 40%, rgba(0, 0, 0, 0) 40.99%), linear-gradient(-45deg, rgb(29, 35, 42) 50%, ${data.theme.colors[color].DEFAULT} 50.99%)
          }
          .${data.rawSelector}:indeterminate{
            background-image: linear-gradient(90deg, rgba(0, 0, 0, 0) 80%, ${data.theme.colors[color].DEFAULT} 80%), linear-gradient(-90deg, rgba(0, 0, 0, 0) 80%, ${data.theme.colors[color].DEFAULT} 80%), linear-gradient(0deg, ${data.theme.colors[color].DEFAULT} 43%, rgb(29, 35, 42) 43%, rgb(29, 35, 42) 57%, ${data.theme.colors[color].DEFAULT} 57%)
          }
          `
        }
      }],
      [/^radiomark-((rose|pink|fuchsia|purple|violet|indigo|blue|sky|cyan|teal|emerald|green|lime|yellow|amber|orange|red|gray|slate|zinc|neutral|stone|light|dark|lightblue|warmgray|truegray|coolgray|bluegray))$/,([,color])=>{
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
    ],
    preflights: [
      {
        getCSS: () => `
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
    ]
  }
}
