import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import pokeball from '../images/Poke_Ball.png';

class NavbarPokemon extends React.Component {
  render() {
    return (
      <>
        <Navbar bg="navbar" expand="xl" variant="dark">
          <Navbar.Brand
            href="#home"
            className="text-white pokemon-font nav-margin"
          >
            <img src={pokeball} width="30" height="30" alt="pokeball" /> Pokémon
            TCG
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="nav-margin"
          />
          <Navbar.Collapse id="basic-navbar-nav" className="white">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default NavbarPokemon;
