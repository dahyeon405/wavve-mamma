<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="main-wrapper">
    <RouterView />
  </div>
</template>

<style scoped>
.main-wrapper {
  width: 400px;
  margin: 0 auto;
  border: 1px solid grey;
  height: 100%;
}
</style>
