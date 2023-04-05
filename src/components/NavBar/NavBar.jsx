import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap"
import { CartWidget } from "../CartWidget/CartWidget"

export const NavBar = () => {
    return(
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Cafeteria Mucho Gusto</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="#features">Inicio</Nav.Link>
              <Nav.Link href="#features">Productos</Nav.Link>
              <Nav.Link href="#pricing">Nosotros</Nav.Link>
              <Nav.Link href="#pricing">Ubicación</Nav.Link>
              <Nav.Link href="#pricing">Contactos</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link eventKey={2} href="#memes">
                <CartWidget />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }