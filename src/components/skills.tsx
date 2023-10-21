import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import skills from '../data/skills';
import { Skill } from '../types/domain';

interface SkillCardProps {
  skill: Skill;
}

const SkillCard = (props: SkillCardProps) => {
  const skillProperties = ['category', 'level', 'url', 'description']
  return (
    <Card bg="light" style={{ width: '18rem' }}>
      <Card.Header>{props.skill.title}</Card.Header>
      <Card.Body>
        <Card.Text>
          <ul>
            {skillProperties.map((key, index) => (
              <li key={index}><b>{key}</b>: {props.skill[key]}</li>
            ))}
          </ul>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

const Skills = () => {
  return (
    <Container className="d-flex justify-content-center">
      <Row>
        {skills.map((skill, index) => (
          <Col>
            <SkillCard skill={skill} />
          </Col>
        ))
        }
      </Row>
    </Container>
  );
};

export { Skills, SkillCard }