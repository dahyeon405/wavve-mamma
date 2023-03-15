<script setup lang="ts">
import CATEGORY from '@/consts/CATEGORY'
import { filterStore } from '@/store/filterStore'

const emit = defineEmits(['categoryClicked'])

const handleCategoryCick = (event: MouseEvent) => {
  if (!event.target) return
  const target = event.target as HTMLElement

  const selected = target.id
  emit('categoryClicked', selected)
}
</script>

<template>
  <div class="flex justify-center my-10">
    <div class="flex flex-wrap gap-x-3 w-5/6 gap-y-3 justify-center">
      <div
        v-for="(category, index) in CATEGORY"
        :key="index"
        :id="category"
        class="flex justify-center items-center w-24 h-24 rounded-xl text-lg font-bold text-white cursor-pointer"
        :class="filterStore.data.has(category) ? 'bg-[#204FF5]' : 'bg-gray-600'"
        @click="handleCategoryCick"
      >
        {{ category }}
      </div>
    </div>
  </div>
</template>

<style></style>
