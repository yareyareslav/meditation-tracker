import axios from 'axios'
import { useAuthStore } from '../stores/auth.store'

const BACKEND_API = 'http://localhost:3000/api'

export const API_ROUTES = {
  meditations: `/meditations`,
  register: `/auth/register`,
  login: `/auth/login`,
  profile: `/profile`,
}

export const http = axios.create({
  baseURL: BACKEND_API,
  headers: {
    'Content-Type': 'application/json',
  },
})

const authStore = useAuthStore()
export const client = axios.create({
  baseURL: BACKEND_API,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${authStore.getToken()}`,
  },
})

export type Response<T> = {
  data: T
  status: string
}

export type User = {
  id: number
  email: string
  username: string
  last_login_at?: string
}

export type JWT = {
  token: string
}
