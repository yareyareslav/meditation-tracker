<script setup lang="ts">
import type { FeelingCardProps } from './props'

const { icon, text } = defineProps<FeelingCardProps>()
</script>

<template>
  <div class="feeling-card">
    <div class="feeling-card__wrapper"><component :is="icon" /></div>
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
  max-width: 40px;
  height: 100%;
  max-height: 40px;
  padding: 15px;
  display: flex;

  border-radius: 20px;
  background-color: var(--color-fg);
}
</style>
