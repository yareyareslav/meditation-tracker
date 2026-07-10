import axios from 'axios'

const BACKEND_API = 'http://localhost:3000/api'

export const API_ROUTES = {
  meditations: `/meditations`,
}

export const http = axios.create({
  baseURL: BACKEND_API,
  headers: {
    'Content-Type': 'application/json',
  },
})

export type Response<T> = {
  data: T
  status: string
}
