<script setup lang="ts">
import { computed, inject, ref } from 'vue'

const props = defineProps<{
  name: string
}>()
// eslint-disable-next-line
const registerTab = inject('JiaHaoVueTabsComponentRegisterTab', (name: string) => {})
registerTab(props.name)

const tabsData = inject(
  'JiaHaoVueTabsData',
  ref({
    activeTab: '',
  }),
)

const isActive = computed(() => tabsData.value.activeTab === props.name)
</script>

<template>
  <div
    role="tabpanel"
    class="tabpanel"
    :class="{
      hidden: !isActive,
    }"
  >
    <slot></slot>
  </div>
</template>
