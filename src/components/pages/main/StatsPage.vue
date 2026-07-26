<script setup lang="ts">
import StatCard from '@/components/features/stats/StatCard.vue'
import { useStatsStore } from '@/components/shared/stores/stats.store'
import { onMounted } from 'vue'

const statsStore = useStatsStore()

onMounted(() => {
  statsStore.fetchStats()
})
</script>

<template>
  <div class="stats-page">
    <div v-if="statsStore.summary" class="stat-cards">
      <StatCard
        v-for="stat in Object.entries(statsStore.summary)"
        :key="stat[0]"
        :title="stat[1].toString()"
        :description="stat[0]"
      />
    </div>
  </div>
</template>

<style scoped>
.stats-page {
  display: flex;
  justify-content: center;
}
.stat-cards {
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}
</style>
