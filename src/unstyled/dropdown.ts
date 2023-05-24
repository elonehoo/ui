export const dropdownUnStyled = `
.dropdown .dropdown-content {
  transform-origin: top;
  --un-scale-x: 0.95;
  --un-scale-y: 0.95;
  transform: translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));
  transform: translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));
  transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

}
.dropdown-bottom .dropdown-content {
  transform-origin: top;
}
.dropdown-top .dropdown-content {
  transform-origin: bottom;
}
.dropdown-left .dropdown-content {
  transform-origin: right;
}
.dropdown-right .dropdown-content {
  transform-origin: left;
}
.dropdown.dropdown-open .dropdown-content,
.dropdown.dropdown-hover:hover .dropdown-content,
.dropdown:focus .dropdown-content,
.dropdown:focus-within .dropdown-content {
  --un-scale-x: 1;
  --un-scale-y: 1;
  transform: translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));
}
.dropdown > *:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}
.dropdown .dropdown-content {
  visibility: hidden;
  position: absolute;
  z-index: 50;
  opacity: 0;
}
.dropdown-end .dropdown-content {
  right: 0;
}
.dropdown-left .dropdown-content {
  top: 0;
  right: 100%;
  bottom: auto;
}
.dropdown-right .dropdown-content {
  bottom: auto;
  left: 100%;
  top: 0;
}
.dropdown-bottom .dropdown-content {
  bottom: auto;
  top: 100%;
}
.dropdown-top .dropdown-content {
  bottom: 100%;
  top: auto;
}
.dropdown-end.dropdown-right .dropdown-content {
  bottom: 0;
  top: auto;
}
.dropdown-end.dropdown-left .dropdown-content {
  bottom: 0;
  top: auto;
}
.dropdown.dropdown-open .dropdown-content,
.dropdown.dropdown-hover:hover .dropdown-content,
.dropdown:not(.dropdown-hover):focus .dropdown-content,
.dropdown:not(.dropdown-hover):focus-within .dropdown-content {
  opacity: 1;
  visibility: visible;
}
`
