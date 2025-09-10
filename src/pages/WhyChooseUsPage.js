import React from 'react';
import { motion } from 'framer-motion';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import ContactForm from '../components/ContactForm';
import '../styles/WhyChooseUsPage.css';

const WhyChooseUsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="why-choose-us-page"
    >
      {/* Page Hero */}
      <motion.section 
        className="why-choose-hero"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <div className="why-choose-hero-container">
          <div className="hero-graphics">
            <div className="floating-icon">🏆</div>
            <div className="floating-icon">⭐</div>
            <div className="floating-icon">🎯</div>
            <div className="floating-icon">✅</div>
          </div>
          <h1>Why Choose Us?</h1>
          <p>Looking To Construct A Home? Find Out What It Costs</p>
          <div className="hero-description">
            <p>At EKS Construction, we don't just build structures—we build trust, quality, 
            and long-term relationships. Discover why we are the preferred choice for clients 
            across the construction industry.</p>
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us Section */}
      <WhyChooseUsSection />

      {/* Contact Form */}
      <ContactForm />
    </motion.div>
  );
};

export default WhyChooseUsPage;
