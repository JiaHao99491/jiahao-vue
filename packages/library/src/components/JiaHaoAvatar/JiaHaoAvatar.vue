<script setup lang="ts">
import { vMask } from '@/directives/vMask/vMask'
import type { Masks, Sizes } from '@/globals'
import { computed, inject, ref } from 'vue'

const props = withDefaults(
  defineProps<{
    mask?: Masks
    src?: string
    placeholder?: string
    size?: Sizes
  }>(),
  {
    mask: 'circle',
    size: 'md',
  },
)

const defaultSize = computed(() => props.size)
const _size = inject('JiaHaoAvatarSize', defaultSize)
const sizeClasses = computed(() => {
  return {
    xs: 'w-8 h-8',
    sm: 'w-12 h-12',
    md: 'w-16 h-16',
    lg: 'w-24 h-24',
  }[_size.value]
})

const textSizeClasses = computed(() => {
  return {
    xs: 'text-xs',
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-3xl',
  }[_size.value]
})

const placeholderClass = computed(() => {
  return props.placeholder ? 'placeholder' : ''
})

const classes = computed(() => {
  return [sizeClasses.value, placeholderClass.value]
})

const defaultMask = computed(() => props.mask)
const _mask = inject('JiaHaoAvatarMask', defaultMask)

const errorLoadingImage = ref(false)
</script>

<template>
  <div class="avatar" :class="classes" v-mask="_mask">
    <div
      v-if="(!src && placeholder) || (errorLoadingImage && placeholder)"
      class="text-center"
      :class="textSizeClasses"
    >
      {{ placeholder }}
    </div>
    <img v-else :src="src" @error="errorLoadingImage = true" />
  </div>
</template>
