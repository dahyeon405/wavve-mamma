<script setup lang="ts">
import '@/components/Home/SpinButton.vue'
import SpinButtonVue from '@/components/Home/SpinButton.vue'
import type { IRestaurantData } from '@/types/interface'
import { useRouter } from 'vue-router'
import CATEGORY from '@/types/const'

const router = useRouter()
const selectedCategories = [...CATEGORY]
const emit = defineEmits(['spinClicked'])

const props = defineProps<{
  data: IRestaurantData[]
}>()
</script>

<template>
  <main class="main-home">
    <div class="text-lg text-center font-bold my-10">
      뭐 먹을지 고민될 땐, <br />
      Mamma
    </div>
    <SpinButtonVue @click="() => emit('spinClicked')" />
  </main>
</template>

<style>
.main-home {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
