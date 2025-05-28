import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import { Calendar, User, Phone, Users, MessageSquare } from 'lucide-react';

const BookingModal = ({ show, onHide }) => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: 1,
    requests: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onHide();
    }, 1800);
  };

  return (
    <Modal show={show} onHide={onHide} centered size="md" contentClassName="booking-modal-content">
      <Modal.Header closeButton className="border-0 pb-0">
        <Modal.Title className="w-100 text-center fw-bold" style={{ letterSpacing: '1px' }}>
          Book a Table
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="pt-0">
        {submitted ? (
          <div className="text-center py-5">
            <div className="mb-3">
              <Calendar size={48} className="text-success mb-2" />
            </div>
            <h4 className="fw-bold mb-2">Thank you!</h4>
            <p>Your reservation request has been received.</p>
          </div>
        ) : (
          <Form onSubmit={handleSubmit} className="px-2">
            <Row className="g-3">
              <Col md={6}>
                <Form.Group controlId="bookingName">
                  <Form.Label><User size={16} className="me-1" /> Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="bookingPhone">
                  <Form.Label><Phone size={16} className="me-1" /> Phone</Form.Label>
                  <Form.Control
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    pattern="[0-9\-\+\s()]{7,15}"
                    placeholder="e.g. (212) 555-0123"
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="bookingDate">
                  <Form.Label><Calendar size={16} className="me-1" /> Date</Form.Label>
                  <Form.Control
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="bookingTime">
                  <Form.Label>Time</Form.Label>
                  <Form.Control
                    type="time"
                    name="time"
                    value={form.time}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="bookingGuests">
                  <Form.Label><Users size={16} className="me-1" /> Guests</Form.Label>
                  <Form.Control
                    type="number"
                    name="guests"
                    min={1}
                    max={20}
                    value={form.guests}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="bookingRequests">
                  <Form.Label><MessageSquare size={16} className="me-1" /> Special Requests</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="requests"
                    value={form.requests}
                    onChange={handleChange}
                    rows={1}
                    placeholder="Allergies, celebrations, etc."
                  />
                </Form.Group>
              </Col>
            </Row>
            <div className="text-center mt-4">
              <Button
                type="submit"
                variant="primary"
                className="px-5 py-2 fw-semibold shadow-sm"
                style={{ borderRadius: '2rem', letterSpacing: '0.5px', fontSize: '1.1rem' }}
              >
                Book Now
              </Button>
            </div>
          </Form>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default BookingModal; 