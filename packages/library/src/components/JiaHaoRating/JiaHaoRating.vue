<script setup lang="ts">
import { vMask } from '@/directives/vMask/vMask'
import type { Masks, Sizes } from '@/globals'
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    size: Sizes
    mask?: Masks
    outOf?: number
    allowHalf?: boolean
  }>(),
  {
    mask: 'star',
    outOf: 5,
    size: 'md',
  },
)

defineOptions({
  inheritAttrs: false,
})

const rating = defineModel<number>({ default: 0 })

const maskMod = (n: number) => {
  if (!props.allowHalf) return ''
  return n % 2 ? 'half-1' : 'half-2'
}

const _outof = computed(() => {
  if (props.allowHalf) {
    return props.outOf * 2
  }
  return props.outOf
})

const sizeClasses = computed(() => {
  return {
    xs: 'rating-xs',
    sm: 'rating-sm',
    md: 'rating-md',
    lg: 'rating-lg',
  }[props.size]
})

const classes = computed(() => {
  return [
    {
      'rating-half': props.allowHalf,
    },
    sizeClasses.value,
  ]
})
</script>

<template>
  <div class="flex rating" :class="classes">
    <input v-if="rating === 0" type="radio" class="hidden" checked />
    <input
      v-for="n in _outof"
      :key="n"
      v-mask:[maskMod(n)]="mask"
      type="radio"
      v-bind="$attrs"
      :value="allowHalf ? n / 2 : n"
      v-model="rating"
    />
  </div>
</template>
