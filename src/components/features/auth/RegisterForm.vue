<script setup lang="ts">
import Button from '@/components/shared/Button.vue';
import Input from '@/components/shared/Input.vue';

</script>

<template>
  <form class="register-form" action="">
    <Input type="text" placeholder="Email" />
    <Input type="text" placeholder="Login" />
    <Input type="password" placeholder="Password" />
    <Button class="register-form__button">Sign up</Button>
  </form>
</template>

<style scoped>
.register-form {
  max-width: 350px;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 1rem;
}
.register-form__button {
  margin-top: 3rem;
}
</style>
