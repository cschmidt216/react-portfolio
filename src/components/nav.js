import React, { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const MyNav = () => {
  const [showNav, setShowNav] = useState(false);

  const handleToggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <Navbar expand="lg" variant="dark" style={{ backgroundColor: '#6B3E91', justifyContent: 'space-between' }}>
      <Container fluid>
        <Navbar.Brand>Christopher Schmidt</Navbar.Brand>
        <Navbar.Toggle
          className="navbar-toggler"
          onClick={handleToggleNav}
          aria-controls="navbar-nav"
          aria-expanded={showNav}
          aria-label="Toggle navigation"
        >
          <FaBars />
        </Navbar.Toggle>
        <Navbar.Collapse in={showNav}>
          <Nav className="ml-auto" style={{ flex: 1, justifyContent: 'flex-end' }}>
            <Link to="/" className="nav-link" style={{ marginRight: '15px' }}>
              Home
            </Link>
            <Link to="/about" className="nav-link" style={{ marginRight: '15px' }}>
              About
            </Link>
            <Link to="/portfolio" className="nav-link" style={{ marginRight: '15px' }}>
              Portfolio
            </Link>
            <Link to="/resume" className="nav-link" style={{ marginRight: '15px' }}>
              My Resume
            </Link>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNav;