'use client'
import { IconButton, List, ListItem, Paper, type SxProps, Typography } from '@mui/material'
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from '@mui/lab'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import CloseIcon from '@mui/icons-material/Close'
import { type Skill } from '@/types/domain'

interface PageProps {
  details: Skill
  isVisible: boolean
  onClose?: () => void
  sx?: SxProps
}

export default function Component ({
  isVisible,
  onClose,
  details,
  sx
}: PageProps): JSX.Element {
  const style = Object.assign({
    clipPath: 'inset(0px 0px 0px -10px)',
    minHeight: '60vw'
  }, sx)
  const changes = details?.changes?.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  return (
    <Paper
      elevation={4}
      square
      sx={style}
    >
      <IconButton
        sx={{
          // position: 'absolute',
          top: 10,
          left: 10
        }}
        aria-label="close"
        color="primary"
        onClick={onClose}
      >
        <CloseIcon />
      </IconButton>
      <List>
        <ListItem>Skill: {details?.title}</ListItem>
        <ListItem>Description: {details?.description}</ListItem>
        <ListItem>Category: {details?.category}</ListItem>
      </List>
      <Timeline>
        {changes?.map((change, index) => {
          const prevChange = changes[index + 1]
          const oldLevel = prevChange !== undefined ? prevChange.newLevel : null
          return (
            <TimelineItem key={change.id}>
              <TimelineOppositeContent>
                <Typography variant="body2" color="textSecondary">
                  {new Date(change.date).toISOString().slice(0, 10)}
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="primary" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                {oldLevel !== null && (
                  <Typography variant="h6" component="span">
                    {oldLevel} → {change.newLevel}
                  </Typography>
                )}
                {oldLevel === null && (
                  <Typography variant="h6" component="span">
                    {change.newLevel}
                  </Typography>
                )}
                  <ReactMarkdown
                    components={{
                      p: ({ node, ...props }) => <div {...props} />
                    }}
                  >
                    {change.text}
                  </ReactMarkdown>
              </TimelineContent>
            </TimelineItem>
          )
        })}
      </Timeline>
    </Paper>
  )
}
