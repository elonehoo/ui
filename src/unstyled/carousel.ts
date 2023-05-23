export const carouselUnStyled = `
.carousel {
  -ms-overflow-style: none;
  scrollbar-width: none;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  &-vertical {
    scroll-snap-type: y mandatory;
  }
  &-center .carousel-item {
    scroll-snap-align: center;
  }
  &-end .carousel-item {
    scroll-snap-align: end;
  }
}
`
