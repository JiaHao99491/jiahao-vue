<script setup lang="ts">
import type { ColorsBrand, ColorsState, Sizes } from '@/globals'
import { computed } from 'vue'
import type { types } from './config'

const props = withDefaults(
  defineProps<{
    type?: (typeof types)[number]
    color?: ColorsBrand | ColorsState
    size?: Sizes
  }>(),
  {
    type: 'spinner',
    size: 'md',
  },
)

const typeClass = computed(() => {
  if (!props.type) return ''
  return {
    spinner: 'loading-spinner',
    dots: 'loading-dots',
    ring: 'loading-ring',
    ball: 'loading-ball',
    bars: 'loading-bars',
    infinity: 'loading-infinity',
  }[props.type]
})

const sizeClass = computed(() => {
  if (!props.size) return ''
  return {
    xs: 'loading-xs',
    sm: 'loading-sm',
    md: 'loading-md',
    lg: 'loading-lg',
  }[props.size]
})

const colorClass = computed(() => {
  if (!props.color) return
  return {
    primary: 'text-primary',
    secondary: 'text-secondary',
    accent: 'text-accent',
    neutral: 'text-neutral',

    success: 'text-success',
    error: 'text-error',
    warning: 'text-warning',
    info: 'text-info',
  }[props.color]
})
</script>

<template>
  <span class="loading" :class="[typeClass, sizeClass, colorClass]"></span>
</template>
