import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useSectionFadeIn } from './useSectionFadeIn';

const About = () => {
  const ref = useSectionFadeIn();
  return (
    <section id="about" className="py-5 bg-light section-fadein" ref={ref}>
      <Container>
        <Row className="mb-5">
          <Col className="text-center">
            <h2 className="display-4 fw-bold">Our Story</h2>
            <p className="lead text-muted">Crafting moments, one cup at a time</p>
          </Col>
        </Row>
        <Row className="g-4">
          <Col md={4}>
            <Card className="h-100 border-0 shadow-sm">
              <Card.Img 
                variant="top" 
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                className="rounded-0"
                style={{ height: '300px', objectFit: 'cover' }}
              />
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 border-0 shadow-sm">
              <Card.Img 
                variant="top" 
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                className="rounded-0"
                style={{ height: '300px', objectFit: 'cover' }}
              />
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 border-0 shadow-sm">
              <Card.Img 
                variant="top" 
                src="https://images.unsplash.com/photo-1497636577773-f1231844b336?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                className="rounded-0"
                style={{ height: '300px', objectFit: 'cover' }}
              />
            </Card>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col lg={8} className="mx-auto text-center">
            <p className="lead">
              At Patent Coffee, we believe in the perfect blend of tradition and innovation. 
              Our expert baristas craft each cup with precision, using only the finest beans 
              sourced from sustainable farms. Our homemade cookies and pastries are baked 
              fresh daily, creating the perfect complement to your coffee experience.
            </p>
            <p className="lead">
              We're more than just a coffee shop – we're a community hub where friends meet, 
              ideas brew, and memories are made. Our commitment to quality and customer 
              satisfaction is reflected in every aspect of our service.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About; 