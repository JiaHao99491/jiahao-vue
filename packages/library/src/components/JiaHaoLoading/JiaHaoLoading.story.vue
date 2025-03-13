<script setup lang="ts">
import { reactive } from 'vue'
import JiaHaoLoading from './JiaHaoLoading.vue'
import { colorsBrand, colorsState, sizes, type ColorsBrand, type ColorsState } from '@/globals'
import { types } from './config'

const state = reactive({
  color: '' as ColorsBrand | ColorsState,
})
</script>
<template>
  <Story :layout="{ type: 'grid', width: '25%' }">
    <template v-for="type in types" :key="type">
      <template v-for="size in sizes" :key="size">
        <Variant :title="`${type} - ${size}`">
          <JiaHaoLoading :color="state.color" :size="size"></JiaHaoLoading>
        </Variant>
      </template>
    </template>

    <template #controls>
      <HstSelect v-model="state.color" :options="[...colorsBrand, ...colorsState]" title="Color" />
    </template>
  </Story>
</template>
