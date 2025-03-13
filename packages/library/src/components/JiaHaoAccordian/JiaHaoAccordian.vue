<script setup lang="ts">
import { nanoid } from 'nanoid'
import { provide } from 'vue'

provide('accordianId', nanoid())
</script>

<template>
  <div class="w-full join join-vertical">
    <slot></slot>
  </div>
</template>
