<script setup lang="ts">
</script>

<template>
  <div>
    <span class="badge">Badge</span>
  </div>
  <div m="t-5">
    <div class="badge badge-primary">primary</div>
    <div class="badge badge-secondary ml-1">secondary</div>
    <div class="badge badge-accent ml-1">accent</div>
  </div>
  <div m="t-5">
    <div class="badge badge-info">info</div>
    <div class="badge badge-success ml-1">info</div>
    <div class="badge badge-warning ml-1">info</div>
    <div class="badge badge-error ml-1">info</div>
    <div class="badge badge-ghost ml-1">info</div>
  </div>
  <div m="t-5">
    <div class="badge badge-outline">neutral</div>
    <div class="badge badge-outline badge-primary ml-1">primary</div>
    <div class="badge badge-outline badge-secondary ml-1">secondary</div>
    <div class="badge badge-outline badge-accent ml-1">accent</div>
    <div class="badge badge-outline badge-info ml-1">info</div>
    <div class="badge badge-outline badge-success ml-1">success</div>
    <div class="badge badge-outline badge-warning ml-1">warning</div>
    <div class="badge badge-outline badge-error ml-1">error</div>
  </div>
  <div m="t-5">
    <div class="badge badge-lg">987,654</div>
    <div class="badge badge-md ml-1">987,654</div>
    <div class="badge badge-sm ml-1">987,654</div>
    <div class="badge badge-xs ml-1">987,654</div>
  </div>
  <div m="t-5">
    <div class="badge badge-lg"></div>
    <div class="badge badge-md ml-1"></div>
    <div class="badge badge-sm ml-1"></div>
    <div class="badge badge-xs ml-1"></div>
  </div>
  <div m="t-5">
    <div class="badge badge-info gap-2">
      <div class="i-carbon-close  inline-block w-4 h-4 stroke-current"></div>
      info
    </div>
    <div class="badge badge-success gap-2 ml-1">
      <div class="i-carbon-close  inline-block w-4 h-4 stroke-current"></div>
      success
    </div>
    <div class="badge badge-warning gap-2 ml-1">
      <div class="i-carbon-close  inline-block w-4 h-4 stroke-current"></div>
      warning
    </div>
    <div class="badge badge-error gap-2 ml-1">
      <div class="i-carbon-close  inline-block w-4 h-4 stroke-current"></div>
      error
    </div>
  </div>
  <div m="t-5">
    <h2 class="text-xl">
      Heading
      <span class="badge badge-lg">NEW</span>
    </h2>
    <h3 class="text-lg">
      Heading
      <span class="badge badge-md">NEW</span>
    </h3>
    <h4 class="text-base">
      Heading
      <span class="badge badge-sm">NEW</span>
    </h4>
    <h5 class="text-sm">
      Heading
      <span class="badge badge-xs">NEW</span>
    </h5>
  </div>
  <div m="t-5">
    <button class="btn gap-2">
      Inbox
      <div class="badge">+99</div>
    </button>
    <button class="btn gap-2 ml-1">
      Inbox
      <div class="badge badge-secondary">+99</div>
    </button>
  </div>
</template>
