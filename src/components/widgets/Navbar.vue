<script setup lang="ts">
import { RouterLink, useRoute, useRouter } from 'vue-router'
import VolumeIcon from '../icons/VolumeIcon.vue'
import PlayDullIcon from '../icons/PlayDullIcon.vue'
import ExitIcon from '../icons/ExitIcon.vue'
import { useAuthStore } from '../shared/stores/auth.store.ts'

const router = useRouter()
const authStore = useAuthStore()

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
]

function logout() {
  authStore.logout()
  router.push({ name: 'Login' })
}
</script>

<template>
  <nav class="navbar">
    <ul class="navbar__list">
      <template v-for="route in routes" :key="route.name">
        <RouterLink :to="route.to" class="navbar__item"
          ><li class="navbar__item">
            <component :is="route.icon" />
            <div>{{ route.name }}</div>
          </li>
          <div class="navbar__item-separator" />
        </RouterLink>
      </template>
      <li class="navbar__item" @click="logout">
        <ExitIcon />
        <div>Exit</div>
      </li>
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
  cursor: pointer;
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
