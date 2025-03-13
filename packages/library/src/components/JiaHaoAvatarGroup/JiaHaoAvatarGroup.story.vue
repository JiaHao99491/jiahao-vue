<script setup lang="ts">
import { reactive } from 'vue'
import JiaHaoAvatarGroup from './JiaHaoAvatarGroup.vue'
import JiaHaoAvatar from '../JiaHaoAvatar/JiaHaoAvatar.vue'
import { sizes, masks, Masks, Sizes } from '../../globals'

const state = reactive({
  size: 'sm' as Sizes,
  mask: 'circle' as Masks,
})
</script>
<template>
  <Story :layout="{ type: 'grid', width: '100%' }">
    <Variant title="Daisy Avatar Group">
      <JiaHaoAvatarGroup :mask="state.mask" :size="state.size">
        <JiaHaoAvatar src="https://i.pravatar.cc/300?u=1"></JiaHaoAvatar>
        <JiaHaoAvatar placeholder="DK" class="bg-red-600"></JiaHaoAvatar>
        <JiaHaoAvatar src="https://i.pravatar.cc/300?u=3"></JiaHaoAvatar>
        <JiaHaoAvatar src="https://i.pravatar.cc/300?u=4"></JiaHaoAvatar>
        <JiaHaoAvatar placeholder="99+" class="bg-gray-500"></JiaHaoAvatar>
      </JiaHaoAvatarGroup>
    </Variant>

    <template #controls>
      <HstSelect v-model="state.size" :options="sizes" title="Size"></HstSelect>
      <HstSelect v-model="state.mask" :options="masks" title="Mask"></HstSelect>
    </template>
  </Story>
</template>
