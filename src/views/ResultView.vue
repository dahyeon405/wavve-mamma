<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ref, computed, watch } from 'vue'
import { restaurantStore } from '@/store/restaurantStore'

const route = useRoute()

const emit = defineEmits(['spinClicked'])

const id = ref(Number(route.params.id))

watch(
  () => route.params.id,
  () => {
    id.value = Number(route.params.id)
  }
)

const restaurantInfo = computed(() => {
  return restaurantStore.data.filter((el) => el.id === id.value)[0]
})
</script>

<template>
  <main class="flex flex-col items-center w-full">
    <div class="w-5/6 text-left mt-[200px]">
      <div class="h-32 flex items-center text-[36px] font-bold">
        {{ restaurantInfo.name }}
      </div>
      <div class="h-[300px]">
        <div class="text-lg font-bold">{{ restaurantInfo.category }}</div>
        <div class="my-[10px]">{{ restaurantInfo.review }}</div>

        <div class="border-t-2 py-[15px]">
          <div class="h-8"><span class="badge">주요 메뉴</span>{{ restaurantInfo.mainMenu }}</div>

          <div class="h-8"><span class="badge">가격</span>{{ restaurantInfo.price * 1000 }}원</div>
          <div class="h-8"><span class="badge">위치</span>{{ restaurantInfo.location }}</div>
        </div>
        <div class="font-bold">📍 네이버 지도에서 열기</div>
      </div>
    </div>

    <button class="btn-primary" @click="() => emit('spinClicked')">다시 돌리기</button>
  </main>
</template>

<style></style>
