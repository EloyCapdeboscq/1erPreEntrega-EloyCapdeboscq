import {Container, Nav, Navbar } from "react-bootstrap"
import { CartWidget } from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"
import "./Menu.css"

export const Menu = () => {

  return(
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Link to = '/' className="menuTitle">
            Cafeteria Mucho Gusto
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link to="/categoria/cafe" className="menuSubT">Café</Link>
              <Link to="/categoria/combos" className="menuSubT">Combos</Link>                   
            </Nav>
            <Nav>
              <Link to = '/cart'>
                <CartWidget />
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }