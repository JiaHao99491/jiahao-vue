<script setup lang="ts">
import { JiaHaoTab } from '../components'
import JiaHaoTabs from './JiaHaoTabs.vue'

const types = ['bordered', 'boxed', 'lifted'] as const
</script>
<template>
  <Story :layout="{ type: 'grid', width: '100%' }">
    <Variant v-for="type in types" :key="type" :title="type">
      <JiaHaoTabs :type="type">
        <JiaHaoTab name="Tab 1">
          Lorem 1 ipsum dolor sit amet, consectetur adipisicing elit. Expedita saepe sapiente fugit
          minus labore quos libero possimus sint molestiae quisquam, optio quam voluptatem veritatis
          a accusantium, cumque error nam quaerat.
        </JiaHaoTab>
        <JiaHaoTab name="Tab 2">
          Lorem 2 ipsum dolor sit amet, consectetur adipisicing elit. Expedita saepe sapiente fugit
          minus labore quos libero possimus sint molestiae quisquam, optio quam voluptatem veritatis
          a accusantium, cumque error nam quaerat.
        </JiaHaoTab>
        <JiaHaoTab name="Tab 3">
          Lorem 3 ipsum dolor sit amet, consectetur adipisicing elit. Expedita saepe sapiente fugit
          minus labore quos libero possimus sint molestiae quisquam, optio quam voluptatem veritatis
          a accusantium, cumque error nam quaerat.
        </JiaHaoTab>
      </JiaHaoTabs>
    </Variant>

    <template #controls></template>
  </Story>
</template>
