<script setup lang="ts">
</script>

<template>
  <button class="btn-green" onclick="modal_1.showModal()">Open</button>
  <dialog id="modal_1" class="modal">
    <form method="dialog" class="w-full h-full">
      <h3 class="text-lg font-medium leading-6 text-gray-900 dark:text-gray-100">Payment successful</h3>
      <div class="mt-2">
        <p class="text-sm text-gray-500"> Your payment has been successfully submitted. We’ve sent you an email with all of the details of your order. </p>
      </div>
      <div class="mt-4">
        <button value="cancel" btn="green">Close</button>
      </div>
    </form>
  </dialog>
</template>
