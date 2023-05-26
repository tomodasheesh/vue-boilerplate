<script setup lang="ts">
const props = defineProps<{
  cols?: string | number
  xl?: string | number
  lg?: string | number
  md?: string | number
  sm?: string | number
  xs?: string | number
  offset?: string
  self?: 'start' | 'center' | 'baseline' | 'end' | 'stretch'
}>()

const colClass = computed(() => {
  let classOutput: string = 'col'
  if (props.cols) classOutput += ` col-${props.cols}`
  if (props.xl) classOutput += ` col-xl-${props.xl}`
  if (props.lg) classOutput += ` col-lg-${props.lg}`
  if (props.md) classOutput += ` col-md-${props.md}`
  if (props.sm) classOutput += ` col-sm-${props.sm}`
  if (props.xs) classOutput += ` col-xs-${props.xs}`
  if (props.self) classOutput += ` self-${props.self}`
  if (props.offset) classOutput += ` offset-${props.offset}`
  return classOutput
})
</script>

<template>
  <div :class="colClass">
    <slot />
  </div>
</template>
