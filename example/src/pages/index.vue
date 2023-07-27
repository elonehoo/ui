<script setup lang="ts">
import { RouterLink } from 'vue-router'

const router = useRouter()

const routes = router.getRoutes()
</script>

<template>
  <div text="center" flex="~ col">
    <RouterLink
      v-for="route in routes"
      :key="route.path"
      m="5"
      :to="route.path"
    >
      {{ route.name }}
    </RouterLink>
  </div>
</template>
