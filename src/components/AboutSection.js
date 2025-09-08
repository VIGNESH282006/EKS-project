import React from 'react';
import { motion } from 'framer-motion';
import '../styles/AboutSection.css';

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <motion.div 
          className="about-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="about-text">
            <h2>About <span className="highlight">EKS Construction</span></h2>
            
            <p>
              <strong>EKS Construction</strong> is a leading construction company specializing in residential and
              commercial projects. We bring years of experience, skilled craftsmanship, and
              innovative solutions to every project.
            </p>
            
            <p>
              Our mission is simple: to build homes that bring happiness and create spaces where
              memories are made. We use only the finest materials and employ the most skilled
              professionals in the industry.
            </p>
            
            <motion.button 
              className="learn-more-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More About Us →
            </motion.button>
          </div>

          <div className="about-visual">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&h=400&fit=crop"
              alt="About EKS Construction"
              className="about-image"
            />
          </div>
        </motion.div>
        
        <motion.div 
          className="stats-section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="stats-grid">
            <motion.div 
              className="stat-card"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <span className="stat-number">15+</span>
              <span className="stat-label">Years Experience</span>
            </motion.div>
            
            <motion.div 
              className="stat-card"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <span className="stat-number">500+</span>
              <span className="stat-label">Happy Clients</span>
            </motion.div>
            
            <motion.div 
              className="stat-card"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <span className="stat-number">1000+</span>
              <span className="stat-label">Projects Completed</span>
            </motion.div>

            <motion.div 
              className="stat-card"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <span className="stat-number">50+</span>
              <span className="stat-label">Expert Team</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
