<script setup lang="ts">

</script>

<template>
  <div class="alert shadow-lg">
    <div>
      <div class="i-carbon-help bg-light-info flex-shrink-0" />
      <span>12 unread messages. Tap to see.</span>
    </div>
  </div>

  <div class="alert alert-info shadow-lg mt-5">
    <div>
      <div class="i-carbon-information bg-current flex-shrink-0" />
      <span>New software update available.</span>
    </div>
  </div>

  <div class="alert alert-success shadow-lg mt-5">
    <div>
      <div class="i-carbon-checkmark-outline bg-current flex-shrink-0" />
      <span>Your purchase has been confirmed!</span>
    </div>
  </div>

  <div class="alert alert-warning shadow-lg mt-5">
    <div>
      <div class="i-carbon-warning-alt bg-current flex-shrink-0" />
      <span>Warning: Invalid email address!</span>
    </div>
  </div>

  <div class="alert alert-error shadow-lg mt-5px">
    <div>
      <div class="i-carbon-close-outline bg-current flex-shrink-0" />
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
        <h3 font="bold">New message!</h3>
        <div text="xs">You have 1 unread message</div>
      </div>
    </div>
    <div flex="none">
      <button btn="~ sm">See</button>
    </div>
  </div>
</template>
