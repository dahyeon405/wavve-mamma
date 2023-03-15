<script setup lang="ts">
import '@/components/Home/SpinButton.vue'
import SpinButtonVue from '@/components/Home/SpinButton.vue'
import HomeFilterVue from '@/components/Home/HomeFilter.vue'

const emit = defineEmits(['spinClicked', 'categoryClicked'])

const handleCategoryCick = (event: MouseEvent, category: string) => {
  emit('categoryClicked', event, category)
}
</script>

<template>
  <main class="main-home">
    <div class="text-lg text-center font-bold my-10">
      뭐 먹을지 고민될 땐, <br />
      Mamma
    </div>
    <HomeFilterVue @categoryClicked="handleCategoryCick"></HomeFilterVue>
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
