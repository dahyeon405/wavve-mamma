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
  <main class="flex flex-col items-center justify-center w-full">
    <div class="text-center text-lg font-bold">결과</div>
    <div class="h-32 flex items-center text-xl font-extrabold">
      {{ restaurantInfo.name }}
    </div>
    <button class="btn-primary" @click="() => emit('spinClicked')">다시 돌리기</button>
  </main>
</template>
