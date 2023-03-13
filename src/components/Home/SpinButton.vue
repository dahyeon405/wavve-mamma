<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const handleSpinClick = () => {
  // 랜덤으로 선택

  router.push('/result')
}
</script>

<template>
  <div></div>
  <button class="btn-spin" @click="handleSpinClick">돌리기</button>
</template>

<style>
.btn-spin {
  width: 300px;
  background-color: white;
  border: 1px solid grey;
  border-radius: 10px;
  font-weight: 700;
  height: 60px;
  margin: 0 auto;
}
</style>
