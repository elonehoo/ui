export const cardUnStyled = `
.card {
  :where(figure:first-child) {
    overflow: hidden;
    border-start-start-radius: inherit;
    border-start-end-radius: inherit;
    border-end-start-radius: unset;
    border-end-end-radius: unset;
  }
  :where(figure:last-child) {
    overflow: hidden;
    border-start-start-radius: unset;
    border-start-end-radius: unset;
    border-end-start-radius: inherit;
    border-end-end-radius: inherit;
  }
  &:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 2px;
  }
  & figure {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &.image-full {
    display: grid;
    &:before {
      position: relative;
      content: "";
    }
    &:before,
    & > * {
      grid-column-start: 1;
      grid-row-start: 1;
    }
    & > figure img {
      height: 100%;
      object-fit: cover;
    }
  }
  &.image-full > &-body {
    position: relative;
  }
}
.card-side {
  :where(figure:first-child) {
    overflow: hidden;
    border-start-start-radius: inherit;
    border-start-end-radius: unset;
    border-end-start-radius: inherit;
    border-end-end-radius: unset;
  }
  :where(figure:last-child) {
    overflow: hidden;
    border-start-start-radius: unset;
    border-start-end-radius: inherit;
    border-end-start-radius: unset;
    border-end-end-radius: inherit;
  }
  & figure > * {
    max-width: unset;
  }
}
:where(.card-side figure > *) {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.card-compact {
  .card-body {
    padding: 1rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
  .card-title {
    margin-bottom: 0.25rem;
  }
}
.card-normal {
  .card-body {
    padding: var(--padding-card);
    font-size: 1rem;
    line-height: 1.5rem;
  }
  .card-title {
    margin-bottom: 0.75rem;
  }
}
`
