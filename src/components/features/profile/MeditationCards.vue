<script setup lang="ts">
import { useMeditationStore } from '@/components/shared/stores/meditation.store.ts'
import { onMounted } from 'vue'
import MeditationCard from './MeditationCard.vue'

const meditationStore = useMeditationStore()

onMounted(() => {
  meditationStore.fetchMeditations()
})
</script>

<template>
  <div>
    <div v-if="meditationStore.loading" class="loading">Loading...</div>
    <div v-else-if="meditationStore.error">{{ meditationStore.error }}</div>
    <div
      v-else-if="meditationStore.meditations && meditationStore.meditations.length > 0"
      class="cards"
    >
      <MeditationCard
        v-for="meditation in meditationStore.meditations"
        :key="meditation.id"
        :title="meditation.title"
        :description="meditation.description"
        :duration="meditation.duration_min"
      />
    </div>
  </div>
</template>

<style scoped>
.cards {
  flex-shrink: 1;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}
.loading {
  color: var(--color-white);
}
</style>
