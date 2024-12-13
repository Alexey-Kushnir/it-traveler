<script setup>
import { onMounted, ref } from 'vue'
import { MapboxMap, MapboxMarker } from '@studiometa/vue-mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { mapSettings } from '@/assets/map/settings'
import FavoritePlaces from '@/components/FavoritePlaces/FavoritePlaces.vue'
import MarkerIcon from '@/components/icons/MarkerIcon.vue'
import { getFavoritePlaces } from '@/api/favorite-places'
import { useModal } from '@/composables/useModal'
import CreateNewPlaceModal from '@/components/CreateNewPlaceModal/CreateNewPlaceModal.vue'

const favoritePlaces = ref([])
const activeId = ref(null)
const map = ref(null)
const mapMarkerLngLat = ref(null)
const { isOpen, closeModal, openModal } = useModal()

const changeActiveId = (id) => {
  activeId.value = id
}

const changePlace = (id) => {
  const { lngLat } = favoritePlaces.value.find((place) => place.id === id)
  changeActiveId(id)
  map.value.flyTo({ center: lngLat })
}

const handleMapClick = ({ lngLat }) => {
  mapMarkerLngLat.value = [lngLat.lng, lngLat.lat]
}

onMounted(async () => {
  try {
    const { data } = await getFavoritePlaces()
    favoritePlaces.value = data
  } catch (err) {
    console.error('Error fetching favorite places:', err)
  }
})
</script>

<template>
  <main class="flex h-screen">
    <div class="bg-white h-full w-[400px] shrink-0 overflow-auto pb-10">
      <FavoritePlaces
        :items="favoritePlaces"
        :active-id="activeId"
        @place-clicked="changePlace"
        @create="openModal"
      />
      <CreateNewPlaceModal :is-open="isOpen" @close="closeModal" />
    </div>
    <div class="w-full h-full flex items-center justify-center text-6xl">
      <MapboxMap
        class="w-full h-full"
        :center="[30.523333, 50.450001]"
        :zoom="10"
        :access-token="mapSettings.apiToken"
        :map-style="mapSettings.style"
        @mb-click="handleMapClick"
        @mb-created="(mapInstance) => (map = mapInstance)"
      >
        <MapboxMarker v-if="mapMarkerLngLat" :lngLat="mapMarkerLngLat" anchor="bottom">
          <MarkerIcon class="w-9 h-9" />
        </MapboxMarker>

        <MapboxMarker
          v-for="place in favoritePlaces"
          :key="place.id"
          :lngLat="place.lngLat"
          anchor="bottom"
        >
          <button @click="changeActiveId(place.id)">
            <MarkerIcon class="w-9 h-9" />
          </button>
        </MapboxMarker>
      </MapboxMap>
    </div>
  </main>
</template>
