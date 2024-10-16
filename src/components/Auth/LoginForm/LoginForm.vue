<script setup>
import { reactive, toRaw } from 'vue'
import FormContainer from '../FormContainer.vue'
import IInput from '@/components/IInput/IInput.vue'
import IButton from '@/components/IButton/IButton.vue'

const emit = defineEmits(['submit'])

const userData = reactive({
  email: '',
  password: ''
})
</script>

<template>
  <FormContainer @submit.prevent="emit('submit', toRaw(userData))">
    <IInput
      class="mb-4"
      label="Електронна пошта"
      placeholder="email@email.com"
      v-model="userData.email"
    />
    <IInput
      class="mb-4"
      label="Пароль"
      placeholder="*************"
      type="password"
      v-model="userData.password"
    />
    <IButton class="mt-5 w-full" variant="gradient" type="submit">Увійти</IButton>
  </FormContainer>
</template>
