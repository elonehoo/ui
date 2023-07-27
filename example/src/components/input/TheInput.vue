<script setup lang="ts" name="TheInput">
import type { Input } from '~/components/input/prop'

const { modelValue } = defineProps<Input>()
const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <input
    id="input"
    :value="modelValue"
    type="text"
    v-bind="$attrs"
    p="x-4 y-2"
    w="250px"
    text="center"
    bg="transparent"
    border="~ rounded gray-200 dark:gray-700"
    outline="none active:none"
    @input="emit('update:modelValue', $event.target.value)"
  >
</template>
