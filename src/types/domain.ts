export interface SkillChange {
  date: string
  newLevel: number
  text: string
  id: string
}

export interface Skill {
  title: string
  category: number
  changes: SkillChange[]
  link: string
  id?: string
  description: string
  level: number
  index?: number
  [key: string]: any
}

export interface Meta {
  title: string
  categories: string[]
  levels: string[]
}
