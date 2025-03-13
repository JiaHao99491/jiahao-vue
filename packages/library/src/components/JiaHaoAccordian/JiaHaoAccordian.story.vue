<script setup lang="ts">
import JiaHaoAccordian from './JiaHaoAccordian.vue'
import JiaHaoAccordianPanel from '../JiaHaoAccordianPanel/JiaHaoAccordianPanel.vue'
</script>
<template>
  <Story :layout="{ type: 'grid', width: '100%' }">
    <Variant title="Variant Title">
      <JiaHaoAccordian>
        <JiaHaoAccordianPanel title="Panel 1">
          <p>Panel 1 Content</p>
        </JiaHaoAccordianPanel>
        <JiaHaoAccordianPanel title="Panel 2">
          <p>Panel 2 Content</p>
        </JiaHaoAccordianPanel>
      </JiaHaoAccordian>
    </Variant>

    <Variant title="Variant Title">
      <JiaHaoAccordian>
        <JiaHaoAccordianPanel title="Panel 1">
          <p>Panel 1 Content</p>
        </JiaHaoAccordianPanel>
        <JiaHaoAccordianPanel title="Panel 2">
          <p>Panel 2 Content</p>
        </JiaHaoAccordianPanel>
      </JiaHaoAccordian>
    </Variant>

    <template #controls></template>
  </Story>
</template>
