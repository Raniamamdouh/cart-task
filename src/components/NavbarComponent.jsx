import React, { Component } from 'react';
import { Navbar, Nav, Button, Badge } from 'react-bootstrap';
import { FaShoppingCart, FaMoon, FaSun } from 'react-icons/fa';

class NavbarComponent extends Component {
  render() {
    const { theme, toggleTheme, cart, emptyCart, resetCart } = this.props;

    return (
      <Navbar bg="info" variant="light" expand="lg" className="p-3"> 
        <Navbar.Brand href="#" className={`text-${theme === 'light' ? 'dark' : 'light'}`}>
          React Cart
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Button variant="light" onClick={toggleTheme} className="mx-2">
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </Button>

          <Button variant="light" onClick={emptyCart} className="mx-2">
            Empty Cart
          </Button>

          <Button variant="light" onClick={resetCart} className="mx-2">
            Reset
          </Button>

          <Button variant="light" className="mx-2">
            <FaShoppingCart />
            <Badge bg="danger" className="ms-2">{cart.length}</Badge>
          </Button>
        </Nav>
      </Navbar>
    );
  }
}

export default NavbarComponent;