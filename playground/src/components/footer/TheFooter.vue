<script setup lang="ts" name="TheFooter">
const router = useRouter()
</script>

<template>
  <div text="center">
    <nav text="xl center" mt-6 inline-flex gap-2>
      <button icon-btn @click="router.push('/')">
        <div i-carbon-home />
      </button>

      <a
        icon-btn i-carbon-logo-github
        rel="noreferrer"
        href="https://github.com/elonehoo/ui"
        target="_blank"
        title="GitHub"
      />

      <button icon-btn @click="toggleDark()">
        <div dark:i-carbon-moon i-carbon-sun />
      </button>
    </nav>
  </div>
</template>
