import * as React from 'react';
import {Alert, Container, Form, FormControl, Nav, Navbar, NavDropdown, Button} from 'react-bootstrap';

export default function NavbarBase({title, text, type}) {
  return (
    <Navbar bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#"><img src="./logo.webp" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <div className="d-flex">
 
            <Button variant="outline-success">Baixe o app</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
