'use client'
import Grid from '@mui/material/Grid'
import React, { useState } from 'react'
import SkillList, { type Data } from './SkillList'
import SkillDetails from './SkillDetails'

export default function Page (): JSX.Element {
  const [isDetailsVisible, setIsDetailsVisible] = useState(false)
  const [details, setDetails] = useState<Data | null>(null)

  function openDetails (d: Data): void {
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
          <SkillList onClick={openDetails}/>
        </Grid>
        {isDetailsVisible && <Grid item xs={7}>
          <SkillDetails details={details} isVisible={isDetailsVisible} onClose={() => { setIsDetailsVisible(false) }}/>
        </Grid>}
      </Grid>
    </>
  )
}
