<script setup lang="ts">

</script>

<template>
  <div alert="~" shadow="lg">
    <div>
      <div i-carbon-help flex="shrink-0" bg="light-info" />
      <span>12 unread messages. Tap to see.</span>
    </div>
  </div>

  <div alert="~ info" m="t-5" shadow="lg" >
    <div>
      <div i-carbon-information bg="current" flex="shrink-0" />
      <span>New software update available.</span>
    </div>
  </div>

  <div alert="~ success" shadow="lg" m="t-5">
    <div>
      <div i-carbon-checkmark-outline bg="current" flex="shrink-0" />
      <span>Your purchase has been confirmed!</span>
    </div>
  </div>

  <div alert="~ warning" shadow="lg" m="t-5">
    <div>
      <div i-carbon-warning-alt bg="current" flex="shrink-0" />
      <span>Warning: Invalid email address!</span>
    </div>
  </div>

  <div alert="~ error" shadow="lg" m="t-5">
    <div>
      <div i-carbon-close-outline bg="current" flex="shrink-0" />
      <span>Error! Task failed successfully.</span>
    </div>
  </div>

  <div alert="~" shadow="lg" m="t-5">
    <div>
      <div i-carbon-help bg="light-info" flex="shrink-0" />
      <span>we use cookies for no reason.</span>
    </div>
    <div flex="none" >
      <button btn="~ sm ghost" >Deny</button>
      <button btn="~ sm primary" >Accept</button>
    </div>
  </div>

  <div alert="~" shadow="lg" m="t-5">
    <div>
      <div i-carbon-help bg="light-info" flex="shrink-0" />
      <div>
        <h3 font="bold" text-start>New message!</h3>
        <div text="xs">You have 1 unread message</div>
      </div>
    </div>
    <div flex="none">
      <button btn="~ sm">See</button>
    </div>
  </div>
</template>
