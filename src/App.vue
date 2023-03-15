<script setup lang="ts">
import { ref, reactive } from 'vue'
import { RouterView, useRouter } from 'vue-router'
import type { Categories, RestaurantData } from '@/types'
import NavigationBarVue from './components/NavigationBar.vue'
import { getCandidateRestaurant, getRandomRestaurant } from '@/utils/randomPicker'
import CATEGORY from '@/consts/CATEGORY'

const isLoading = ref(true)
let data: RestaurantData[] = []
const filter = reactive(new Set<string>(CATEGORY))
const router = useRouter()

const fetchData = async () => {
  const response = await fetch('http://localhost:3000/restaurants')
  const restaurantData = await response.json()

  data = restaurantData
  isLoading.value = false
}

fetchData()

const moveToNewResultPage = () => {
  const candidates = getCandidateRestaurant(filter, data)
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
    <div v-if="isLoading">로딩 중...</div>
    <RouterView
      v-else
      :data="data"
      @spinClicked="moveToNewResultPage"
      @categoryClicked="setCategory"
    />
  </div>
</template>
