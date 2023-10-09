import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, NavLink } from "react-router-dom";
import logo from './logo.svg';
import './App.scss'

function App() {
  return (
    <div>
      <Navbar expand="lg" bg="primary" data-bs-theme="dark">
        <Container>
          <NavLink to={`/`} className="nav-link" role="button">
            <Navbar.Brand>
              <img
                alt=""
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
              devradar
            </Navbar.Brand>
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink to={`/`} className="nav-link" role="button">Home</NavLink>
              <NavLink to={`radar`} className="nav-link" role="button">Radar</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div id="content">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
