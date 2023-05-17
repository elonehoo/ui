import { ShortcutsType } from '../types'

export const carousel: ShortcutsType = {
  name:'carousel',
  value: "flex overflow-x-scroll " +
  "[&::-webkit-scrollbar]:hidden"
}

export const carouselVertical: ShortcutsType = {
  name:'carousel-vertical',
  value: "flex-col overflow-y-scroll "
}

export const carouselItem: ShortcutsType = {
  name:'carousel-item',
  value: "box-content flex flex-none snap-start "
}


