<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from '../widgets/Header.vue'
import Wrapper from '../shared/Wrapper.vue';
</script>

<template>
  <div>
    <Header />
    <Wrapper>
      <RouterView />
    </Wrapper>
  </div>
</template>
