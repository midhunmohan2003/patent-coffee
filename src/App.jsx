import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

import './App.css'

function App() {
  const [showBookingModal, setShowBookingModal] = useState(false);

  useEffect(() => {
    if (showBookingModal) {
      document.body.classList.add('modal-blur-bg');
    } else {
      document.body.classList.remove('modal-blur-bg');
    }
    return () => document.body.classList.remove('modal-blur-bg');
  }, [showBookingModal]);

  return (
    <div className="page-fadein">
      <Header />
      <Hero onBookTable={() => setShowBookingModal(true)} />
      <About />
      <Menu />
      <Gallery />
      <Reviews />
      <Footer onBookTable={() => setShowBookingModal(true)} />
      <BookingModal show={showBookingModal} onHide={() => setShowBookingModal(false)} />
    </div>
  );
}

export default App;
