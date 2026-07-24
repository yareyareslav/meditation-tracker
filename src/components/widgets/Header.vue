<script setup lang="ts">
import LogoIcon from '../icons/LogoIcon.vue'
import Wrapper from '../shared/Wrapper.vue'
import Navbar from './Navbar.vue'
</script>

<template>
  <header>
    <Wrapper class="app-header">
      <div>
        <LogoIcon />
      </div>
      <Navbar />
    </Wrapper>
  </header>
</template>

<style scoped>
.app-header {
  padding-block: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
