<script setup lang="ts">
</script>

<template>
  <button class="btn-green" onclick="my_modal_1.showModal()">open modal</button>
  <dialog id="my_modal_1" class="modal">
    <form method="dialog" class="modal-box">
      <h3 class="font-bold text-lg">Hello!</h3>
      <p class="py-4">Press ESC key or click the button below to close</p>
      <div class="modal-action">
        <!-- if there is a button in form, it will close the modal -->
        <button class="btn-gray">Close</button>
      </div>
    </form>
  </dialog>
</template>

<style scoped>
.modal {
  /* @apply duration-200 ease-out bg-transparent text-[inherit]; */
  background-color: transparent;
  color: #a6adba;
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
  transition-duration: 200ms;
  /*  */
  transition-property: transform, opacity, visibility;
  overflow-y: hidden;
  overscroll-behavior: contain;
  &:not(dialog:not(.modal-open)),
  &::backdrop {
    background-color: rgba(0, 0, 0, 0.3);
    animation: modal-pop 0.2s ease-out;
  }
}
.modal-backdrop {
  /* @apply grid col-start-1 row-start-1 justify-self-stretch self-stretch -z-[1] text-transparent; */
  display: grid;
  grid-column-start: 1;
  grid-row-start: 1;
  justify-self: stretch;
  align-self: stretch;
  z-index: -1;
  color: transparent;
}
.modal-box {
  /* @apply transform bg-base-100 p-6 transition duration-200 ease-out col-start-1 row-start-1 w-11/12 max-w-lg scale-90 rounded-b-box rounded-t-box; */
  background-color: #1d232a;
  transform: translateX(var(--un-translate-x)) translateY(var(--un-translate-y))
    translateZ(var(--un-translate-z)) rotate(var(--un-rotate))
    rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y))
    rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y))
    scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y))
    scaleZ(var(--un-scale-z));
  padding: 1.5rem;
  transition-property: color, background-color, border-color, outline-color,
    text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter,
    backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
  grid-column-start: 1;
  grid-row-start: 1;
  width: 91.6666666667%;
  max-width: 32rem;
  --un-scale-x: 0.9;
  --un-scale-y: 0.9;
  transform: translateX(var(--un-translate-x)) translateY(var(--un-translate-y))
    translateZ(var(--un-translate-z)) rotate(var(--un-rotate))
    rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y))
    rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y))
    scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y))
    scaleZ(var(--un-scale-z));
    border-radius: 1rem;
    /*  */
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
  overflow-y: auto;
  overscroll-behavior: contain;
}
.modal-open .modal-box,
.modal-toggle:checked + .modal .modal-box,
.modal:target .modal-box,
.modal[open] .modal-box {
  /* @apply translate-y-0 scale-100; */
  --un-translate-y: 0;
  transform: translateX(var(--un-translate-x)) translateY(var(--un-translate-y))
    translateZ(var(--un-translate-z)) rotate(var(--un-rotate))
    rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y))
    rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y))
    scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y))
    scaleZ(var(--un-scale-z));
  --un-scale-x: 1;
  --un-scale-y: 1;
  transform: translateX(var(--un-translate-x)) translateY(var(--un-translate-y))
    translateZ(var(--un-translate-z)) rotate(var(--un-rotate))
    rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y))
    rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y))
    scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y))
    scaleZ(var(--un-scale-z));
}
.modal-action {
  /* @apply mt-6 justify-end space-x-2; */
  --un-space-x-reverse: 0;
  margin-left: calc(0.5rem * calc(1 - var(--un-space-x-reverse)));
  margin-right: calc(0.5rem * var(--un-space-x-reverse));
  justify-content: flex-end;
  margin-top: 1.5rem;
}
@keyframes modal-pop {
  from {
    opacity: 0;
  }
}

.modal {
  /* @apply pointer-events-none fixed max-w-none max-h-none w-full h-full inset-0 opacity-0 m-0 p-0 grid justify-items-center; */
  pointer-events: none;
  position: fixed;
  max-width: none;
  max-height: none;
  width: 100%;
  height: 100%;
  inset: 0;
  opacity: 0;
  margin: 0;
  padding: 0;
  display: grid;
  justify-items: center;
  /*  */
  overscroll-behavior: contain;
  z-index: 999;
}
.modal-scroll {
  overscroll-behavior: auto;
}
:where(.modal) {
  /* @apply items-center; */
  align-items: center;
}
.modal-box {
  max-height: calc(100vh - 5em);
}
.modal-open,
.modal:target,
.modal-toggle:checked + .modal,
.modal[open] {
  /* @apply pointer-events-auto visible opacity-100; */
  pointer-events: auto;
  visibility: visible;
  opacity: 1;
}
.modal-action {
  /* @apply flex; */
  display: flex;
}
.modal-toggle {
  /* @apply fixed h-0 w-0 appearance-none opacity-0; */
  position: fixed;
  appearance: none;
  opacity: 0;
  width: 0;
  height: 0;
}
:root:has(:is(.modal-open, .modal:target, .modal-toggle:checked + .modal, .modal[open])) {
  /* @apply overflow-hidden; */
  overflow: hidden;
}
</style>
