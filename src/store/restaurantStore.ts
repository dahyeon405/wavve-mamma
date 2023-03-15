import { reactive } from 'vue'
import type { RestaurantData } from '@/types'

export const restaurantStore = reactive<{
  data: RestaurantData[]
  isLoading: boolean
}>({
  data: [],
  isLoading: true
})

export const fetchRestaurantData = async () => {
  const response = await fetch('http://localhost:3000/restaurants')
  const restaurantData = await response.json()

  restaurantStore.data = restaurantData
  restaurantStore.isLoading = false
}
