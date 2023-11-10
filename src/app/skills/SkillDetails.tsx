'use client'
import { Fab, List, ListItem, Zoom } from '@mui/material'
import React from 'react'
import { type Data } from './SkillList'
import CloseIcon from '@mui/icons-material/Close'

interface PageProps {
  details: Data
  isVisible: boolean
  onClose?: () => void
}

export default function Component ({
  isVisible,
  onClose,
  details
}: PageProps): JSX.Element {
  return (
    <>
      Sub
      <Zoom
        in={isVisible}
        timeout={400}
        style={{
          transitionDelay: `${isVisible ? 400 : 0}ms`
        }}
        unmountOnExit
      >
        <Fab
          sx={{
            position: 'absolute',
            top: 120,
            right: 16
          }}
          aria-label="close"
          color="primary"
          onClick={onClose}
        >
          <CloseIcon />
        </Fab>
      </Zoom>
      <List>
        <ListItem>name: {details?.name}</ListItem>
        <ListItem>calories: {details?.calories}</ListItem>
        <ListItem>fat: {details?.fat}</ListItem>
      </List>
    </>
  )
}
