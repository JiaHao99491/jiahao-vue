<script setup lang="ts">
import { reactive } from 'vue'
import JiaHaoAlert from './JiaHaoAlert.vue'
import { states } from '@/globals'

const state = reactive({
  dismissable: false,
  longText: false,
})
</script>
<template>
  <Story :layout="{ type: 'grid', width: '100%' }">
    <Variant v-for="type in [...states, undefined]" :key="type" :title="type">
      <JiaHaoAlert
        :type="type"
        :dismissible="state.dismissable"
        @dismiss="() => console.log('closed')"
      >
        <template v-if="state.longText">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam nesciunt dicta provident
          accusantium, fuga nihil possimus impedit corrupti quia exercitationem odit id consectetur
          praesentium debitis! Sint quam aspernatur officiis aliquam. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Sit deleniti sequi, ipsum cumque, expedita reprehenderit
          doloribus dolorum tempore laboriosam dolor sed saepe molestias quidem? Perspiciatis vero
          sed fuga doloremque! Accusamus.
        </template>
        <template v-else> This is an {{ type }} alert </template>
      </JiaHaoAlert>
    </Variant>

    <template #controls>
      <HstCheckbox v-model="state.dismissable" title="Dismissable" />
      <HstCheckbox v-model="state.longText" title="Long Text" />
    </template>
  </Story>
</template>
