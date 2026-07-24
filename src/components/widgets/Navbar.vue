<script setup lang="ts">
import { useRoute } from 'vue-router'
import VolumeIcon from '../icons/VolumeIcon.vue'
import PlayDullIcon from '../icons/PlayDullIcon.vue'

const route = useRoute()
const routes = [
  {
    icon: PlayDullIcon,
    name: 'Meditations',
    to: '/meditations',
  },
  {
    icon: VolumeIcon,
    name: 'Statistics',
    to: '/stats',
  },
  {
    icon: VolumeIcon,
    name: 'Exit',
    to: '/auth',
  },
]
</script>

<template>
  <nav class="navbar">
    <ul class="navbar__list">
      <template v-for="(route, index) in routes" :key="route.name">
        <li class="navbar__item">
          <component :is="route.icon" />
          <div>{{ route.name }}</div>
        </li>
        <div v-if="index !== routes.length - 1" class="navbar__item-separator" />
      </template>
    </ul>
  </nav>
</template>

<style scoped>
.navbar__list {
  list-style: none;

  display: flex;
  align-items: center;
  gap: 1rem;
}
.navbar__item {
  padding-block: 0.5rem;
  padding-inline: 3rem;

  display: flex;
  align-items: center;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2px;

  font-size: 1.5rem;
}
.navbar__item-separator {
  width: 2px;
  align-self: stretch;
  background-color: var(--color-white-inactive);
}
</style>
