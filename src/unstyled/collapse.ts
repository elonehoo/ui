export const collapseUnStyled = `
.collapse.collapse {
  visibility: visible;
}
.collapse-title,
.collapse > input[type="checkbox"],
.collapse-content {
  grid-column-start: 1;
  grid-row-start: 1;
}
.collapse > input[type="checkbox"] {
  -webkit-appearance: none;
  appearance: none;
  opacity: 0;
}
.collapse-open .collapse-content,
.collapse:focus:not(.collapse-close) .collapse-content,
.collapse:not(.collapse-close)
  input[type="checkbox"]:checked
  ~ .collapse-content {
  max-height: none;
}
.collapse:focus-visible {
  outline: 2px solid hsl(var(--collapse-focus));
  outline-offset: 2px;
}
.collapse-arrow .collapse-title:after {
  --un-translate-y: -100%;
  transform: translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));
  transform: translateY(-100%);
  position: absolute;
  display: block;
  height: 0.5rem;
  width: 0.5rem;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.2s;
  --un-rotate-x: 0;
  --un-rotate-y: 0;
  --un-rotate-z: 0;
  --un-rotate: 45deg;
  transform: translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));
  top: 50%;
  right: 1.4rem;
  content: "";
  transform-origin: 75% 75%;
  box-shadow: 2px 2px;
  pointer-events: none;
}
[dir="rtl"] .collapse-arrow .collapse-title:after {
  --tw-rotate: -45deg;
}
.collapse-plus .collapse-title:after {
  position: absolute;
  display: block;
  height: 0.5rem;
  width: 0.5rem;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  transition-duration: 300ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  top: 0.9rem;
  right: 1.4rem;
  content: "+";
  pointer-events: none;
}

.collapse:not(.collapse-open):not(.collapse-close) input[type="checkbox"],
.collapse:not(.collapse-open):not(.collapse-close) .collapse-title {
  cursor: pointer;
}
.collapse:focus:not(.collapse-open):not(.collapse-close) .collapse-title {
  cursor: unset;
}
:where(.collapse > input[type="checkbox"]) {
  z-index: 1;
}
.collapse-title,
:where(.collapse > input[type="checkbox"]) {
  width: 100%;
  padding: 1rem;
  padding-right: 3rem;
  min-height: 3.75rem;
  transition: background-color 0.2s ease-in-out;
}
.collapse-content {
  transition: padding 0.2s ease-in-out, background-color 0.2s ease-in-out;
}
.collapse-open :where(.collapse-content),
.collapse:focus:not(.collapse-close) :where(.collapse-content),
.collapse:not(.collapse-close) :where(input[type="checkbox"]:checked ~ .collapse-content) {
  padding-bottom: 1rem;
  transition: padding 0.2s ease-in-out, background-color 0.2s ease-in-out;
}

.collapse-open.collapse-arrow .collapse-title:after,
.collapse-arrow:focus:not(.collapse-close) .collapse-title:after,
.collapse-arrow:not(.collapse-close) input[type="checkbox"]:checked ~ .collapse-title:after {
  --un-translate-y: -50%;
  transform: translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));
  --un-rotate-x: 0;
  --un-rotate-y: 0;
  --un-rotate-z: 0;
  --un-rotate: 225deg;
  transform: translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));
}
[dir="rtl"] .collapse-open.collapse-arrow .collapse-title:after,
[dir="rtl"] .collapse-arrow:focus:not(.collapse-close) .collapse-title:after,
[dir="rtl"] .collapse-arrow:not(.collapse-close) input[type="checkbox"]:checked ~ .collapse-title:after {
  --tw-rotate: 135deg;
}
.collapse-open.collapse-plus .collapse-title:after,
.collapse-plus:focus:not(.collapse-close) .collapse-title:after,
.collapse-plus:not(.collapse-close) input[type="checkbox"]:checked ~ .collapse-title:after {
  content: "−";
}
`
