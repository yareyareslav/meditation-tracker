<script setup lang="ts">
import { useMeditationStore } from '@/stores/meditation.store'
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
  display: flex;
  gap: 1rem;
}
.loading {
  color: var(--color-white);
}
</style>
