import { defineStore } from 'pinia'
import { API_ROUTES, client } from '../constants/api'
import { ref } from 'vue'

export const useStatsStore = defineStore('stats', () => {
  const stats = ref(null)

  async function saveEmotion(
    type: 'feeling_anxious' | 'feeling_calm' | 'feeling_relax' | 'feeling_focus',
  ) {
    try {
      await client().post(API_ROUTES.stats, {
        type: type,
        value: 1,
      })
      return true
    } catch (err) {
      console.error(err)
      return false
    }
  }

  async function saveDuration(duration: number) {
    try {
      await client().post(API_ROUTES.stats, {
        type: 'duration_min',
        value: duration,
      })
      return true
    } catch (err) {
      console.error(err)
      return false
    }
  }

  return { stats, saveEmotion, saveDuration }
})
