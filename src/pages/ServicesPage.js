import React from 'react';
import { motion } from 'framer-motion';
import ServicesSection from '../components/ServicesSection';
import ContactForm from '../components/ContactForm';
import '../styles/ServicesPage.css';

const ServicesPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Page Hero */}
      <motion.section 
        className="services-hero"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <div className="services-hero-container">
          <div className="hero-graphics">
            <div className="floating-icon">🏗️</div>
            <div className="floating-icon">🔨</div>
            <div className="floating-icon">🏠</div>
            <div className="floating-icon">⚡</div>
          </div>
          <h1>Our Construction Services</h1>
          <p>Comprehensive construction solutions to make your dreams reality</p>
          <div className="hero-description">
            <p>From residential homes to commercial buildings, we provide end-to-end construction services 
            with quality craftsmanship, innovative designs, and timely delivery. Your vision is our mission.</p>
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <ServicesSection />

      {/* Contact Form */}
      <ContactForm />
    </motion.div>
  );
};

export default ServicesPage;
