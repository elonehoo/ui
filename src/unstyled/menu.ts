export function menuUnStyled(
  colors:{light:any,dark:any}
){
  return `
  .menu {
    &.horizontal {
      > li {
        &.bordered {
          > a,
          > button,
          > span {
            border-left-width: 0;
            border-bottom-width: 4px;
            border-collapse: separate;
          }
        }
      }
    }
    &[class*=" px-"]:not(&[class*=" px-0"]) li > *,
    &[class^="px-"]:not(&[class^="px-0"]) li > *,
    &[class*=" p-"]:not(&[class*=" p-0"]) li > *,
    &[class^="p-"]:not(&[class^="p-0"]) li > * {
      border-radius: var(--rounded-btn);
    }
    :where(li.bordered > *) {
      border-left-width: 4px;
      border-color: ${colors.light.primary};
    }
    .dark :where(li.bordered > *) {
      border-left-width: 4px;
      border-color: ${colors.dark.primary};
    }
    :where(li) > :where(*:not(ul)) {
      grid-gap: 0.75rem;
      gap: 0.75rem;
      padding-left: 1rem;
      padding-right: 1rem;
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      color: currentColor;
    }

    :where(li:not(.menu-title):not(:empty)) > :where(*:not(ul):focus),
    :where(li:not(.menu-title):not(:empty)) > :where(*:not(ul):hover) {
      --un-bg-opacity: 0.1;
      background-color: ${colors.light.base.content};
    }

    .dark :where(li:not(.menu-title):not(:empty)) > :where(*:not(ul):focus),
    :where(li:not(.menu-title):not(:empty)) > :where(*:not(ul):hover) {
      --un-bg-opacity: 0.1;
      background-color: ${colors.dark.base.content};
    }

    :where(li:not(.menu-title):not(:empty)) > :where(:not(ul).active),
    :where(li:not(.menu-title):not(:empty)) > :where(*:not(ul):active) {
      background-color: ${colors.light.primary};
      color: ${colors.light.primaryContent};
    }

    .dark :where(li:not(.menu-title):not(:empty)) > :where(:not(ul).active),
    :where(li:not(.menu-title):not(:empty)) > :where(*:not(ul):active) {
      background-color: ${colors.dark.primary};
      color: ${colors.dark.primaryContent};
    }

    :where(li:empty) {
      margin-left: 1rem;
      margin-right: 1rem;
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
      height: 1px;
      --un-bg-opacity: 0.1;
      background-color: ${colors.light.base.content};
    }
    .dark :where(li:empty) {
      margin-left: 1rem;
      margin-right: 1rem;
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
      height: 1px;
      --un-bg-opacity: 0.1;
      background-color: ${colors.dark.base.content};
    }

    li.disabled {
      & > * {
        -webkit-user-select: none;
        user-select: none;
        color: ${colors.dark.base.content};
        --un-text-opacity: 0.2;
      }
      & > *:hover {
        background-color: transparent;
      }
    }
    li .hover-bordered {
      a {
        border-left-width: 4px;
        border-color: transparent;
      }
      a:hover {
        border-color: ${colors.light.primary};
      }
      .dark a:hover {
        border-color: ${colors.dark.primary};
      }
    }
    &.compact {
      li {
        > a,
        > span {
          padding-top: 0.5rem;
          padding-bottom: 0.5rem;
          font-size: 0.875rem;
          line-height: 1.25rem;
        }
      }
    }
    .menu-title {
      font-size: 0.75rem;
      line-height: 1rem;
      font-weight: 700;
      opacity: 0.4;
      > * {
        padding-top: 0.25rem;
        padding-bottom: 0.25rem;
      }
    }
  }

  .menu :where(li:not(.disabled)) > :where(*:not(ul)) {
    outline: 2px solid transparent;
    outline-offset: 2px;
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
    transition-duration: 200ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }

  .menu > :where(li:first-child) {
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
    border-bottom-right-radius: unset;
    border-bottom-left-radius: unset;
  }
  .menu > :where(li:first-child) > :where(:not(ul)) {
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
    border-bottom-right-radius: unset;
    border-bottom-left-radius: unset;
  }
  .menu > :where(li:last-child) {
    border-top-left-radius: unset;
    border-top-right-radius: unset;
    border-bottom-right-radius: inherit;
    border-bottom-left-radius: inherit;
  }
  .menu > :where(li:last-child) > :where(:not(ul)) {
    border-top-left-radius: unset;
    border-top-right-radius: unset;
    border-bottom-right-radius: inherit;
    border-bottom-left-radius: inherit;
  }
  .menu > :where(li:first-child:last-child) {
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
    border-bottom-right-radius: inherit;
    border-bottom-left-radius: inherit;
  }
  .menu > :where(li:first-child:last-child) > :where(:not(ul)) {
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
    border-bottom-right-radius: inherit;
    border-bottom-left-radius: inherit;
  }

  .menu > :where(li) > :where(ul) {
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
    border-bottom-right-radius: inherit;
    border-bottom-left-radius: inherit;
  }

  .menu > :where(li) > :where(ul) :where(li) {
    width: 100%;
    white-space: nowrap;
  }
  .menu > :where(li) > :where(ul) :where(li) :where(ul) {
    padding-left: 1rem;
  }
  .menu > :where(li) > :where(ul) :where(li) > :where(:not(ul)) {
    width: 100%;
    white-space: nowrap;
  }

  .menu > :where(li) > :where(ul) > :where(li:first-child) {
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
    border-bottom-right-radius: unset;
    border-bottom-left-radius: unset;
  }
  .menu > :where(li) > :where(ul) > :where(li:first-child) > :where(:not(ul)) {
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
    border-bottom-right-radius: unset;
    border-bottom-left-radius: unset;
  }
  .menu > :where(li) > :where(ul) > :where(li:last-child) {
    border-top-left-radius: unset;
    border-top-right-radius: unset;
    border-bottom-right-radius: inherit;
    border-bottom-left-radius: inherit;
  }
  .menu > :where(li) > :where(ul) > :where(li:last-child) > :where(:not(ul)) {
    border-top-left-radius: unset;
    border-top-right-radius: unset;
    border-bottom-right-radius: inherit;
    border-bottom-left-radius: inherit;
  }
  .menu > :where(li) > :where(ul) > :where(li:first-child:last-child) {
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
    border-bottom-right-radius: inherit;
    border-bottom-left-radius: inherit;
  }
  .menu > :where(li) > :where(ul) > :where(li:first-child:last-child) > :where(:not(ul)) {
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
    border-bottom-right-radius: inherit;
    border-bottom-left-radius: inherit;
  }
  .menu {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    &.horizontal {
      flex-direction: row;
      display: inline-flex;
      :where(li) {
        flex-direction: row;
      }
    }
  }
  :where(.menu li) {
    position: relative;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: stretch;
    flex-shrink: 0;
  }
  .menu :where(li:not(.menu-title)) > :where(*:not(ul)) {
    display: flex;
  }
  .menu :where(li:not(.disabled):not(.menu-title)) > :where(*:not(ul)) {
    cursor: pointer;
    -webkit-user-select: none;
    user-select: none;
    align-items: center;
    outline: 2px solid transparent;
    outline-offset: 2px;
  }
  .menu > :where(li > *:not(ul):focus) {
    outline: 2px solid transparent;
    outline-offset: 2px;
  }
  .menu > :where(li.disabled > *:not(ul):focus) {
    cursor: auto;
  }

  .menu > :where(li) :where(ul) {
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
  .menu > :where(li) > :where(ul) {
    display: none;
    position: absolute;
    top: initial;
    left: 100%;
  }
  .menu > :where(li:hover) > :where(ul) {
    display: flex;
  }
  .menu > :where(li:focus) > :where(ul) {
    display: flex;
  }
  .menu-vertical :where(li.bordered > *) {
    border-left-width: 4px;
    border-bottom-width: 0;
  }
  .menu-horizontal :where(li.bordered > *) {
    border-left-width: 0;
    border-bottom-width: 4px;
  }
  .menu-normal :where(li > *) {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    font-size: 1rem;
    line-height: 1.5rem;
  }
  .menu-compact :where(li > *) {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
  .menu-vertical > :where(li:first-child) {
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
    border-bottom-right-radius: unset;
    border-bottom-left-radius: unset;
  }
  .menu-vertical > :where(li:first-child) > :where(*:not(ul)) {
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
    border-bottom-right-radius: unset;
    border-bottom-left-radius: unset;
  }
  .menu-vertical > :where(li:last-child) {
    border-top-left-radius: unset;
    border-top-right-radius: unset;
    border-bottom-right-radius: inherit;
    border-bottom-left-radius: inherit;
  }
  .menu-vertical > :where(li:last-child) > :where(*:not(ul)) {
    border-top-left-radius: unset;
    border-top-right-radius: unset;
    border-bottom-right-radius: inherit;
    border-bottom-left-radius: inherit;
  }

  .menu-horizontal > :where(li:first-child) {
    border-top-left-radius: inherit;
    border-top-right-radius: unset;
    border-bottom-right-radius: unset;
    border-bottom-left-radius: inherit;
  }
  .menu-horizontal > :where(li:first-child) > :where(*:not(ul)) {
    border-top-left-radius: inherit;
    border-top-right-radius: unset;
    border-bottom-right-radius: unset;
    border-bottom-left-radius: inherit;
  }
  .menu-horizontal > :where(li:last-child) {
    border-top-left-radius: unset;
    border-top-right-radius: inherit;
    border-bottom-right-radius: inherit;
    border-bottom-left-radius: unset;
  }
  .menu-horizontal > :where(li:last-child) > :where(*:not(ul)) {
    border-top-left-radius: unset;
    border-top-right-radius: inherit;
    border-bottom-right-radius: inherit;
    border-bottom-left-radius: unset;
  }
  .menu-vertical {
    flex-direction: column;
    :where(li) {
      flex-direction: column;
    }
  }

  .menu-vertical > :where(li) > :where(ul) {
    top: initial;
    left: 100%;
  }

  .menu-horizontal {
    display: inline-flex;
    flex-direction: row;
    width: max-content;
    :where(li) {
      flex-direction: row;
    }
  }

  .menu-horizontal > :where(li) > :where(ul) {
    top: 100%;
    left: initial;
  }
  `
}
