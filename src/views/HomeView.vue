<script setup lang="ts">
import '@/components/Home/SpinButton.vue'
import SpinButtonVue from '@/components/Home/SpinButton.vue'
import { randomPicker } from '@/utils/randomPicker'
import type { IRestaurantData } from '@/utils/interface'
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps<{
  data: IRestaurantData[]
}>()

const handleSpinClick = () => {
  const picked = randomPicker(props.data)
  router.push(`/result/${picked.id}`)
}
</script>

<template>
  <main class="main-home">
    <div class="text-lg text-center font-bold my-10">
      뭐 먹을지 고민될 땐, <br />
      Mamma
    </div>
    <SpinButtonVue @spinClicked="handleSpinClick" />
  </main>
</template>

<style>
.main-home {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
