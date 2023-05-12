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
    <button class="btn btn-xs">Button</button>
    <button class="btn btn-sm ml-5px">Button</button>
    <button class="btn btn-md ml-5px">Button</button>
    <button class="btn btn-lg ml-5px">Button</button>
  </div>
  <div class="mt-5px">
    <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Responsive</button>
  </div>
  <div class="mt-5px">
    <button class="btn" disabled="disabled">Disabled using attribute</button>
    <button class="btn btn-disabled ml-5px" tabindex="-1" role="button" aria-disabled="true">Disabled using class name</button>
  </div>
  <div class="mt-5px">
    <button class="btn btn-wide">Wide</button>
  </div>
  <div class="mt-5px">
    <button class="btn btn-square">
      <div class="i-carbon-logo-svelte w-6 h-6" />
    </button>
    <button class="btn btn-square btn-outline ml-5px">
      <div class="i-carbon-logo-react w-6 h-6" />
    </button>
  </div>
  <div class="mt-5px">
    <button class="btn btn-circle">
      <div class="i-carbon-logo-vue w-6 h-6" />
    </button>
    <button class="btn btn-circle btn-outline ml-5px">
      <div class="i-carbon-logo-angular h-6 w-6"></div>
    </button>
  </div>
  <div class="mt-5px">
    <button class="btn gap-2">
      <div class="i-carbon-favorite w-6 h-6" />
      Button
    </button>
  </div>
  <div class="mt-5px">
    <button class="btn gap-2">
      Button
      <div class="i-carbon-favorite w-6 h-6" />
    </button>
  </div>
  <div class="mt-5px">
    <button class="btn btn-block">
      Button
    </button>
  </div>
</template>
