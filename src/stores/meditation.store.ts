import { API_ROUTES, http, type Response } from '@/constants/api'
import type { Meditation } from '@/typescript/meditation.types'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMeditationStore = defineStore('meditation', () => {
  const meditations = ref<Meditation[] | null>(null)
  const error = ref<string | null>(null)
  const loading = ref(false)

  async function fetchMeditations() {
    try {
      loading.value = true
      const { data } = await http.get<Response<{ meditations: Meditation[] }>>(API_ROUTES.meditations)
      meditations.value = data.data.meditations
    } catch (err) {
      if (err instanceof Error) {
        error.value = err.message
      }
    } finally {
      loading.value = false
    }
  }

  return { meditations, loading, error, fetchMeditations }
})
