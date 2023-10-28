import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import skills from '../data/skills';
import { Skill } from '../types/domain';
import Grid from '@mui/material/Grid';


interface SkillCardProps {
  skill: Skill;
}
const skillProperties = ['level', 'url', 'description']
const categories = ['Tools', 'Techniques', 'Platforms', 'Frameworks']

export default function SkillCard(props: SkillCardProps) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {categories[props.skill.category]}
        </Typography>
        <Typography variant="h5" component="div">
          {props.skill.title}
        </Typography>
        <Typography color="text.secondary">
          {skillProperties.map((key, index) => (
            <div key={index}><b>{key}</b>: {props.skill[key]}</div>
          ))}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Show More</Button>
      </CardActions>
    </Card>
  );
}

const Skills = () => {
  return (
    <Grid container spacing={2}>
      {skills.map((skill, index) => (
        <Grid item xs={4}>
          <SkillCard skill={skill} />
        </Grid>
      ))
      }

    </Grid>
  );
};

export { Skills, SkillCard }