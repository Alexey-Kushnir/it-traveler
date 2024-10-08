<script setup>
import { ref } from 'vue'
import UploadIcon from './UploadIcon.vue'

const emit = defineEmits(['uploaded'])
const errorMEssage = ref('')

const handleUploadImg = (e) => {
  const file = e.target.files[0]
  if (file.size > 3 * 1024 * 1024) {
    errorMEssage.value = 'Завеликий файл'
  }
  const fileReader = new FileReader()
  fileReader.readAsDataURL(file)
  fileReader.onload = () => {
    errorMEssage.value = ''
    emit('uploaded', fileReader.result)
  }
}
</script>

<template>
  <div>
    <label class="cursor-pointer hover:text-primary">
      <input type="file" accept="image/*" class="hidden" @change="handleUploadImg" />
      <span class="flex gap-1 items-center">
        <UploadIcon />
        <span class="underline text-xs"> <slot></slot> </span>
      </span>
    </label>
    <div v-if="errorMEssage" class="text-red-500">{{ errorMEssage }}</div>
  </div>
</template>
