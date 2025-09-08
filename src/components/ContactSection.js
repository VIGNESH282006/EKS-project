import React from 'react';
import '../styles/ContactSection.css';

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Ready to Start Your Project?</h2>
        <p className="contact-subtitle">
          Contact us today for a free consultation and let's build your dream together.
        </p>
        
        <div className="contact-methods">
          <div className="contact-item">
            <div className="contact-icon call-icon">📱</div>
            <h3>Call Us</h3>
            <p>+91 98765 43210</p>
          </div>
          
          <div className="contact-item">
            <div className="contact-icon email-icon">📧</div>
            <h3>Email Us</h3>
            <p>info@eksconstruction.com</p>
          </div>
          
          <div className="contact-item">
            <div className="contact-icon location-icon">📍</div>
            <h3>Visit Us</h3>
            <p>Your City, India</p>
          </div>
        </div>
        
        <button className="get-in-touch-btn">GET IN TOUCH</button>
      </div>
    </section>
  );
};

export default ContactSection;