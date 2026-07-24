<script setup lang="ts">
import Button from '@/components/shared/Button.vue';
import Input from '@/components/shared/Input.vue';

</script>

<template>
  <form class="login-form" action="">
    <Input type="text" placeholder="Login" />
    <Input type="password" placeholder="Password" />
    <Button class="login-form__button">Log in</Button>
  </form>
</template>

<style scoped>
.login-form {
  max-width: 350px;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 1rem;
}
.login-form__button {
  margin-top: 3rem;
}
</style>
