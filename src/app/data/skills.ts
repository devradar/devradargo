import { type Meta, type Skill } from '../../types/domain'
import data from './skills.json'

export const entries: Skill[] = []
for (const id in data) {
  // @ts-expect-error This is necessary because the data object is of type any and we need to access its properties without TypeScript complaining
  const s: any = data[id]
  const skill: Skill = {
    link: s.link,
    description: s.description,
    title: s.title,
    category: s.category,
    changes: [],
    level: -1,
    id
  }
  for (const c of s.changes) {
    skill.changes.push({
      date: c.date,
      newLevel: c.newLevel,
      text: c.text,
      id: c.id
    })
  }
  skill.level = s.changes[0].newLevel
  entries.push(skill)
}

export const meta: Meta = {
  title: 'anoff\'s developer skills',
  levels: ['Novice', 'Intermediate', 'Advanced', 'Veteran'],
  categories: ['Tools', 'Techniques', 'Platforms', 'Frameworks']
}
