<script setup>
import { reactive, toRaw } from 'vue'
import IInput from '@/components/IInput/IInput.vue'
import IButton from '@/components/IButton/IButton.vue'

const props = defineProps({
  isLoading: { default: false, type: Boolean }
})

const emit = defineEmits(['submit'])

const userData = reactive({
  email: '',
  password: ''
})
</script>

<template>
  <form @submit.prevent="emit('submit', toRaw(userData))">
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
    <IButton class="mt-5 w-full" variant="gradient" type="submit" :is-loading="props.isLoading">
      Увійти
    </IButton>
  </form>
</template>
