<script setup>
import { onUnmounted, onMounted } from 'vue'
import CrossIcon from '../icons/CrossIcon.vue'

const emit = defineEmits(['close'])

let onKeyDown = (event) => {
  if (event.key === 'Escape') {
    emit('close')
  }
}

onMounted(() => {
  document.body.style.overflow = 'hidden'
  window.addEventListener('keydown', onKeyDown)
})
onUnmounted(() => {
  document.body.style.overflow = 'initial'
  window.removeEventListener('keydown', onKeyDown)
})
</script>

<template>
  <Teleport to="body">
    <div class="flex w-full h-full fixed top-0 left-0 overflow-auto bg-[rgba(0,0,0,0.3)]" @click.self="emit('close')">
      <div class="relative bg-white min-w-[350px] m-auto text-black rounded-2xl p-10">
        <button class="absolute right-3 top-3">
          <CrossIcon class="w-6 h-6" @click="emit('close')" />
        </button>
        <slot></slot>
      </div>
    </div>
  </Teleport>
</template>
