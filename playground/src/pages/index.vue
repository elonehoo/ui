<script setup lang="ts">


</script>

<template>
  <div>
    <button class="btn">Button</button>
    <button class="btn btn-primary ml-5px">Button</button>
    <button class="btn btn-secondary ml-5px">Button</button>
    <button class="btn btn-accent ml-5px">Button</button>
    <button class="btn btn-ghost ml-5px">Button</button>
    <button class="btn btn-link ml-5px">Button</button>
  </div>
  <div class="mt-5px">
    <button class="btn btn-active">Button</button>
    <button class="btn btn-primary btn-active ml-5px">Button</button>
    <button class="btn btn-secondary btn-active ml-5px">Button</button>
    <button class="btn btn-accent btn-active ml-5px">Button</button>
    <button class="btn btn-ghost btn-active ml-5px">Button</button>
    <button class="btn btn-link btn-active ml-5px">Button</button>
  </div>
  <div class="mt-5px">
    <button class="btn btn-info">Button</button>
    <button class="btn btn-success ml-5px">Button</button>
    <button class="btn btn-warning ml-5px">Button</button>
    <button class="btn btn-error ml-5px">Button</button>
  </div>
  <div class="mt-5px">
    <button class="btn btn-outline">Button</button>
    <button class="btn btn-primary btn-outline ml-5px">Button</button>
    <button class="btn btn-secondary btn-outline ml-5px">Button</button>
    <button class="btn btn-accent btn-outline ml-5px">Button</button>
  </div>
  <div class="mt-5px">
    <button class="btn btn-info btn-outline">Button</button>
    <button class="btn btn-success btn-outline ml-5px">Button</button>
    <button class="btn btn-warning btn-outline ml-5px">Button</button>
    <button class="btn btn-error btn-outline ml-5px">Button</button>
  </div>
  <div class="mt-5px">
    <button class="btn" disabled="disabled">Disabled using attribute</button>
    <button class="btn btn-disabled ml-5px" tabindex="-1" role="button" aria-disabled="true">Disabled using class name</button>
  </div>
  <div class="mt-5px">
    <button class="btn btn-square">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
    </button>
    <button class="btn btn-square btn-outline ml-5px">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
    </button>
  </div>
  <div class="mt-5px">
    <button class="btn btn-circle">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
    </button>
    <button class="btn btn-circle btn-outline ml-5px">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
    </button>
  </div>
</template>
