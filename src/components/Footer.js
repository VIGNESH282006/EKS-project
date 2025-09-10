import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section company-info">
          <h3>EKS Construction</h3>
          <p className="footer-tagline">Feel the happiness in your Home</p>
          <p className="footer-description">
            Home Construction Experts | Best Building Contractors
          </p>
          <p className="footer-description">
            Building your dreams with quality and excellence since 2010.
          </p>
        </div>
        
        <div className="footer-section quick-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Our Services</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>
        
        <div className="footer-section services">
          <h4>Our Services</h4>
          <ul>
            <li><a href="#residential">Residential Construction</a></li>
            <li><a href="#commercial">Commercial Buildings</a></li>
            <li><a href="#interior">Interior Design</a></li>
            <li><a href="#architectural">Architectural Planning</a></li>
            <li><a href="#project">Project Management</a></li>
            <li><a href="#renovation">Renovation & Remodeling</a></li>
          </ul>
        </div>
        
        <div className="footer-section contact-info">
          <h4>Contact Us</h4>
          <div className="contact-detail">
            <span>info@eksconstruction.com</span>
          </div>
          <div className="contact-detail">
            <span>+91 98765 43210</span>
          </div>
          <div className="contact-detail">
            <span>+91 80123 45678</span>
          </div>
          <div className="contact-detail">
            <span>
              123 Construction Avenue<br />
              Your City, State 123456<br />
              India
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;