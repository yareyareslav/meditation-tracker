import { defineStore } from 'pinia'
import { ref } from 'vue'
import { API_ROUTES, client, type Response, type User } from '../constants/api'

export const useProfileStore = defineStore('profile', () => {
  const profile = ref<User | null>(null)

  function getProfile() {
    return profile.value
  }

  async function fetchProfile() {
    try {
      const res = await client.get<Response<User>>(API_ROUTES.profile)
      profile.value = res.data.data
    } catch (err) {
      console.error(err)
    }
  }

  return { getProfile, fetchProfile }
})
