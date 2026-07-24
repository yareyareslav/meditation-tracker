<script setup lang="ts">
const value = defineModel<string>()
</script>

<template>
  <input class="input" v-model="value" />
</template>

<style scoped>
.input {
  padding: 1rem;

  border: none;
  background: none;
  border-bottom: 1px solid var(--color-white);

  font-family: var(--font-sans);
  font-size: 1.125rem;
  color: var(--color-white)
}
.input::placeholder {
  color: var(--color-white-inactive);
}
.input:focus {
  outline: none;
}
</style>
