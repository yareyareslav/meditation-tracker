<script setup lang="ts">
import BackspaceIcon from '@/components/icons/BackspaceIcon.vue'
import PauseIcon from '@/components/icons/PauseIcon.vue'
import PlayDullIcon from '@/components/icons/PlayDullIcon.vue'
import RepeatIcon from '@/components/icons/RepeatIcon.vue'
import { useStatsStore } from '@/components/shared/stores/stats.store'
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'

type PlayerProps = {
  title: string
  description: string
  duration: number
}

const router = useRouter()
const statsSore = useStatsStore()

const { title, description, duration } = defineProps<PlayerProps>()
const isPlaying = ref(false)
const progress = ref(duration * 60)
let intervalId: number

watch(progress, async () => {
  if (progress.value === 0) {
    clearInterval(intervalId)
    await statsSore.saveDuration(duration)
    isPlaying.value = false
  }
})

function togglePlay() {
  if (isPlaying.value) {
    clearInterval(intervalId)
  } else {
    intervalId = setInterval(() => {
      progress.value -= 1
    }, 1000)
  }
  isPlaying.value = !isPlaying.value
}

function goToMeditations() {
  router.push({ name: 'Main' })
}
</script>

<template>
  <div class="player">
    <div class="player__preview">
      <div v-if="progress !== undefined" class="player__duration">
        {{ Math.floor(progress / 60) }}:{{
          progress % 60 < 10 ? `0${progress % 60}` : progress % 60
        }}
      </div>
    </div>
    <div class="player__content">
      <h1 class="player__title">{{ title }}</h1>
      <p class="player__description">{{ description }}</p>
    </div>
    <div class="controls">
      <button class="btn-blank" @click="goToMeditations"><BackspaceIcon /></button>
      <button class="btn-round" @click="togglePlay">
        <PauseIcon v-if="isPlaying" /><PlayDullIcon v-else />
      </button>
      <button class="btn-blank"><RepeatIcon /></button>
    </div>
  </div>
</template>

<style scoped>
.player {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.625rem;

  text-align: center;
}
.player__preview {
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  width: 250px;
  aspect-ratio: 1 / 1;
  background-color: var(--color-secondary);
}
.player__duration {
  font-size: 3rem;
  color: var(--color-white);
}

.player__content {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.player__title {
  font-size: 2.25rem;
}
.player__description {
  font-size: 1.5rem;
  color: var(--color-white-inactive);
}
.controls {
  display: flex;
  align-items: center;
  gap: 30px;
}
.btn-blank {
  cursor: pointer;
  background: none;
  border: none;
  width: 40px;
  aspect-ratio: 1 / 1;
}
.btn-round {
  cursor: pointer;
  width: 75px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  background: var(--color-white);
  border: none;

  color: var(--color-primary);
}
.btn-round > svg {
  height: 60%;
  width: 100%;
}
</style>
