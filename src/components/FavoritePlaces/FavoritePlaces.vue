<script setup>
import FavoritePlace from '../FavoritePlace/FavoritePlace.vue'
import IButton from '../IButton/IButton.vue'

const props = defineProps({
  items: {
    required: true,
    type: Array
  },
  activeId: {
    required: true,
    type: [Number, null]
  }
})

const emit = defineEmits(['place-clicked', 'create'])
</script>

<template>
  <div class="px-6">
    <div class="text-gray mb-4">Додані маркери</div>
    <slot name="label"></slot>
    <slot name="list">
      <div v-if="items.length === 0" class="text-black">Список порожній</div>
      <FavoritePlace
        v-for="place in props.items"
        :key="place.id"
        :title="place.title"
        :description="place.description"
        :is-active="place.id === props.activeId"
        :img="place.img"
        @click="emit('place-clicked', place.id)"
      />
    </slot>
    <slot></slot>
    <IButton class="w-full mt-10" variant="gradient" @click="emit('create')">Додати маркер</IButton>
  </div>
</template>
