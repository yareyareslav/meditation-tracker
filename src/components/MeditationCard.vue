<script setup lang="ts">
import PlayIcon from '@/components/icons/PlayIcon.vue';
import type { MeditationCardProps } from '@/typescript/meditation.types';

const { title, description, duration } = defineProps<MeditationCardProps>()
</script>

<template>
  <div class="meditation-card">
    <div class="content">
      <h3 class="title">{{ title }}</h3>
      <p class="description">{{ description }}</p>
    </div>
    <footer class="footer">
      <button class="btn-start">Start <PlayIcon /></button>
      <div class="duration">{{ duration }} min</div>
    </footer>
  </div>
</template>

<style scoped>
.meditation-card {
  padding: 22px 30px;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  background-color: var(--color-fg);
  border-radius: 20px;
  font-weight: 500;
}
.content {
  display: flex;
  flex-direction: column;
  gap: 5px;

  color: var(--color-primary);
}
.title {
  font-size: 1.5625rem;
}
.description {
  font-size: 0.875rem;
}
.btn-start {
  padding: 10px 26px;
  display: flex;
  align-items: center;
  gap: 10px;

  font-size: 0.875rem;

  border-radius: 10px;
  border: none;

  color: var(--color-white);
  background-color: var(--color-primary);
  cursor: pointer;

  transition: background-color 0.3s ease;
}
.btn-start:hover {
  background-color: var(--color-primary-hover);
}

.btn-start > svg {
  width: 13px;
  height: 13px;
}
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.duration {
  font-size: 0.875rem;
  opacity: 0.75;
  color: var(--color-primary);
}
</style>
