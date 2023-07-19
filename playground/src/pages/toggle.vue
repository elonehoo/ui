<script setup lang="ts">
const demo = ref(false)
</script>

<template>
  <input v-model="demo" type="checkbox" toggle="green none lg">
</template>
