<script setup lang="ts">
import MeditationCards from '@/components/features/profile/MeditationCards.vue';
import Profile from '@/components/features/profile/Profile.vue';
</script>

<template>
  <div class="meditations-page">
    <Profile class="meditations-page__profile" />
    <MeditationCards class="meditations-page__cards" />
  </div>
</template>

<style scoped>
.meditations-page {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
}
.meditations-page__profile {
  flex-basis: 700px;
}
.meditations-page__cards {
  flex-shrink: 1;
  display: flex;
  justify-content: end;
}
</style>
