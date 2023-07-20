<script setup lang="ts">
</script>

<template>
  <input type="checkbox" class="checkbox" />
</template>

<style scoped>
.checkbox {
    flex-shrink: 0;
    --chkbg: 220 13% 69%;
    --chkfg: 212 18% 14%;
    height: 1.5rem;
    width: 1.5rem;
    cursor: pointer;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-width: 1px;
    border-color: rgb(166, 173, 186);
    --tw-border-opacity: .2;
    border-radius: 0.5rem
}
.checkbox:focus-visible {
    outline-style: solid;
    outline-width: 2px;
    outline-offset: 2px;
    outline-color: hsl(var(--bc)/1)
}

.checkbox:checked {
    --tw-bg-opacity: 1;
    background-color: rgb(166, 173, 186);
    background-repeat: no-repeat;
    animation: checkmark 0.2s ease-in-out;
    --chkbg: 220 13% 69%;
    --chkfg: 212 18% 14%;
    background-image: linear-gradient(-45deg, rgba(0, 0, 0, 0) 65%, rgb(166, 173, 186) 65.99%), linear-gradient(45deg, rgba(0, 0, 0, 0) 75%, rgb(166, 173, 186) 75.99%), linear-gradient(-45deg, rgb(166, 173, 186) 40%, rgba(0, 0, 0, 0) 40.99%), linear-gradient(45deg, rgb(166, 173, 186) 30%, rgb(29, 35, 42) 30.99%, rgb(29, 35, 42) 40%, rgba(0, 0, 0, 0) 40.99%), linear-gradient(-45deg, rgb(29, 35, 42) 50%, rgb(166, 173, 186) 50.99%)
}

.checkbox:indeterminate {
    --tw-bg-opacity: 1;
    --chkbg: 220 13% 69%;
    --chkfg: 212 18% 14%;
    background-color: hsl(var(--bc)/var(--tw-bg-opacity));
    background-repeat: no-repeat;
    animation: checkmark 0.2s ease-in-out;
    background-image: linear-gradient(90deg,transparent 80%,hsl(var(--chkbg)) 80%),linear-gradient(-90deg,transparent 80%,hsl(var(--chkbg)) 80%),linear-gradient(0deg,hsl(var(--chkbg)) 43%,hsl(var(--chkfg)) 43%,hsl(var(--chkfg)) 57%,hsl(var(--chkbg)) 57%)
}
</style>
