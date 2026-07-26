<script setup lang="ts">
import Player from '@/components/features/meditation-player/Player.vue'
import { useMeditationStore } from '@/components/shared/stores/meditation.store'
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const meditationStore = useMeditationStore()
const route = useRoute()

onMounted(() => {
  meditationStore.fetchMeditations()
})

const meditation = computed(() =>
  meditationStore.meditations?.find((meditation) => meditation.id === Number(route.params.id)),
)

</script>

<template>
  <Player
    v-if="meditation"
    :title="meditation.title"
    :description="meditation.description"
    :duration="meditation.duration_min"
  />
</template>
