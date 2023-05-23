export const dropdownUnStyled = `
.dropdown.dropdown-open .dropdown-content,
.dropdown.dropdown-hover:hover .dropdown-content,
.dropdown:focus .dropdown-content,
.dropdown:focus-within .dropdown-content {
  --un-scale-x: 1;
  --un-scale-y: 1;
  transform: translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));
}
`
