import React from 'react';
import { Container, Row, Col, Card, Nav, Tab } from 'react-bootstrap';
import { Coffee, Cookie, Gift } from 'lucide-react';
import { useSectionFadeIn } from './useSectionFadeIn';

const Menu = () => {
  const ref = useSectionFadeIn();
  const coffeeItems = [
    { name: 'Espresso', price: '$3.50', description: 'Rich and intense single shot' },
    { name: 'Cappuccino', price: '$4.50', description: 'Espresso with steamed milk and foam' },
    { name: 'Latte', price: '$4.75', description: 'Espresso with steamed milk' },
    { name: 'Cold Brew', price: '$4.25', description: 'Smooth and refreshing' },
  ];

  const pastryItems = [
    { name: 'Chocolate Chip Cookie', price: '$3.00', description: 'Freshly baked daily' },
    { name: 'Croissant', price: '$3.50', description: 'Buttery and flaky' },
    { name: 'Blueberry Muffin', price: '$3.75', description: 'Packed with fresh berries' },
  ];

  const giftItems = [
    { name: 'Coffee Gift Box', price: '$29.99', description: 'Selection of our finest beans' },
    { name: 'Cookie Assortment', price: '$24.99', description: '12-piece cookie selection' },
  ];

  return (
    <section id="menu" className="py-5 section-fadein" style={{ backgroundColor: '#f8f9fa' }} ref={ref}>
      <Container>
        <Row className="mb-5">
          <Col className="text-center">
            <h2 className="display-4 fw-bold">Our Menu</h2>
            <p className="lead text-muted">Discover our carefully crafted offerings</p>
          </Col>
        </Row>

        <Tab.Container defaultActiveKey="coffee">
          <Row>
            <Col lg={3} className="mb-4">
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="coffee" className="d-flex align-items-center">
                    <Coffee size={20} className="me-2" />
                    Coffee
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="pastries" className="d-flex align-items-center">
                    <Cookie size={20} className="me-2" />
                    Pastries
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="gifts" className="d-flex align-items-center">
                    <Gift size={20} className="me-2" />
                    Gift Boxes
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col lg={9}>
              <Tab.Content>
                <Tab.Pane eventKey="coffee">
                  <Row className="g-4">
                    {coffeeItems.map((item, index) => (
                      <Col md={6} key={index}>
                        <Card className="h-100 border-0 shadow-sm">
                          <Card.Body>
                            <div className="d-flex justify-content-between align-items-start">
                              <div>
                                <h5 className="mb-1">{item.name}</h5>
                                <p className="text-muted mb-0">{item.description}</p>
                              </div>
                              <span className="fw-bold">{item.price}</span>
                            </div>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="pastries">
                  <Row className="g-4">
                    {pastryItems.map((item, index) => (
                      <Col md={6} key={index}>
                        <Card className="h-100 border-0 shadow-sm">
                          <Card.Body>
                            <div className="d-flex justify-content-between align-items-start">
                              <div>
                                <h5 className="mb-1">{item.name}</h5>
                                <p className="text-muted mb-0">{item.description}</p>
                              </div>
                              <span className="fw-bold">{item.price}</span>
                            </div>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="gifts">
                  <Row className="g-4">
                    {giftItems.map((item, index) => (
                      <Col md={6} key={index}>
                        <Card className="h-100 border-0 shadow-sm">
                          <Card.Body>
                            <div className="d-flex justify-content-between align-items-start">
                              <div>
                                <h5 className="mb-1">{item.name}</h5>
                                <p className="text-muted mb-0">{item.description}</p>
                              </div>
                              <span className="fw-bold">{item.price}</span>
                            </div>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </section>
  );
};

export default Menu; 