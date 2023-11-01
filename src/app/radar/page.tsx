'use client'
import React from 'react'
import { type SkillradarOptions, type SkillradarData } from './radar.code'
import './radar.scss'
import entries from '../data/skills'
import RadarChart from './radar'

const radarConfig: SkillradarOptions = {
  levelCount: 4,
  radius: 200,
  dark: false
}

const data: SkillradarData = {
  items: entries,
  levels: ['Novice', 'Intermediate', 'Advanced', 'Veteran'],
  categories: ['Tools', 'Techniques', 'Platforms', 'Frameworks']
}

function Radar (): JSX.Element {
  return (
    <div id="radar" className="radarcontainer">
      <div id="radarchart">
        < RadarChart data={data} config={radarConfig} />
      </div>
    </div>)
}

export default Radar
