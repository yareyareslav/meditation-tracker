<script setup lang="ts">
import { RouterView } from 'vue-router'
import LogoIcon from '../icons/LogoIcon.vue'
</script>

<template>
  <div class="auth-view">
    <div class="auth-view__wrapper">
      <LogoIcon class="auth-view__icon" />
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.auth-view {
  min-height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url("../../../public/img/forest.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center 80%;
}
.auth-view__wrapper {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}
.auth-view__icon {
  width: 202px;
  height: 213px;
}
</style>
