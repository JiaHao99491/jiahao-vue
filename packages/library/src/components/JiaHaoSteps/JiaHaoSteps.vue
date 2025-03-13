<script setup lang="ts">
import type { ColorsBrand, ColorsState } from '@/globals'
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    steps: string[]
    color?: ColorsBrand | ColorsState
    layout?: 'horizontal' | 'vertical' | 'responsive'
  }>(),
  {
    layout: 'horizontal',
    color: 'primary',
  },
)

const activeStep = defineModel<number>({
  default: 1,
})

const colorClass = computed(() => {
  return {
    primary: 'step-primary',
    secondary: 'step-secondary',
    accent: 'step-accent',
    success: 'step-success',
    error: 'step-error',
    warning: 'step-warning',
    info: 'step-info',
    neutral: 'step-neutral',
  }[props.color]
})

const layoutClass = computed(() => {
  return {
    horizontal: 'steps-horizontal',
    vertical: 'steps-vertical',
    responsive: 'steps-vertical lg:steps-horizontal',
  }[props.layout]
})
</script>

<template>
  <ul class="steps" :class="layoutClass">
    <li
      v-for="(step, index) in steps"
      :key="step"
      class="step"
      :class="index + 1 <= activeStep ? colorClass : ''"
      @click="activeStep = index + 1"
    >
      {{ step }}
    </li>
  </ul>
</template>
