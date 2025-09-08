import React from 'react';
import { motion } from 'framer-motion';
import ContactSection from '../components/ContactSection';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
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
          <h1>Contact Us</h1>
          <p>Ready to start your project? Get in touch today!</p>
        </div>
      </motion.section>

      <ContactSection />
      <ContactForm />
    </motion.div>
  );
};

export default ContactPage;
