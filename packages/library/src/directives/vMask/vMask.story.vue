<script setup lang="ts">
import { masks } from '../../globals'
import { vMask } from './vMask'
</script>
<template>
  <Story :layout="{ type: 'grid', width: '300px' }">
    <Variant v-for="mask in masks" :key="mask" :title="mask">
      <img v-mask="mask" :style="{ width: '300px' }" src="https://picsum.photos/300/300" />
    </Variant>
    <template #controls></template>
  </Story>
</template>
