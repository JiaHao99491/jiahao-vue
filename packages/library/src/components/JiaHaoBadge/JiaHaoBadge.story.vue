<script setup lang="ts">
import { colorsBrand, colorsState, sizes } from '../../globals'
import JiaHaoBadge from './JiaHaoBadge.vue'
</script>
<template>
  <Story :layout="{ type: 'grid', width: '25%' }">
    <Variant v-for="size in sizes" :key="size" :title="size">
      <JiaHaoBadge :size="size">24</JiaHaoBadge>
    </Variant>
    <Variant
      v-for="color in [...colorsBrand, ...colorsState, undefined, 'ghost' as const]"
      :key="color"
      :title="color"
    >
      <JiaHaoBadge :color="color" size="lg">24</JiaHaoBadge>
    </Variant>
    <Variant title="Empty Primary">
      <JiaHaoBadge v-for="size in sizes" :key="size" color="primary" :size="size"></JiaHaoBadge>
    </Variant>

    <Variant title="Empty Secondary">
      <JiaHaoBadge v-for="size in sizes" :key="size" color="secondary" :size="size"></JiaHaoBadge>
    </Variant>

    <Variant
      v-for="color in [...colorsBrand, ...colorsState, undefined, 'ghost' as const]"
      :key="color"
      :title="`Outline ${color}`"
    >
      <JiaHaoBadge :color="color" outline size="lg">24</JiaHaoBadge>
    </Variant>

    <template #controls></template>
  </Story>
</template>
