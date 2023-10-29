"use client"
import { useLayoutEffect } from 'react'
import { SkillradarChart, SkillradarOptions, SkillradarData } from './radar.code'
import './radar.scss'
import entries from '../data/skills'
import React from 'react'
import RadarChart from './radar'

const radarConfig: SkillradarOptions = {
  levelCount: 4,
  radius: 300,
  dark: false
}

const data: SkillradarData = {
  items: entries,
  levels: ['Novice', 'Intermediate', 'Advanced', 'Veteran'],
  categories: ['Tools', 'Techniques', 'Platforms', 'Frameworks']
}

function Radar() {


  const chart = new SkillradarChart(radarConfig)
  useLayoutEffect(() => {
    // chart.drawChart('#radarchart', data)
  })
  return (
    <div id="radar" className="radarcontainer">
      <div id="radarchart">
        < RadarChart />
      </div>
    </div>)
}


export default Radar