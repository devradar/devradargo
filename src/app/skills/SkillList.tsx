import { List, ListItem, ListItemText, Badge, Divider } from '@mui/material'
import { type Skill } from '@/types/domain'
import React from 'react'

interface SkillListProps {
  skills: Skill[]
}

export default function SkillList ({ skills }: SkillListProps): JSX.Element {
  const sortedSkills = skills.sort((a, b) => a.title.localeCompare(b.title))

  let prevFirstLetter = ''
  return (
    <List>
      {sortedSkills.map((skill) => {
        const firstLetter = skill.title[0].toUpperCase()
        const shouldRenderDivider = firstLetter !== prevFirstLetter
        prevFirstLetter = firstLetter

        return (
          <React.Fragment key={skill.id}>
            {shouldRenderDivider && (
              <Divider
              sx={{ fontSize: '2em', color: 'primary.main' }}
              textAlign="left">
                {firstLetter}
              </Divider>
            )}
            <ListItem>
              <ListItemText
                primary={skill.title}
                secondary={
                  <Badge badgeContent={skill.level} color="primary" />
                }
              />
            </ListItem>
          </React.Fragment>
        )
      })}
    </List>
  )
}
