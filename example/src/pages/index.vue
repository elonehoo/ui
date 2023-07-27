<script setup lang="ts">
import { RouterLink } from 'vue-router';

const router = useRouter()

const routes = router.getRoutes()

</script>

<template>
  <div text="center" flex="~ col" >
    <RouterLink
      m="5"
      v-for="route in routes"
      :to="route.path">
      {{ route.name }}
    </RouterLink>
  </div>
</template>
