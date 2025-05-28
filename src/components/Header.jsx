import React, { useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import BookingModal from './BookingModal';

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar bg="light" expand="lg" className="py-3" fixed="top">
        <Container>
          <Navbar.Brand href="#hero" className="d-flex align-items-center">
            <img
              src="https://images.squarespace-cdn.com/content/v1/5a3811b09f07f5aac269405e/1542657651256-NTHDSFCM5MSH280F56ZN/patent-horizontal-red.png?format=500w"
              alt="Patent Coffee Logo"
              style={{ height: '38px', width: 'auto', marginRight: '12px', objectFit: 'contain' }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Nav.Link href="#hero">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#menu">Menu</Nav.Link>
              <Nav.Link href="#gallery">Gallery</Nav.Link>
              <Nav.Link href="#reviews">Reviews</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              <Button
                variant="primary"
                className="ms-3 px-4 fw-semibold shadow-sm header-book-btn"
                style={{ borderRadius: '2rem', letterSpacing: '0.5px' }}
                onClick={() => setShowModal(true)}
              >
                Book a Table
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <BookingModal show={showModal} onHide={() => setShowModal(false)} />
    </>
  );
};

export default Header; 