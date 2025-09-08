import React from 'react';
import { motion } from 'framer-motion';
import InteriorSection from '../components/InteriorSection';
import InteriorServices from '../components/InteriorServices';
import InteriorProcess from '../components/InteriorProcess';
import InteriorGallery from '../components/InteriorGallery';
import ContactForm from '../components/ContactForm';
import '../styles/InteriorPage.css';

const InteriorPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="interior-page"
    >
      {/* Page Hero */}
      <motion.section 
        className="interior-hero"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <div className="interior-hero-container">
          <div className="hero-graphics">
            <div className="floating-icon">🎨</div>
            <div className="floating-icon">🏠</div>
            <div className="floating-icon">💡</div>
            <div className="floating-icon">✨</div>
          </div>
          <h1>Interior Design Excellence</h1>
          <p>Transform your space into a masterpiece with EKS Construction</p>
          <div className="hero-description">
            <p>We don't just design interiors; we create experiences. Every space tells a story, 
            and we're here to help you tell yours with elegance, functionality, and innovation. 
            From concept to completion, we bring your vision to life.</p>
          </div>
          <motion.button 
            className="hero-cta-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Design Journey
          </motion.button>
        </div>
      </motion.section>

      {/* Interior Section */}
      <InteriorSection />

      {/* Interior Services */}
      <InteriorServices />

      {/* Interior Process */}
      <InteriorProcess />

      {/* Interior Gallery */}
      <InteriorGallery />

      {/* Contact Form */}
      <ContactForm />
    </motion.div>
  );
};

export default InteriorPage;
