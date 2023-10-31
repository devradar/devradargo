import { Skill, SkillChange } from 'types/domain'
import * as d3 from 'd3'
import { getPseudoRand } from '../util'
import React from 'react'

export interface SkillradarOptions {
  levelCount: number
  radius: number
  dark: boolean
  blipRadius?: number
  blipRadiusHoverPercentage?: number
  opacityArea?: number
  transitionDurationMs?: number
  titleCutOff?: number
  legendCategorySpacingEms?: number
  legendCategoryOffsetEms?: number
  tooltipWidth?: number
}

export interface SkillradarData {
  items: Skill[]
  levels: string[]
  categories: string[]
}

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

// wrap (existing) text within a svg <text> element by adding <tspan> attributes once maxLength is reached
function textWrap(textElm: d3.Selection<SVGTextElement, unknown, HTMLElement, any>, maxLength: number) {
  textElm.each(function () {
    const elm = d3.select(this)
    const rootX = elm.attr('x')
    const rootY = elm.attr('y')
    const words = (elm.text() || "").split(/\s+/).reverse()
    const lineHeight = 1.1
    elm
      .append('tspan')
      .attr('x', rootX)
      .attr('y', rootY)
    let line: Array<string> = []
    let lineNumber = 0
    let tspan = elm.append('tspan') as any
    let word = words.pop()
    while (word) {
      line.push(word)
      tspan.text(line.join(' '))
      if ((tspan?.node() as SVGTSpanElement).getComputedTextLength() > maxLength) {
        const lastWord = line.pop() as string // remove last element from line
        tspan.text(line.join(' '))
        line = [lastWord]
        tspan = textElm.append('tspan')
          .attr('x', rootX)
          .attr('y', rootY)
          .attr('dy', ++lineNumber * lineHeight + 'em')
      }
      word = words.pop()
    }
  })
}

export default function RadarChart({
  levelCount = 4,
  radius = 300
}) {
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
            y="-300" dy="1.5em">Novice</text>
          <text className="gridLabel label-1 " textAnchor="middle" x="4" y="-241.875"
            dy="1.5em">Intermediate</text>
          <text className="gridLabel label-2 " textAnchor="middle" x="4" y="-172.5"
            dy="1.5em">Advanced</text>
          <text className="gridLabel label-3 " textAnchor="middle" x="4" y="-91.875"
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
        <g visibility="hidden" className="tooltip " opacity="0">
          <rect className="tooltipRectangle " height="320" width="320" anchor="start"></rect><text className="tooltipTitle "
            textAnchor="start" y="20" x="14" width="288"></text><text className="tooltipDate " textAnchor="start" y="42"
              x="14" width="192"></text><text className="tooltipLevel " textAnchor="end" y="42" x="300"
                width="128"></text><text className="tooltipText " textAnchor="start" y="70" x="14" width="256"></text>
        </g>
      </g>
    </svg>
  )
}