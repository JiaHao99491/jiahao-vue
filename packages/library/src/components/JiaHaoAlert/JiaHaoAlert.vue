<script setup lang="ts">
import type { States } from '@/globals/states'
import { Icon } from '@iconify/vue'
import { computed, ref } from 'vue'

const props = withDefaults(
  defineProps<{
    type?: States
    dismissible?: boolean
  }>(),
  {
    dismissible: false,
  },
)

const classes = computed(() => {
  if (!props.type) return ''
  const map = {
    info: 'alert-info',
    success: 'alert-success',
    warning: 'alert-warning',
    error: 'alert-error',
  }

  return `alert ${map[props.type]}`
})

const icon = computed(() => {
  if (!props.type) return 'carbon:information'
  return {
    info: 'carbon:information',
    success: 'carbon:checkmark-outline',
    warning: 'carbon:warning',
    error: 'carbon:error',
  }[props.type]
})

const transitionDuration = 500
const transitionCssRule = `all ${transitionDuration}ms`

const emit = defineEmits<{
  dismiss: [payload: void]
}>()

const dismissed = ref(false)
function handleDismiss() {
  dismissed.value = true
  setTimeout(() => {
    emit('dismiss')
  }, transitionDuration)
}
</script>

<template>
  <Transition>
    <div v-show="!dismissed" role="alert" class="alert" :class="classes">
      <Icon :icon="icon" width="1.5rem" />
      <span><slot></slot></span>
      <button
        @click="handleDismiss"
        v-if="dismissible"
        type="button"
        class="text-lg close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </Transition>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: v-bind(transitionCssRule);
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
