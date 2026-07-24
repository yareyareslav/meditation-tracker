<script setup lang="ts">

</script>

<template>
  <button class="button"><slot /></button>
</template>

<style scoped>
.button {
  padding: 1rem;
  border: none;
  border-radius: 10px;
  background-color: var(--color-secondary);
  color: var(--color-white);
  font-family: var(--font-sans);
  font-size: 1.5rem;
  transition: background-color 300ms ease-in-out;
}
.button:hover {
  cursor: pointer;
  background-color: var(--color-active)
}
</style>
