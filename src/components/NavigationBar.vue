<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const handleLogoClick = () => {
  router.push('/')
}
</script>

<template>
  <div class="absolute top-0 left-0 w-full h-16 px-6 flex items-center justify-between z-10">
    <div class="h-6 cursor-pointer" @click="handleLogoClick">
      <img src="/public/logo.svg" />
    </div>
    <div class="font-bold cursor-pointer">식당 추가</div>
  </div>
</template>
