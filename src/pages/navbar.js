import React from 'react';
//import { NavLink } from 'react-router-dom';
import './navbar.css';
import { Container, Navbar, Nav} from 'react-bootstrap';
import {  Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
function NavbarFun() {
  return (
    // <Router>
    <>
    <div className='navbar'></div>
    {/* <h1>React Router Dom</h1> */}
    <Navbar bg="dark"  variant="dark" expand="lg">
    <Container>
    <Navbar.Brand href="/">
    <Avatar sx={{ bgcolor: "green" }} aria-label="recipe">
            AV
          </Avatar>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="me-auto">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="about/">About</Nav.Link>
        <Nav.Link as={Link} to="contact/">Contact</Nav.Link>
        <Nav.Link as={Link} to="skills/">Skills</Nav.Link>
        <Nav.Link as={Link} to="education/">Education</Nav.Link>
        <Nav.Link as={Link} to="projects/">Projects</Nav.Link>
        <Nav.Link as={Link} to="certificate/">Certificates</Nav.Link>
        
        
        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item as={Link} to="education/">Education</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="portfolio/">Portfolio</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="por/">Projects</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown> */}
      </Nav>
    </Navbar.Collapse>
    </Container>
    </Navbar>
    </>
  )
}

export default NavbarFun;