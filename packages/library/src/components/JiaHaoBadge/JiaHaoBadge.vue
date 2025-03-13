<script setup lang="ts">
import type { ColorsBrand, ColorsState, Sizes } from '@/globals'
import { computed } from 'vue'

const props = defineProps<{
  color?: ColorsBrand | ColorsState | 'ghost'
  size?: Sizes
  outline?: boolean
}>()

const colorClass = computed(() => {
  if (!props.color) return ''
  return {
    primary: 'badge-primary',
    secondary: 'badge-secondary',
    neutral: 'badge-neutral',
    accent: 'badge-accent',
    success: 'badge-success',
    warning: 'badge-warning',
    error: 'badge-error',
    info: 'badge-info',
    ghost: 'badge-ghost',
  }[props.color]
})

const outlineClass = computed(() => (props.outline ? 'badge-outline' : ''))
const sizeClass = computed(() => {
  if (!props.size) return ''
  return {
    xs: 'badge-xs',
    sm: 'badge-sm',
    md: 'badge-md',
    lg: 'badge-lg',
  }[props.size]
})

const classes = computed(() => {
  return [colorClass.value, outlineClass.value, sizeClass.value]
})
</script>

<template>
  <div class="badge" :class="classes">
    <slot></slot>
  </div>
</template>
