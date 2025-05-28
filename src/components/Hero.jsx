import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { MapPin } from 'lucide-react';

const Hero = ({ onBookTable }) => {
  return (
    <div 
      id="hero"
      className="hero-section min-vh-100 d-flex align-items-center"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Container>
        <Row className="text-white">
          <Col lg={8} className="mx-auto text-center">
            <h1 className="display-1 fw-bold mb-4">Patent Coffee</h1>
            <p className="lead mb-4">
              Where every cup tells a story, and every moment becomes a memory
            </p>
            <div className="d-flex align-items-center justify-content-center mb-4">
              <MapPin size={20} className="me-2" />
              <span>123 Coffee Street, New York, NY</span>
            </div>
            <Button variant="light" href="#menu" size="lg" className="me-3">
              View Menu
            </Button>
            <Button variant="outline-light" size="lg" onClick={onBookTable}>
              Book a Table
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero; 