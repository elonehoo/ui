import { ShortcutsType } from '../types'

export const dropdown:ShortcutsType = {
  name: 'dropdown',
  value:"origin-top scale-95 transform transition duration-200 ease-in-out"
}

export const dropdownContent:ShortcutsType = {
  name: 'dropdown-content',
  value:
    "origin-top scale-95 transform transition duration-200 ease-in-out "
    + "origin-top "
    + "origin-bottom "
    + "origin-right "
    + "origin-left"
}


export const dropdownBottom:ShortcutsType = {
  name: 'dropdown-bottom',
  value:"origin-top"
}

export const dropdownTop:ShortcutsType = {
  name: 'dropdown-top',
  value:"origin-bottom"
}

export const dropdownLeft:ShortcutsType = {
  name: 'dropdown-left',
  value:"origin-right"
}

export const dropdownRight:ShortcutsType = {
  name: 'dropdown-right',
  value:"origin-left"
}
