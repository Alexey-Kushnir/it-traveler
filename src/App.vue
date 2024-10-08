<script setup>
// import HomepageView from '@/views/HomepageView.vue'
// import FavoritePlaces from './components/FavoritePlaces/FavoritePlaces.vue'
import { ref } from 'vue'
import LoginForm from './components/Auth/LoginForm/LoginForm.vue'
import RegistrationForm from './components/Auth/RegistrationForm/RegistrationForm.vue'
// import IModal from './components/IModal/IModal.vue'
import CreateNewPlaceModal from './components/CreateNewPlaceModal/CreateNewPlaceModal.vue'

const isOpen = ref(false)
const closeModal = () => {
  isOpen.value = false
}
const openModal = () => {
  isOpen.value = true
}
</script>

<template>
  <!-- <HomepageView />
  <div class="bg-white h-screen w-[400px]">
    <FavoritePlaces />
  </div> -->
  <div class="bg-black h-auto p-5">
    <button @click="openModal">Click me</button>
    <RegistrationForm @submit="console.log" />
    <LoginForm @submit="console.log" />
    <CreateNewPlaceModal :is-open="isOpen" @close="closeModal" @submit="console.log" />
  </div>
</template>
