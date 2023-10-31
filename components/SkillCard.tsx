import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Skill } from '../types/domain'

interface SkillCardProps {
  skill: Skill
}
const skillProperties = ['level', 'url', 'description']
const categories = ['Tools', 'Techniques', 'Platforms', 'Frameworks']

export default function SkillCard(props: SkillCardProps) {
  console.log("wee")
  console.log(props)
  const s = props.skill
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {categories[s.category]}
        </Typography>
        <Typography variant="h5" component="div">
          {s.title}
        </Typography>
        <Typography color="text.secondary">
          {skillProperties.map((key, index) => (
            <div key={index}><b>{key}</b>: {s[key]}</div>
          ))}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Show More</Button>
      </CardActions>
    </Card>
  )
}
