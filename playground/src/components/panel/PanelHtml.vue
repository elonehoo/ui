<script lang='ts' setup>
// @ts-expect-error missing types
import { Pane } from 'splitpanes'

defineProps<{ index: number }>()

if (!inputHTML.value)
  inputHTML.value = defaultHTML

const computedInputHTML = computed({
  get: () => unref(options.value.transform ? transformedHTML : inputHTML),
  set: (value) => {
    inputHTML.value = value
  },
})
</script>

<template>
  <Pane :min-size="titleHeightPercent" :size="panelSizes[index]" flex flex-col>
    <div class="flex flex-wrap bg-$cm-background">
      <!--  <HeaderBar /> -->
      <TitleBar
        title="HTML" w-full relative
        @title-click="togglePanel(index)"
      >
        <template #before>
          <div
            class="flex-shrink-0 i-ri-arrow-right-s-line mr-1 transition-transform transform"
            :class="isCollapsed(index) ? '' : 'rotate-90'"
          />
        </template>
        <div
          flex justify-end items-center w-full gap2
          transition duration-400
          :class="isCollapsed(index) ? 'op0' : ''"
          un-children="inline-flex items-center cursor-pointer gap-1"
        >
          <label>
            <input class="checkbox-gray checkbox-xs" v-model="options.transform" type="checkbox">
            <span text-sm>Transform</span>
          </label>
          <div w-1px h-28px my--1 bg-gray:20 />
          <button
            i-ri-mist-line icon-btn
            title="Format"
            @click="formatHTML()"
          />
        </div>
      </TitleBar>
    </div>
    <CodeMirror
      v-model="computedInputHTML"
      flex-auto
      mode="html"
      class="scrolls border-(l gray-400/20)"
      :matched="output?.matched || new Set()"
      :annotations="annotations"
      :get-hint="getHint"
      :read-only="options.transform"
    />
  </Pane>
</template>
