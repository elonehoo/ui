<script setup lang="ts">
const a = ref(0)
</script>

<template>
  <div class="h-[230px] border flex items-center justify-center overflow-hidden relative select-none rounded-xl border-solid border-[#282828] [background:#1c1c1c] box-border max-w-[720px]">
    <div class="w-full h-full flex items-center justify-center cursor-pointer touch-none box-border">
      <button @click="a=0" class="h-8 text-sm relative cursor-pointer whitespace-nowrap [transition:color_150ms_ease_0s] text-[#ededed] px-3 py-0 rounded-full box-border p-0 border-0 m-0! [background:transparent]">
        All Posts
        <div v-if="a === 0" style="width: 76.7734px;" class="origin-[50%_50%_0px] [transform:none] absolute bg-[white] h-8 mix-blend-exclusion z-[3] rounded-full left-0 top-0 box-border" />
      </button>
      <button @click="a=1" class="h-8 text-sm relative cursor-pointer whitespace-nowrap [transition:color_150ms_ease_0s] text-[#ededed] px-3 py-0 rounded-full box-border p-0 border-0 m-0! [background:transparent]">
        Engineering
        <div v-if="a === 1" style="width: 98.3438px;" class="origin-[50%_50%_0px] [transform:none] absolute bg-[white] h-8 mix-blend-exclusion z-[3] rounded-full left-0 top-0 box-border" />
      </button>
      <button @click="a=2" class="h-8 text-sm relative cursor-pointer whitespace-nowrap [transition:color_150ms_ease_0s] text-[#ededed] px-3 py-0 rounded-full box-border p-0 border-0 m-0! [background:transparent]">
        Community
        <div v-if="a === 2" style="width: 95.9609px;" class="origin-[50%_50%_0px] [transform:none] absolute bg-[white] h-8 mix-blend-exclusion z-[3] rounded-full left-0 top-0 box-border" />
      </button>
      <button @click="a=3" class="h-8 text-sm relative cursor-pointer whitespace-nowrap [transition:color_150ms_ease_0s] text-[#ededed] px-3 py-0 rounded-full box-border p-0 border-0 m-0! [background:transparent]">
        Press
        <div v-if="a === 3" style="width: 58.6953px;" class="origin-[50%_50%_0px] [transform:none] absolute bg-[white] h-8 mix-blend-exclusion z-[3] rounded-full left-0 top-0 box-border" />
      </button>
      <button @click="a=4" class="h-8 text-sm relative cursor-pointer whitespace-nowrap [transition:color_150ms_ease_0s] text-[#ededed] px-3 py-0 rounded-full box-border p-0 border-0 m-0! [background:transparent]">
        Changelog
        <div v-if="a === 4" style="width: 92.1016px;" class="origin-[50%_50%_0px] [transform:none] absolute bg-[white] h-8 mix-blend-exclusion z-[3] rounded-full left-0 top-0 box-border" />
      </button>
    </div>
  </div>
</template>
