import { SkillradarChart, SkillradarOptions, SkillradarData } from './radar.code'

const radarConfig: SkillradarOptions = {
  levelCount: 4,
  radius: 300,
  dark: false
}

const data: SkillradarData = {
  items: [],
  levels: ['Novice', 'Intermediate', 'Advanced', 'Veteran'],
  categories: ['Tools', 'Techniques', 'Platforms', 'Frameworks']
}

function Radar() {

  const chart = new SkillradarChart(radarConfig)
  // chart.drawChart('#radarchart', data)
  return (
    <div id="radar" className="radarcontainer">
      📡
      <div id="radarchart"></div>
    </div>);
}


export default Radar;