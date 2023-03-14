<script setup lang="ts">
import { computed, ref } from 'vue'
import { RouterView, useRouter } from 'vue-router'
import type { IRestaurantData } from '@/types/interface'
import { randomPicker } from './utils/randomPicker'

const isLoading = ref(true)
let data: IRestaurantData[] = []
const router = useRouter()

const fetchData = async () => {
  const response = await fetch('http://localhost:3000/restaurants')
  const restaurantData = await response.json()

  data = restaurantData
  isLoading.value = false
}

fetchData()

const moveToNewResultPage = () => {
  const picked = randomPicker(data)
  router.push(`/result/${picked.id}`)
}
</script>

<template>
  <div class="main-wrapper">
    <div v-if="isLoading">로딩 중...</div>
    <RouterView v-else :data="data" @spinClicked="moveToNewResultPage" />
  </div>
</template>

<style scoped>
.main-wrapper {
  width: 400px;
  margin: 0 auto;
  border: 1px solid grey;
  height: 100%;
  padding: 10px;
}
</style>
