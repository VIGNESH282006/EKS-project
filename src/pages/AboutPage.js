import React from 'react';
import { motion } from 'framer-motion';
import AboutSection from '../components/AboutSection';
import WhyChooseUs from '../components/WhyChooseUs';
import ContactForm from '../components/ContactForm';

const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Page Hero */}
      <motion.section 
        className="page-hero"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <div className="page-hero-container">
          <h1>About EKS Construction</h1>
          <p>Feel the happiness in your Home</p>
        </div>
      </motion.section>

      <AboutSection />
      <WhyChooseUs />
      <ContactForm />
    </motion.div>
  );
};

export default AboutPage;
