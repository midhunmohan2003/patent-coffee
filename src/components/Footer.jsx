import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { MapPin, Phone, Instagram, Facebook, Mail } from 'lucide-react';

const Footer = ({ onBookTable }) => {
  return (
    <footer id="contact" className="bg-dark text-white py-5 footer-bg-image">
      <Container>
        <Row className="g-4">
          <Col md={4}>
            <h5 className="mb-4">Patent Coffee</h5>
            <p className="mb-4">
              Your perfect coffee destination in the heart of New York City.
              We serve the finest coffee and homemade treats.
            </p>
            <div className="d-flex gap-3">
              <a href="https://instagram.com" className="text-white">
                <Instagram size={24} />
              </a>
              <a href="https://facebook.com" className="text-white">
                <Facebook size={24} />
              </a>
            </div>
          </Col>
          <Col md={4}>
            <h5 className="mb-4">Contact Us</h5>
            <div className="d-flex align-items-center mb-3">
              <MapPin size={20} className="me-2" />
              <span>123 Coffee Street, New York, NY</span>
            </div>
            <div className="d-flex align-items-center mb-3">
              <Phone size={20} className="me-2" />
              <span>+1 212-689-4000</span>
            </div>
            <div className="d-flex align-items-center mb-3">
              <Mail size={20} className="me-2" />
              <a href="mailto:info@drinkpatent.com" className="text-white text-decoration-underline">info@drinkpatent.com</a>
            </div>
            <div className="mt-3 fw-semibold" style={{color: '#ffe7c2'}}>
              We are open DAILY from 8:30am–4pm.
            </div>
          </Col>
          <Col md={4}>
            <h5 className="mb-4">Visit Us Today</h5>
            <p className="mb-4">
              Experience the perfect blend of coffee and comfort.
              Book a table or stop by for a quick coffee break.
            </p>
            <Button variant="light" size="lg" className="w-100" onClick={onBookTable}>
              Book a Table
            </Button>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col className="text-center">
            <p className="mb-0">
              © {new Date().getFullYear()} Patent Coffee. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer; 