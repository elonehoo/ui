<script setup lang="ts">
const {title,desc} = defineProps<{
  title: string
  desc:string
}>()

</script>

<template>
  <a :href="`/components/${title}`" class="no-underline" style="text-decoration:none">
    <div class="group relative border border-dark-100 border-op-10 hover:border-green-400 transition rounded-xl overflow-hidden h-full">
      <div class="h-48 relative flex items-center justify-center bg-grid bg-no-repeat bg-cover">
        <div class="blur-overlay w-full h-full absolute pointer-events-none" />
        <slot />
      </div>
      <div class="p-4">
        <span class="font-semibold">{{ title.replace(/^\S/, s => s.toUpperCase()) }}</span>
        <p class="text-sm mt-1 text-gray-400">{{ desc }}</p>
      </div>
    </div>
  </a>
</template>

<style scoped>
.bg-grid {
  background: url(/grid.png);
}
</style>
