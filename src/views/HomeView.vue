<script setup lang="ts">
import '../components/Home/SpinButton.vue'
import SpinButtonVue from '../components/Home/SpinButton.vue'
</script>

<template>
  <main class="main-home">
    <div>Home</div>
    <SpinButtonVue />
  </main>
</template>

<style>
.main-home {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
