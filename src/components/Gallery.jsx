import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const images = [
  {
    url: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=800&q=80',
    title: 'Artisan Coffee',
  },
  {
    url: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80',
    title: 'Cozy Corner',
  },
  {
    url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    title: 'Fresh Pastries',
  },
  {
    url: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80',
    title: 'Coffee Art',
  },
  {
    url: 'https://images.unsplash.com/photo-1497636577773-f1231844b336?auto=format&fit=crop&w=800&q=80',
    title: 'Morning Brew',
  },
  {
    url: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80',
    title: 'Coffee Shop',
  },
  {
    url: 'https://hospitalitybizindia.com/wp-content/uploads/2022/12/307331198_10159083616098226_5949433213547382133_n.jpg',
    title: 'Barista',
  },
  {
    url: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80',
    title: 'Coffee Beans',
  },
  {
    url: 'https://images.squarespace-cdn.com/content/v1/59668f3a8419c2f5f1473c09/1519159041485-3ZUNI4HUK7NI2ADPLJ9C/image-asset.jpeg',
    title: 'Cafe Interior',
  },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-5">
      <Container>
        <Row className="mb-5">
          <Col className="text-center">
            <h2 className="display-4 fw-bold">Our Gallery</h2>
            <p className="lead text-muted">A glimpse into our coffee haven</p>
          </Col>
        </Row>
        <div className="masonry-gallery">
          {images.map((img, idx) => (
            <div className="masonry-item" key={idx}>
              <img
                src={img.url}
                alt={img.title}
                className="img-fluid rounded-3 shadow-sm"
                style={{ width: '100%', marginBottom: '1rem', display: 'block' }}
                onError={e => e.target.style.display = 'none'}
              />
              <div className="gallery-caption text-center text-white px-2 py-1">{img.title}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Gallery; 