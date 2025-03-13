<script setup lang="ts">
import { computed } from 'vue'
import type { ColorsBrand, ColorsState, Sizes } from '@/globals'
import JiaHaoLoading from '../JiaHaoLoading/JiaHaoLoading.vue'

const props = withDefaults(
  defineProps<{
    active?: boolean
    circle?: boolean
    square?: boolean
    wide?: boolean
    loading?: boolean
    outline?: boolean
    glass?: boolean
    color?: ColorsBrand | ColorsState | 'ghost' | 'link'
    size?: Sizes
  }>(),
  {
    wide: false,
    outline: false,
  },
)

const colorClasses = computed(() => {
  if (!props.color) return ''
  return {
    neutral: 'btn-neutral',
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    accent: 'btn-accent',
    error: 'btn-error',
    warning: 'btn-warning',
    success: 'btn-success',
    info: 'btn-info',
    ghost: 'btn-ghost',
    link: 'btn-link',
  }[props.color]
})

const sizeClasses = computed(() => {
  if (!props.size) return ''
  return {
    xs: 'btn-xs',
    sm: 'btn-sm',
    md: 'btn-md',
    lg: 'btn-lg',
  }[props.size]
})

const otherClasses = computed(() => {
  return {
    'btn-active': props.active,
    'btn-circle': props.circle,
    'btn-square': props.square,
    'btn-wide': props.wide,
    'btn-outline': props.outline,
    glass: props.glass,
  }
})
</script>

<template>
  <button class="btn" :class="[colorClasses, sizeClasses, otherClasses]">
    <JiaHaoLoading v-if="loading" :size="size" />
    <slot></slot>
  </button>
</template>
