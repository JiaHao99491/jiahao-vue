<script setup lang="ts">
import JiaHaoBrowserMockup from './JiaHaoBrowserMockup.vue'
</script>
<template>
  <Story :layout="{ type: 'grid', width: '100%' }">
    <Variant title="Variant Title">
      <JiaHaoBrowserMockup url="https://xxx.com"> Hello! </JiaHaoBrowserMockup>
    </Variant>

    <template #controls></template>
  </Story>
</template>
