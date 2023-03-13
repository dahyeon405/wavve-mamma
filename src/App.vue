<script setup lang="ts">
import { ref } from 'vue'
import { RouterView } from 'vue-router'

const isLoading = ref(true)
let data = {}

const fetchData = async () => {
  const response = await fetch('http://localhost:3000/restaurants')
  const restaurantData = await response.json()

  data = restaurantData
  isLoading.value = false
  return data
}

fetchData()
</script>

<template>
  <div class="main-wrapper">
    <div v-if="isLoading">로딩 중...</div>
    <RouterView v-else :data="data" />
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
