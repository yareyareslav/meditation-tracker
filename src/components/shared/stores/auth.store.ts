import { defineStore } from 'pinia'
import { ref } from 'vue'
import { API_ROUTES, client, type JWT, type Response, type User } from '../constants/api'

const JWT_TOKEN_KEY = 'jwt'

export const useAuthStore = defineStore('auth', () => {
  const token = ref<string | null>(null)

  function getToken() {
    if (token.value === null) {
      token.value = localStorage.getItem(JWT_TOKEN_KEY)
    }
    return token.value
  }

  function setToken(newToken: string) {
    token.value = newToken
    localStorage.setItem(JWT_TOKEN_KEY, newToken)
  }

  async function login(username: string, password: string) {
    try {
      const res = await client.post<Response<JWT & User>>(API_ROUTES.login, {
        username: username,
        password: password,
      })
      setToken(res.data.data.token)
    } catch (err) {
      console.error(err)
    }
  }

  async function register({
    username,
    email,
    password,
  }: {
    username: string
    email: string
    password: string
  }) {
    try {
      await client.post<Response<User>>(API_ROUTES.register, {
        username: username,
        email: email,
        password: password,
      })

      return true
    } catch (err) {
      console.error(err)
      return false
    }
  }

  async function logout() {
    token.value = null
    localStorage.removeItem(JWT_TOKEN_KEY)
  }

  return { getToken, login, register, logout }
})
