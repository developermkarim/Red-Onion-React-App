import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';
 import { ShoppingCartIcon } from '@heroicons/react/solid'
import './Header.css';
 const Header = () => {
    return (
        <>
  <Navbar bg="primary">
    <Container>
    <Navbar.Brand as={Link} to="/home"><img src={logo} alt="" width={150} /></Navbar.Brand>
    <Nav className="ms-auto">
      <Nav.Link className='cartStyle'><ShoppingCartIcon/></Nav.Link>
      <Nav.Link as={Link} to="/login">Log In</Nav.Link>
      <Nav.Link as={Link} to="/signUp">Sign Up</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
</>
    );
};

export default Header;