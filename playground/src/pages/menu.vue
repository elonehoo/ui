<script setup lang="ts">
const show = ref(false)
</script>

<template>
  <!-- <div class="text-center h-300px">
    <div class="relative inline-block text-left">
      <div>
        <button @click="show=!show" btn="green">
          <span>hello</span>
          <div v-if="!show" class="i-carbon-chevron-down" />
          <div v-else class="i-carbon-chevron-up" />
        </button>
      </div>
      <div v-if="show" class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 dark:divide-gray-700 rounded-md bg-white dark:bg-dark-500 shadow-lg ring-1 ring-black dark:bg-white dark:ring-gray-700 ring-opacity-5 focus:outline-none animate-[fade-in_0.35s]">
        <div v-for="i in 3" :key="i" class="px-1 py-1">
          <button v-for="j in 2" class="text-gray-900 dark:text-white disabled:opacity-50 disabled:hover:bg-white disabled:cursor-no-drop group hover:bg-gray-300 dark:hover:bg-gray-600 flex w-full items-center rounded-md px-2 py-2 text-sm">
            <div class="i-carbon-home mr-2 h-5 w-5"></div>
            {{ i }} {{ j }}
          </button>
        </div>
      </div>
    </div>
  </div> -->

  <div class="dropdown-box">
    <div class="dropdown-relative">
      <div class="dropdown-label">
        <button @click="show=!show" class="btn-green">
          <span class="block truncate">Wade Cooper</span>
          <div class="i-carbon-chevron-down flex-shrink-0 h-5 w-5" />
        </button>
      </div>
      <div v-if="show" class="dropdown-content">
        <ul class="dropdown-items">
          <li v-for="i in 10" :key="i" class="dropdown-item">
            <div class="flex items-center gap-2 min-w-0">
              <span class="truncate">Wade Cooper</span>
              <span class="absolute inset-y-0 end-0 flex items-center pe-2">
                <span class="i-carbon-checkmark h-4 w-4 text-gray-900 dark:text-white flex-shrink-0" />
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>

</template>
