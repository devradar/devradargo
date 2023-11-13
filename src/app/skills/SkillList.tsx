import { List, ListItemText, Badge, Divider, ListItemButton } from '@mui/material'
import { type Skill } from '@/types/domain'
import React from 'react'
import { Code, Build, Settings, Storage } from '@mui/icons-material'

interface SkillListProps {
  skills: Skill[]
  onClick?: (s: Skill) => void
}

interface SkillEntryProps {
  skill: Skill
  onClick?: (s: Skill) => void
}

function SkillEntry ({ skill, onClick }: SkillEntryProps): JSX.Element {
  let icon
  switch (skill.category) {
    case 0:
      icon = <Settings />
      break
    case 1:
      icon = <Build />
      break
    case 2:
      icon = <Storage />
      break
    case 3:
      icon = <Code />
      break
    default:
      icon = null
  }

  return (
    <ListItemButton
      onClick={onClick != null ? () => { onClick(skill) } : undefined}
    >
      {icon}
      <ListItemText
        primary={skill.title}
        secondary={<Badge badgeContent={skill.level} color="primary"/>}
      />
    </ListItemButton>
  )
}

export default function SkillList ({ skills, onClick }: SkillListProps): JSX.Element {
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
                textAlign="left"
              >
                {firstLetter}
              </Divider>
            )}
            <SkillEntry skill={skill} onClick={onClick} />
          </React.Fragment>
        )
      })}
    </List>
  )
}
