import React from 'react'
import { Link } from 'react-router-dom';
import {
    Navbar,
    Container,
    Nav,
}from "react-bootstrap"


function Navigationbar(){
return (
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Recent Work</Nav.Link>
      <Nav.Link href="#features">About Me</Nav.Link>
      <Nav.Link href="https://github.com/aaronespinoza">GitHub</Nav.Link>
      <Nav.Link href="https://www.linkedin.com/in/j-b-29201132/">LinkedIn</Nav.Link>
      <Nav.Link href="#pricing">Resume</Nav.Link>
      <Nav.Link href="#pricing">Contact</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
)

}

export default Navigationbar;