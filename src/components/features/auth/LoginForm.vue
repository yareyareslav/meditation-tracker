<script setup lang="ts">
import Button from '@/components/shared/Button.vue'
import Input from '@/components/shared/Input.vue'
import { useAuthStore } from '@/components/shared/stores/auth.store'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const form = ref<{ login: string; password: string }>({
  login: '',
  password: '',
})
const loading = ref(false)
const error = ref<string | null>(null)

const authStore = useAuthStore()

function login(e: Event) {
  e.preventDefault()
  loading.value = true
  error.value = null
  if (form.value.login === '' || form.value.password === '') {
    return
  }

  try {
    authStore.login(form.value.login, form.value.password)
    router.push({ name: 'Main' })
  } catch (err) {
    error.value = (err as Error).message
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <form class="login-form" @submit="login">
    <Input type="text" placeholder="Login" v-model="form.login" />
    <Input type="password" placeholder="Password" v-model="form.password" />
    <Button type="submit" class="login-form__button">Log in</Button>
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
