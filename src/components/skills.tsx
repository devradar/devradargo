import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

const Skills = () => {
  return (
    <Container className="d-flex justify-content-center">
      <Row>
        <Col>
          <Card bg="light" style={{ width: '18rem' }}>
            <Card.Header>JavaScript</Card.Header>
            <Card.Body>
              <Card.Text>
                <ul>
                  <li>ES6+</li>
                  <li>Node.js</li>
                  <li>React</li>
                  <li>Angular</li>
                  <li>Vue.js</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card bg="light" style={{ width: '18rem' }}>
            <Card.Header>TypeScript</Card.Header>
            <Card.Body>
              <Card.Text>
                <ul>
                  <li>Interfaces</li>
                  <li>Generics</li>
                  <li>Decorators</li>
                  <li>Enums</li>
                  <li>Modules</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card bg="light" style={{ width: '18rem' }}>
            <Card.Header>React</Card.Header>
            <Card.Body>
              <Card.Text>
                <ul>
                  <li>React Hooks</li>
                  <li>React Router</li>
                  <li>Redux</li>
                  <li>Next.js</li>
                  <li>Gatsby.js</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card bg="light" style={{ width: '18rem' }}>
            <Card.Header>HTML</Card.Header>
            <Card.Body>
              <Card.Text>
                <ul>
                  <li>Semantic HTML</li>
                  <li>Accessibility</li>
                  <li>SEO</li>
                  <li>Web Components</li>
                  <li>Canvas</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card bg="light" style={{ width: '18rem' }}>
            <Card.Header>CSS</Card.Header>
            <Card.Body>
              <Card.Text>
                <ul>
                  <li>CSS Grid</li>
                  <li>CSS Flexbox</li>
                  <li>SASS</li>
                  <li>Bootstrap</li>
                  <li>Material UI</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;
