import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './style.css'

export default function NavbarMenu() {
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">GameStore</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home" className="nav-link-custom">Home</Nav.Link>
            <Nav.Link href="#streams" className="nav-link-custom">Streams</Nav.Link>
            <Nav.Link href="#store" className="nav-link-custom">Store</Nav.Link>
            <Nav.Link href="#news" className="nav-link-custom">News</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}
