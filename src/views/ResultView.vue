<script setup lang="ts">
import type { IRestaurantData } from '@/types/interface'
import { randomPicker } from '@/utils/randomPicker'
import { useRouter, useRoute } from 'vue-router'
import { ref, computed, watch } from 'vue'

const route = useRoute()
const router = useRouter()

const props = defineProps<{
  data: IRestaurantData[]
}>()

const emit = defineEmits(['spinClicked'])

const id = ref(Number(route.params.id))

watch(
  () => route.params.id,
  () => {
    id.value = Number(route.params.id)
  }
)

const restaurantInfo = computed(() => {
  return props.data.filter((el) => el.id === id.value)[0]
})

const handleGohomeClick = () => {
  router.push(`/`)
}
</script>

<template>
  <main class="flex flex-col items-center">
    <div class="text-center text-lg font-bold">결과</div>
    <div class="h-32 flex items-center text-xl font-extrabold">
      {{ restaurantInfo.name }}
    </div>
    <button class="btn-primary" @click="() => emit('spinClicked')">다시 돌리기</button>
    <button class="btn-primary bg-gray-600 hover:bg-gray-800" @click="handleGohomeClick">
      홈으로 돌아가기
    </button>
  </main>
</template>
