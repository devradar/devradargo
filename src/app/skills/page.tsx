'use client'
import Grid from '@mui/material/Grid'
import React, { useState } from 'react'
import SkillList from './SkillList'
import SkillDetails from './SkillDetails'
import entries from '@/app/data/skills'
import { type Skill } from '@/types/domain'

export default function Page (): JSX.Element {
  const [isDetailsVisible, setIsDetailsVisible] = useState(false)
  const [details, setDetails] = useState(entries[0])

  function openDetails (d: Skill): void {
    setIsDetailsVisible(true)
    setDetails(d)
  }
  return (
    <>
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="top"
      >
        <Grid item sx={{ flexGrow: 1 }}>
          Main
          <SkillList skills={entries} onClick={openDetails}/>
        </Grid>
        {isDetailsVisible && <Grid
          item
          xs={7}
        >
          <SkillDetails
            details={details}
            isVisible={isDetailsVisible}
            onClose={() => { setIsDetailsVisible(false) }}
            sx={{ position: 'sticky', top: 0 }}
          />
        </Grid>}
      </Grid>
    </>
  )
}
