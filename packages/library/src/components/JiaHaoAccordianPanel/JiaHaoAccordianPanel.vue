<script setup lang="ts">
import { inject } from 'vue'

const id = inject('accordianId', '')

if (!id) {
  throw new Error('JiaHaoAccodianPanel must be used inside a JiaHaoAccordian')
}

defineProps<{
  title: string
}>()
</script>

<template>
  <div class="join join-vertical w-full">
    <div class="collapse collapse-arrow join-item border-base-300 border">
      <input type="radio" :name="id" :class="'checked'" />
      <div class="collapse-title text-xl font-medium">{{ title }}</div>
      <div class="collapse-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
