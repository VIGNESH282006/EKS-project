import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/ContactPopup.css';

const ContactPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleWhatsApp = () => {
    // Replace with your WhatsApp number
    const phoneNumber = "8220150430"; // Format: country code + number (no + or spaces)
    const message = "Hello! I'm interested in your construction services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handlePhone = () => {
    // Replace with your phone number
    window.location.href = "tel:+918220150430";
  };

  return (
    <>
      {/* Main Contact Button */}
      <motion.div
        className="contact-popup-trigger"
        onClick={togglePopup}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ 
          rotate: isOpen ? 45 : 0,
          backgroundColor: isOpen ? "#FF4444" : "#4169E1"
        }}
        transition={{ duration: 0.3 }}
      >
        <span className="contact-icon">
          {isOpen ? '✕' : '💬'}
        </span>
      </motion.div>

      {/* Contact Options */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="contact-options"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, staggerChildren: 0.1 }}
          >
            {/* WhatsApp Option */}
            <motion.button
              className="contact-option whatsapp"
              onClick={handleWhatsApp}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              whileHover={{ scale: 1.05, x: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="option-icon">📱</span>
              <span className="option-text">WhatsApp</span>
            </motion.button>

            {/* Phone Option */}
            <motion.button
              className="contact-option phone"
              onClick={handlePhone}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.05, x: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="option-icon">📞</span>
              <span className="option-text">Call Now</span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="contact-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={togglePopup}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default ContactPopup;
