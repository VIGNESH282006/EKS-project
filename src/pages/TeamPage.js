import React from 'react';
import { motion } from 'framer-motion';
import TeamSection from '../components/TeamSection';
import ContactForm from '../components/ContactForm';
import '../styles/TeamPage.css';

const TeamPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="team-page"
    >
      {/* Page Hero */}
      <motion.section 
        className="team-hero"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <div className="team-hero-container">
          <div className="hero-graphics">
            <div className="floating-icon">👥</div>
            <div className="floating-icon">🏆</div>
            <div className="floating-icon">⭐</div>
            <div className="floating-icon">🎯</div>
          </div>
          <h1>Meet Our Expert Team</h1>
          <p>The talented professionals who make your construction dreams come true</p>
          <div className="hero-description">
            <p>At EKS Construction, our success is built on the expertise, dedication, and passion of our team members. 
            Each professional brings unique skills and experience to ensure that every project meets our high standards 
            of quality and client satisfaction.</p>
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
      <TeamSection />

      {/* Contact Form */}
      <ContactForm />
    </motion.div>
  );
};

export default TeamPage;
