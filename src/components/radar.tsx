import { useEffect } from 'react'
import { SkillradarChart, SkillradarOptions, SkillradarData } from './radar.code'
import './radar.scss'
import { Blip } from '@/types/domain'

const radarConfig: SkillradarOptions = {
  levelCount: 4,
  radius: 300,
  dark: false
}

const entries: Blip[] = [
  {
    title: "react",
    category: 3,
    changes: [{
      date: "2023-08-01",
      newLevel: 0,
      text: "I made dis",
      id: "0"
    }],
    link: "https://react.dev",
    id: "",
    description: "fancy web framework",
    level: 0,
    index: 0
  },
  {
    title: "vue.js",
    category: 3,
    changes: [{
      date: "2019-06-01",
      newLevel: 2,
      text: "I made old devradar",
      id: "0"
    }],
    link: "https://vue.dev",
    id: "",
    description: "another fancy web framework",
    level: 1,
    index: 1
  },
  {
    title: "mermaid.js",
    category: 0,
    changes: [{
      date: "2022-10-01",
      newLevel: 0,
      text: "I use a lot at work",
      id: "0"
    }],
    link: "https://mermaid.js",
    id: "",
    description: "make fancy diagrams",
    level: 2,
    index: 2
  }]

const data: SkillradarData = {
  items: entries,
  levels: ['Novice', 'Intermediate', 'Advanced', 'Veteran'],
  categories: ['Tools', 'Techniques', 'Platforms', 'Frameworks']
}

function Radar() {


  useEffect(() => {
    const chart = new SkillradarChart(radarConfig)
    chart.drawChart('#radarchart', data)
  })
  return (
    <div id="radar" className="radarcontainer">
      📡
      <div id="radarchart"></div>
    </div>);
}


export default Radar;