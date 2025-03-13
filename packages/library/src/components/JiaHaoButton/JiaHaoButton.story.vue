<script setup lang="ts">
import { reactive } from 'vue'
import JiaHaoButton from './JiaHaoButton.vue'
import { colorsBrand, colorsState, type Sizes } from '@/globals'
import { sizes } from '@/globals'

const state = reactive({
  content: 'Click Me',
  disabled: false,
  active: false,
  circle: false,
  square: false,
  wide: false,
  loading: false,
  outline: false,
  glass: false,
  size: 'md' as Sizes, // todo
})

const colors = [...colorsBrand, ...colorsState, 'ghost', 'link'] as const
</script>
<template>
  <Story :layout="{ type: 'grid', width: '50%' }">
    <Variant title="No Color">
      <JiaHaoButton v-bind="state">{{ state.content }}</JiaHaoButton>
    </Variant>
    <Variant v-for="color in colors" :key="color" :title="color">
      <JiaHaoButton :color="color" v-bind="state">{{ state.content }}</JiaHaoButton>
    </Variant>

    <template #controls>
      <HstText v-model="state.content" title="Content" />
      <HstCheckbox v-model="state.disabled" title="Disabled" />
      <HstCheckbox v-model="state.active" title="Active" />
      <HstCheckbox v-model="state.circle" title="Circle" />
      <HstCheckbox v-model="state.square" title="Square" />
      <HstCheckbox v-model="state.wide" title="Wide" />
      <HstCheckbox v-model="state.loading" title="Loading" />
      <HstCheckbox v-model="state.outline" title="Outline" />
      <HstCheckbox v-model="state.glass" title="Glass" />
      <HstSelect v-model="state.size" :options="sizes" title="Size" />
    </template>
  </Story>
</template>
