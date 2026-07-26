export type Meditation = {
  created_at: string
  updated_at: string
  id: number
  title: string
  description: string
  duration_min: number
}

export type MeditationCardProps = {
  id: number;
  title: Meditation['title']
  description: Meditation['description']
  duration: Meditation['duration_min']
}
