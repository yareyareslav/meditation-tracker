import { defineStore } from 'pinia'
import { API_ROUTES, client, type Response } from '../constants/api'
import { ref } from 'vue'

type Stats = {
  id: number
  created_at: string
  updated_at: string
  user_id: number
  date: string
  duration_min: number
  feeling_calm: number
  feeling_relax: number
  feeling_focus: number
  feeling_anxiety: number
}

type Summary = {
  total_anxiety: number
  total_calm: number
  total_relax: number
  total_focus: number
  total_minutes: number
}

type StatsResponse = Response<{ stats: Stats[]; summary: Summary }>

export const useStatsStore = defineStore('stats', () => {
  const stats = ref<Stats[] | null>(null)
  const summary = ref<Summary | null>(null)

  async function fetchStats() {
    try {
      const res = await client().get<StatsResponse>(API_ROUTES.stats)

      stats.value = res.data.data.stats
      summary.value = res.data.data.summary
    } catch (err) {
      console.error(err)
    }
  }

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

  return { summary, stats, fetchStats, saveEmotion, saveDuration }
})
