import { type Skill } from '@/types/domain'
import { type SkillradarOptions, type SkillradarData } from './radar.code'
import React from 'react'

export interface CoordPolar {
  angle: number
  radius: number
}

export interface CoordCarthesian {
  x: number
  y: number
}

export interface BlipExtended extends Skill {
  detailsUrl?: string
}

export default function RadarChart (
  { data, config }:
  { data: SkillradarData, config: SkillradarOptions }
): JSX.Element {
  const radius = config.radius

  return (
    <svg preserveAspectRatio="xMinYMin meet" viewBox="-5 -5 610 610" className="radar-chart " style={{
      overflow: 'visible'
    }}>
      <g transform={`translate(${radius},${radius})`}>
        <g className="gridWrapper ">
          <circle className="gridCircle" r={radius}></circle>
          <circle className="gridCircle" r={radius * 0.8}></circle>
          <circle className="gridCircle" r={radius * 0.6}></circle>
          <circle className="gridCircle" r={radius * 0.35}></circle>
          <text className="gridLabel label-0 " textAnchor="middle" x="4"
            y={-radius} dy="1.5em">Novice</text>
          <text className="gridLabel label-1 " textAnchor="middle" x="4" y={-radius * 0.8}
            dy="1.5em">Intermediate</text>
          <text className="gridLabel label-2 " textAnchor="middle" x="4" y={-radius * 0.6}
            dy="1.5em">Advanced</text>
          <text className="gridLabel label-3 " textAnchor="middle" x="4" y={-radius * 0.35}
            dy="1.5em">Veteran</text>
        </g><a href="">
          <g className="blip " data-index="-1" transform="translate(-187.75124940043557,-187.75124940043548)">
            <circle r="13" className="blipCircle blipCircle-level-0 blipCircle-category-3 "></circle><text
              className="blipIndex " textAnchor="middle" dy="0.3em" opacity="1">0</text>
          </g>
        </a><a href="">
          <g className="blip " data-index="2" transform="translate(88.15741159055898,-88.15741159055897)">
            <circle r="13" className="blipCircle blipCircle-level-2 blipCircle-category-0 "></circle><text
              className="blipIndex " textAnchor="middle" dy="0.3em" opacity="1">3</text>
          </g>
        </a>
      </g>
    </svg>
  )
}
