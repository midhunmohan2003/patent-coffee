import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Star } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      name: 'Sarah Johnson',
      rating: 5,
      comment: 'The best coffee shop in New York! Their cold brew is absolutely amazing, and the cookies are to die for.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
    },
    {
      name: 'Michael Chen',
      rating: 5,
      comment: 'Great atmosphere and even better coffee. The baristas are friendly and the pastries are always fresh.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
    },
    {
      name: 'Emily Rodriguez',
      rating: 5,
      comment: 'I love coming here to work. The WiFi is fast, the coffee is perfect, and the staff is incredibly welcoming.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
    },
  ];

  const renderStars = (rating) => {
    return Array(5)
      .fill(0)
      .map((_, index) => (
        <Star
          key={index}
          size={20}
          className={index < rating ? 'text-warning' : 'text-muted'}
          fill={index < rating ? 'currentColor' : 'none'}
        />
      ));
  };

  return (
    <section id="reviews" className="py-5 bg-light">
      <Container>
        <Row className="mb-5">
          <Col className="text-center">
            <h2 className="display-4 fw-bold">Customer Reviews</h2>
            <p className="lead text-muted">What our customers say about us</p>
          </Col>
        </Row>
        <Row className="g-4">
          {reviews.map((review, index) => (
            <Col md={4} key={index}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="text-center">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="rounded-circle mb-3"
                    style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                  />
                  <div className="mb-3">{renderStars(review.rating)}</div>
                  <p className="mb-3">{review.comment}</p>
                  <h5 className="mb-0">{review.name}</h5>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Reviews; 