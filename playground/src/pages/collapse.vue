<script setup lang="ts">

</script>

<template>
  <div tabindex="0" class="collapse">
    <div class="collapse-title text-xl font-medium">
      Focus me to see content
    </div>
    <div class="collapse-content">
      <p>tabindex="0" attribute is necessary to make the div focusable</p>
    </div>
  </div>

  <div class="collapse mt-5">
    <input type="checkbox" />
    <div class="collapse-title text-xl font-medium">
      Click me to show/hide content
    </div>
    <div class="collapse-content">
      <p>hello</p>
    </div>
  </div>

  <div tabindex="0" class="collapse border border-light-base-300 dark:border-dark-base-300 bg-light-base-100 dark:bg-dark-base-100 rounded-box mt-5">
    <div class="collapse-title text-xl font-medium">
      Focus me to see content
    </div>
    <div class="collapse-content">
      <p>tabindex="0" attribute is necessary to make the div focusable</p>
    </div>
  </div>

  <div tabindex="0" class="collapse collapse-arrow border border-light-base-300 dark:border-dark-base-300 bg-light-base-100 dark:bg-dark-base-100 rounded-box mt-5">
    <div class="collapse-title text-xl font-medium">
      Focus me to see content
    </div>
    <div class="collapse-content">
      <p>tabindex="0" attribute is necessary to make the div focusable</p>
    </div>
  </div>

  <div tabindex="0" class="collapse collapse-plus border border-light-base-300 dark:border-dark-base-300 bg-light-base-100 dark:bg-dark-base-100 rounded-box mt-5">
    <div class="collapse-title text-xl font-medium">
      Focus me to see content
    </div>
    <div class="collapse-content">
      <p>tabindex="0" attribute is necessary to make the div focusable</p>
    </div>
  </div>

  <div tabindex="0" class="collapse collapse-open border border-light-base-300 dark:border-dark-base-300 bg-light-base-100 dark:bg-dark-base-100 rounded-box mt-5">
    <div class="collapse-title text-xl font-medium">
      I have collapse-open class
    </div>
    <div class="collapse-content">
      <p>tabindex="0" attribute is necessary to make the div focusable</p>
    </div>
  </div>

  <div tabindex="0" class="collapse collapse-close border border-light-base-300 dark:border-dark-base-300 bg-light-base-100 dark:bg-dark-base-100 rounded-box mt-5">
    <div class="collapse-title text-xl font-medium">
      I have collapse-close class
    </div>
    <div class="collapse-content">
      <p>tabindex="0" attribute is necessary to make the div focusable</p>
    </div>
  </div>

  <div tabindex="0" class="collapse group  mt-5">
    <div class="collapse-title bg-light-primary dark:bg-dark-primary text-light-primary-content dark:text-dark-primary-content group-focus:bg-light-secondary dark:group-focus:bg-dark-secondary group-focus:text-light-secondary-content dark:group-focus:text-dark-secondary-content ">
      Focus me to see content
    </div>
    <div class="collapse-content bg-light-primary dark:bg-dark-primary text-light-primary-content dark:text-dark-primary-content group-focus:bg-light-secondary dark:group-focus:bg-dark-secondary group-focus:text-light-secondary-content dark:group-focus:text-dark-secondary-content ">
      <p>tabindex="0" attribute is necessary to make the div focusable</p>
    </div>
  </div>

  <div class="collapse mt-5">
    <input type="checkbox" class="peer" />
    <div class="collapse-title bg-light-primary dark:bg-dark-primary text-light-primary-content dark:text-dark-primary-content peer-checked:bg-light-secondary dark:peer-checked:bg-dark-secondary peer-checked:text-light-secondary-content dark:peer-checked:text-dark-secondary-content">
      Click me to show/hide content
    </div>
    <div class="collapse-content bg-light-primary dark:bg-dark-primary text-light-primary-content dark:text-dark-primary-content peer-checked:bg-light-secondary dark:peer-checked:bg-dark-secondary peer-checked:text-light-secondary-content dark:peer-checked:text-dark-secondary-content">
      <p>hello</p>
    </div>
  </div>
</template>
