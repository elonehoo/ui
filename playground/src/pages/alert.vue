<script setup lang="ts">

</script>

<template>
  <div class="alert-green">
    <div class="i-carbon-information" />
    <div>
    <h3 class="font-bold">New message!</h3>
    <div class="text-xs">You have 1 unread message</div>
  </div>
  </div>
</template>

<style scoped>
.alert {
  display: grid;
  width: 100%;
  grid-auto-flow: row;
  align-content: flex-start;
  align-items: center;
  justify-items: center;
  gap: 1rem;
  text-align: center;
  border-width: 1px;
  border-color: #191e24;
  padding: 1rem;
  color: #a6adba;
  border-radius: 1rem;
  background-color: #191e24
}

@media(min-width: 640px) {
  .alert {
      grid-auto-flow:column;
      grid-template-columns: auto minmax(auto,1fr);
      justify-items: start;
      text-align: left
  }
}
</style>
