import { describe, expect, it } from 'vitest'
import generator from './setup'
import { hexToRgb, uiColor } from './utils'

describe('button',  () => {
  for (const color of uiColor) {
    it(`btn ${color}`,async ()=>{
      const { getLayer } = await generator.generate(`btn-${color}`)
      expect(getLayer('shortcuts')).toEqual(
`/* layer: shortcuts */
.btn-${color}{display:inline-flex;flex-shrink:0;align-items:center;grid-column-gap:0.375rem;column-gap:0.375rem;border-radius:0.375rem;--un-bg-opacity:1;background-color:rgba(${hexToRgb(color,'500')?.r},${hexToRgb(color,'500')?.g},${hexToRgb(color,'500')?.b},var(--un-bg-opacity));padding-left:0.625rem;padding-right:0.625rem;padding-top:0.375rem;padding-bottom:0.375rem;font-size:0.875rem;line-height:1.25rem;font-weight:500;--un-text-opacity:1;color:rgba(255,255,255,var(--un-text-opacity));--un-shadow:var(--un-shadow-inset) 0 1px 2px 0 var(--un-shadow-color, rgba(0,0,0,0.05));box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}
.btn-${color}:disabled{cursor:not-allowed;--un-bg-opacity:1;background-color:rgba(${hexToRgb(color,'500')?.r},${hexToRgb(color,'500')?.g},${hexToRgb(color,'500')?.b},var(--un-bg-opacity));opacity:0.75;}
.dark .btn-${color}{--un-bg-opacity:1;background-color:rgba(${hexToRgb(color,'DEFAULT')?.r},${hexToRgb(color,'DEFAULT')?.g},${hexToRgb(color,'DEFAULT')?.b},var(--un-bg-opacity));--un-text-opacity:1;color:rgba(${hexToRgb('gray','900')?.r},${hexToRgb('gray','900')?.g},${hexToRgb('gray','900')?.b},var(--un-text-opacity));}
.btn-${color}:hover{--un-bg-opacity:1;background-color:rgba(${hexToRgb(color,'600')?.r},${hexToRgb(color,'600')?.g},${hexToRgb(color,'600')?.b},var(--un-bg-opacity));}
.dark .btn-${color}:hover{--un-bg-opacity:1;background-color:rgba(${hexToRgb(color,'500')?.r},${hexToRgb(color,'500')?.g},${hexToRgb(color,'500')?.b},var(--un-bg-opacity));}
.btn-${color}:hover:disabled{--un-bg-opacity:1;background-color:rgba(${hexToRgb(color,'500')?.r},${hexToRgb(color,'500')?.g},${hexToRgb(color,'500')?.b},var(--un-bg-opacity));}
.dark .btn-${color}:disabled{--un-bg-opacity:1;background-color:rgba(${hexToRgb(color,'DEFAULT')?.r},${hexToRgb(color,'DEFAULT')?.g},${hexToRgb(color,'DEFAULT')?.b},var(--un-bg-opacity));}
.dark .btn-${color}:hover:disabled{--un-bg-opacity:1;background-color:rgba(${hexToRgb(color,'DEFAULT')?.r},${hexToRgb(color,'DEFAULT')?.g},${hexToRgb(color,'DEFAULT')?.b},var(--un-bg-opacity));}
.btn-${color}:focus-visible{outline-width:0;outline-width:2px;--un-outline-color-opacity:1;outline-color:rgba(${hexToRgb(color,'500')?.r},${hexToRgb(color,'500')?.g},${hexToRgb(color,'500')?.b},var(--un-outline-color-opacity));outline-offset:2px;outline-style:solid;}
.dark .btn-${color}:focus-visible{--un-outline-color-opacity:1;outline-color:rgba(${hexToRgb(color,'DEFAULT')?.r},${hexToRgb(color,'DEFAULT')?.g},${hexToRgb(color,'DEFAULT')?.b},var(--un-outline-color-opacity));}
.btn-${color}:focus{outline:2px solid transparent;outline-offset:2px;}`)
    })
}
})
