import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { API_ROUTES, client, type Response, type User } from '../constants/api'

export const useProfileStore = defineStore('profile', () => {
  const profile = ref<User | null>(null)

  const getProfile = computed(() => profile.value)

  async function fetchProfile() {
    try {
      const res = await client().get<Response<{ user: User }>>(API_ROUTES.profile)
      console.log()
      profile.value = res.data.data.user
    } catch (err) {
      console.error(err)
    }
  }

  return { getProfile, fetchProfile }
})
