<script setup lang="ts">
import Button from '@/components/shared/Button.vue'
import Input from '@/components/shared/Input.vue'
import { useAuthStore } from '@/components/shared/stores/auth.store'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const form = ref<{ email: string; username: string; password: string }>({
  email: '',
  username: '',
  password: '',
})
const loading = ref(false)
const error = ref<string | null>(null)

const authStore = useAuthStore()

function register(e: Event) {
  e.preventDefault()
  loading.value = true
  error.value = null
  if (form.value.username === '' || form.value.password === '' || form.value.email === '') {
    return
  }

  try {
    authStore.register(form.value)
    router.push({ name: 'Login' })
  } catch (err) {
    error.value = (err as Error).message
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <form class="register-form" @submit="register">
    <Input type="text" placeholder="Email" />
    <Input type="text" placeholder="Login" />
    <Input type="password" placeholder="Password" />
    <Button class="register-form__button">Sign up</Button>
  </form>
  <RouterLink :to="{ name: 'Login' }">Log in</RouterLink>
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
