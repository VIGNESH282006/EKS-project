import React from 'react';
import { motion } from 'framer-motion';
import CareersSection from '../components/CareersSection';
import ContactForm from '../components/ContactForm';
import '../styles/CareersPage.css';

const CareersPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="careers-page"
    >
      {/* Page Hero */}
      <motion.section 
        className="careers-hero"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <div className="careers-hero-container">
          <div className="hero-graphics">
            <div className="floating-icon">💼</div>
            <div className="floating-icon">🚀</div>
            <div className="floating-icon">⭐</div>
            <div className="floating-icon">🎯</div>
          </div>
          <h1>Join Our Team</h1>
          <p>We call ourselves "Dreamers and Doers" for a reason</p>
          <div className="hero-description">
            <p>We can make happen not just what is possible, but what is impossible. We always collaborate 
            on fresh ideas and new solutions of creativity and innovation. Be part of a team that shapes 
            the future of home construction.</p>
          </div>
        </div>
      </motion.section>

      {/* Careers Section */}
      <CareersSection />

      {/* Contact Form */}
      <ContactForm />
    </motion.div>
  );
};

export default CareersPage;
