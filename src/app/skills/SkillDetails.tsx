'use client'
import { IconButton, List, ListItem, Paper } from '@mui/material'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close'
import { type Skill } from '@/types/domain'

interface PageProps {
  details: Skill
  isVisible: boolean
  onClose?: () => void
}

export default function Component ({
  isVisible,
  onClose,
  details
}: PageProps): JSX.Element {
  return (
    <Paper
      elevation={4}
      square
      sx={{ clipPath: 'inset(0px 0px 0px -10px)', minHeight: '60vw' }}
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
    </Paper>
  )
}
