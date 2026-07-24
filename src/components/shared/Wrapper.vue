<template>
  <div class="wrapper"><slot /></div>
</template>

<style scoped>
.wrapper {
  margin-inline: auto;
  max-width: 1440px;
  width: calc(100% - 40px);
  padding-inline: 20px;
}
</style>
