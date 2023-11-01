import skills from '../data/skills'
import Grid from '@mui/material/Grid'
import SkillCard from '../../components/SkillCard'

export default function Skills (): JSX.Element {
  return (
    <Grid container spacing={2}>
      {skills.map((skill, index) => (
        <Grid item xs={4}>
          <SkillCard skill={skill} />
        </Grid>
      ))
      }

    </Grid>
  )
};
