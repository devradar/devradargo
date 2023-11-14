'use client'
import { IconButton, Paper, type SxProps, Typography, Card, CardContent } from '@mui/material'
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from '@mui/lab'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import CloseIcon from '@mui/icons-material/Close'
import { type Meta, type Skill } from '@/types/domain'

interface PageProps {
  details: Skill
  isVisible: boolean
  onClose?: () => void
  sx?: SxProps
  meta: Meta
}

export default function Component ({
  isVisible,
  onClose,
  details,
  meta,
  sx
}: PageProps): JSX.Element {
  const style = Object.assign({
    clipPath: 'inset(0px 0px 0px -10px)',
    minHeight: '60vw'
  }, sx)
  const changes = details?.changes?.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  const currentLevel = changes?.[0]?.newLevel ?? details?.level
  const category = meta.categories[details?.category] ?? 'unknown'
  const level = meta.levels[currentLevel]
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
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Card elevation={1} sx={{ width: '80%', marginTop: '2em' }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {category}
        </Typography>
        <Typography variant="h5" component="div">
          {details.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {level}
        </Typography>
        <Typography variant="body2">
          <ReactMarkdown
            components={{
              p: ({ node, ...props }) => <div {...props} />
            }}
          >
            {details.description}
          </ReactMarkdown>
        </Typography>
      </CardContent>
        </Card>
        </div>
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
                    {meta.levels[oldLevel]} → {meta.levels[change.newLevel]}
                  </Typography>
                )}
                {oldLevel === null && (
                  <Typography variant="h6" component="span">
                    {meta.levels[change.newLevel]}
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
