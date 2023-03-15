<script setup lang="ts">
import { reactive } from 'vue'
import { RouterView, useRouter } from 'vue-router'
import type { Categories } from '@/types'
import { restaurantStore, fetchRestaurantData } from '@/store/restaurantStore'
import NavigationBarVue from './components/NavigationBar.vue'
import { getCandidateRestaurant, getRandomRestaurant } from '@/utils/randomPicker'
import CATEGORY from '@/consts/CATEGORY'

const filter = reactive(new Set<string>(CATEGORY))
const router = useRouter()

fetchRestaurantData()

const moveToNewResultPage = () => {
  const candidates = getCandidateRestaurant(filter, restaurantStore.data)
  const picked = getRandomRestaurant(candidates)
  router.push(`/result/${picked.id}`)
}

const setCategory = (category: Categories) => {
  if (filter.has(category)) filter.delete(category)
  else filter.add(category)
}
</script>

<template>
  <div class="w-[400px] m-auto border h-full flex flex-column">
    <NavigationBarVue></NavigationBarVue>
    <div v-if="restaurantStore.isLoading">로딩 중...</div>
    <RouterView v-else @spinClicked="moveToNewResultPage" @categoryClicked="setCategory" />
  </div>
</template>
