import React, { useState } from 'react';
import '../styles/ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section className="contact-form-section">
      <div className="contact-form-container">
        <div className="contact-form-header">
          <h2>Get In Touch</h2>
          <p>Ready to start your project? Contact us for a free consultation and detailed quote.</p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
            </div>
          </div>
          <div className="form-group">
            <input type="tel" name="phone" placeholder="Your Phone Number" value={formData.phone} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <textarea name="message" placeholder="Tell us about your project..." rows="5" value={formData.message} onChange={handleChange} required />
          </div>
          <div className="form-actions">
            <button type="submit" className="submit-btn">GET FREE QUOTE</button>
            <button type="button" className="call-btn">CALL NOW: +91 98765 43210</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
