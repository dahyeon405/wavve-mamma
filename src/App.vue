<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router'
import { restaurantStore, fetchRestaurantData } from '@/store/restaurantStore'
import { filterStore } from './store/filterStore'
import NavigationBarVue from './components/NavigationBar.vue'
import { getCandidateRestaurant, getRandomRestaurant } from '@/utils/randomPicker'
import type { Categories } from './types'

const router = useRouter()

fetchRestaurantData()

const moveToNewResultPage = () => {
  const candidates = getCandidateRestaurant(filterStore.data, restaurantStore.data)
  const picked = getRandomRestaurant(candidates)
  router.push(`/result/${picked.id}`)
}

const handleCategoryCick = (category: Categories) => {
  filterStore.changeSeletectedCategories(category)
}
</script>

<template>
  <div class="w-[400px] m-auto border h-full flex flex-column">
    <NavigationBarVue></NavigationBarVue>
    <div v-if="restaurantStore.isLoading">로딩 중...</div>
    <RouterView v-else @spinClicked="moveToNewResultPage" @categoryClicked="handleCategoryCick" />
  </div>
</template>
