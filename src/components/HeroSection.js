import React from 'react';
import '../styles/HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="video-background">
        <video autoPlay loop muted playsInline>
          <source src="/videos/background-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay"></div>
      </div>
      
      <div className="hero-content">
        <h1 className="hero-title">EKS Construction</h1>
        <p className="hero-subtitle">Feel the happiness in your Home</p>
        <p className="hero-description">
          We are expert home construction contractors dedicated to building your dream home with
          quality, precision, and care. Your happiness is our success.
        </p>
        
        <div className="hero-buttons">
          <button className="btn-primary">OUR SERVICES</button>
          <button className="btn-secondary">GET QUOTE</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;