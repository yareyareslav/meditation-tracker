<script setup lang="ts">
import Clouds from '@/components/shared/Clouds.vue'

const { title, description } = defineProps<{ title: string; description: string }>()
</script>

<template>
  <div class="stat-card">
    <div class="stat-card__content">
      <h2 class="stat-card__title">{{ title }}</h2>
      <p class="stat-card__description">{{ description }}</p>
    </div>
    <Clouds class="stat-card__clouds" />
  </div>
</template>

<style scoped>
.stat-card {
  overflow: hidden;
  position: relative;
  width: 100%;
  max-width: 350px;

  background-color: var(--color-secondary);
  border-radius: 25px;
}
.stat-card__content {
  position: relative;
  z-index: 1;

  padding: 23px;

  display: flex;
  flex-direction: column;
  gap: 90px;
}
.stat-card__title {
  align-self: flex-end;
  font-size: 5rem;
}
.stat-card__description {
  font-size: 1.125rem;
}
.stat-card__clouds {
  z-index: 0;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -2px;

  width: 110%;
}
</style>
