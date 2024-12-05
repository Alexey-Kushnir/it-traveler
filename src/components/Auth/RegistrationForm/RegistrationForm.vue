<script setup>
import { reactive, toRaw } from 'vue'
import IButton from '@/components/IButton/IButton.vue'
import IInput from '@/components/IInput/IInput.vue'

const props = defineProps({
  isLoading: {
    default: false,
    type: Boolean
  }
})
const emit = defineEmits(['submit'])

const userData = reactive({
  name: '',
  email: '',
  password: ''
})
</script>

<template>
  <form @submit.prevent="emit('submit', toRaw(userData))">
    <IInput class="mb-4" label="Повне ім'я" placeholder="Ім'я Прізвище" v-model="userData.name" />
    <IInput
      class="mb-4"
      label="Електронна пошта"
      placeholder="email@gmail.com"
      v-model="userData.email"
    />
    <IInput
      class="mb-4"
      label="Пароль"
      placeholder="*************"
      type="password"
      v-model="userData.password"
    />
    <IButton class="mt-5 w-full" variant="gradient" type="submit" :is-loading="props.isLoading"
      >Створити аккаунт
    </IButton>
  </form>
</template>
