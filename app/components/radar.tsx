import { useEffect } from 'react'
import { SkillradarChart, SkillradarOptions, SkillradarData } from '../radar/radar.code'
import './radar.scss'
import entries from '../data/skills'

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


  useEffect(() => {
    const chart = new SkillradarChart(radarConfig)
    chart.drawChart('#radarchart', data)
  })
  return (
    <div id="radar" className="radarcontainer">
      <div id="radarchart"></div>
    </div>);
}


export default Radar;