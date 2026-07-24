<script setup lang="ts">
import { API_ROUTES, client } from '@/components/shared/constants/api'
import type { FeelingCardProps } from './props'
import { ref } from 'vue'

const { icon, text, type } = defineProps<FeelingCardProps>()
const loading = ref(false)
const success = ref<boolean | null>(null)

async function checkEmotion() {
  if (success.value) {
    return
  }
  loading.value = true
  try {
    await client().post(API_ROUTES.stats, {
      type: type,
      value: 1,
    })
    success.value = true
  } catch (err) {
    console.error(err)
    success.value = false
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="feeling-card" @click="checkEmotion">
    <div class="feeling-card__wrapper" :class="{ 'feeling-card__wrapper--success': success }">
      <component :is="icon" />
    </div>
    <p class="feeling-card__text">{{ text }}</p>
  </div>
</template>

<style scoped>
.feeling-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
}
.feeling-card__wrapper {
  cursor: pointer;

  max-width: 40px;
  height: 100%;
  max-height: 40px;
  padding: 15px;
  display: flex;

  border-radius: 20px;
  background-color: var(--color-fg);
  transition: background-color 300ms ease-in-out;
}
.feeling-card__wrapper--success {
  cursor: default;
  background-color: var(--color-active);
}
</style>
