import React from 'react';
import { motion } from 'framer-motion';
import PackageCards from '../components/PackageCards';
import CostCalculator from '../components/CostCalculator';
import ContactForm from '../components/ContactForm';
import '../styles/PackagesPage.css';

const PackagesPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Page Hero */}
      <motion.section 
        className="packages-hero"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <div className="packages-hero-container">
          <div className="hero-graphics">
            <div className="floating-icon">🏠</div>
            <div className="floating-icon">🔧</div>
            <div className="floating-icon">📐</div>
          </div>
          <h1>Our Home Construction Packages</h1>
          <p>Choose the perfect package that suits your dream home requirements</p>
          <div className="hero-description">
            <p>We offer comprehensive construction packages designed to meet every budget and requirement. 
            Each package includes professional design, quality materials, and expert craftsmanship 
            to ensure your dream home becomes a reality.</p>
          </div>
        </div>
      </motion.section>

      {/* Package Cards */}
      <PackageCards />

      {/* Cost Calculator */}
      <CostCalculator />

      {/* Contact Form */}
      <ContactForm />
    </motion.div>
  );
};

export default PackagesPage;
