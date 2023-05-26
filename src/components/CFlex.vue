<script setup lang="ts">
const props = defineProps<{
  content?: 'start' | 'center' | 'end' | 'stretch' | 'around' | 'between'
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'
  alignItems?: 'start' | 'center' | 'end' | 'stretch' | 'baseline'
  wrap?: 'wrap' | 'reverse-wrap' | 'no-wrap'
  centered?: boolean
  reverse?: boolean
  column?: boolean
  gutter?: string
  height?: string
}>()

const rowClass = computed(() => {
  let classOutput: string = props.column ? 'column' : 'row'
  if (props.alignItems) classOutput += ` items-${props.alignItems}`
  if (props.gutter) classOutput += ` q-col-gutter-${props.gutter}`
  if (props.justify) classOutput += ` justify-${props.justify}`
  if (props.content) classOutput += ` content-${props.content}`
  if (props.centered) classOutput += ' flex-center'
  if (props.wrap) classOutput += ` ${props.wrap}`
  if (props.reverse) classOutput += ' reverse'
  return classOutput
})
</script>

<template>
  <div
    :class="rowClass"
    :style="{ minHeight: height }"
  >
    <slot />
  </div>
</template>
