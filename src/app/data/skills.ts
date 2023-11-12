import { type Skill } from '../../types/domain'
import data from './skills.json'

const entries: Skill[] = []
for (const id in data) {
  // eslint-disable-next-line @typescript-eslint/ban-tslint-comment
  // tslint:disable-next-line
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

export default entries
