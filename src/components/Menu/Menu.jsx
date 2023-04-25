import {Container, Nav, Navbar} from "react-bootstrap"
import { CartWidget } from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"

export const Menu = () => {

  return(
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Link to = '/'>
            Cafeteria Mucho Gusto
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavLink to = '/categoria/cafe'>Cafe</NavLink>
              <NavLink to = '/categoria/combos'>Combos</NavLink>
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