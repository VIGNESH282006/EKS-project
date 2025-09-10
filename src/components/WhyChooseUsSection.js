import React from 'react';
import { motion } from 'framer-motion';
import '../styles/WhyChooseUsSection.css';

const WhyChooseUsSection = () => {
  const whyChooseUsFeatures = [
    {
      icon: '🎯',
      title: 'Unmatched Expertise & Experience',
      description: 'With years of experience in the construction sector, our skilled professionals deliver projects with precision, ensuring top-quality workmanship in every detail.',
      color: 'blue'
    },
    {
      icon: '🏆',
      title: 'Commitment to Quality',
      description: 'We use only the best materials and follow strict quality control measures to ensure that every project meets the highest industry standards.',
      color: 'red'
    },
    {
      icon: '⏰',
      title: 'Timely Project Completion',
      description: 'Deadlines matter. Our efficient project management ensures that every project is completed on time without compromising on quality.',
      color: 'blue'
    },
    {
      icon: '💰',
      title: 'Cost-Effective Solutions',
      description: 'We provide value-driven construction solutions that align with your budget while maintaining superior quality and durability.',
      color: 'red'
    },
    {
      icon: '🛡️',
      title: 'Safety First Approach',
      description: 'Safety is at the heart of everything we do. We follow rigorous safety protocols to protect our workers, clients, and the environment.',
      color: 'blue'
    },
    {
      icon: '🤝',
      title: 'Client-Centric Approach',
      description: 'Your vision is our priority. We work closely with clients, offering transparent communication and personalized solutions to bring their ideas to life.',
      color: 'red'
    },
    {
      icon: '🌱',
      title: 'Sustainability & Innovation',
      description: 'We integrate eco-friendly practices and innovative technologies to create sustainable, future-ready structures.',
      color: 'blue'
    },
    {
      icon: '📈',
      title: 'Strong Track Record',
      description: 'From residential to commercial, we have a proven history of successful project execution and satisfied clients.',
      color: 'red'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="why-choose-us-section">
      <div className="why-choose-container">
        {/* Section Header */}
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Why Choose EKS Construction?</h2>
          <p className="section-description">
            At <strong>EKS Construction</strong>, we don't just build structures—we build trust, quality, 
            and long-term relationships. Here's why we are the preferred choice for clients across the industry:
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="features-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {whyChooseUsFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className={`feature-card ${feature.color}`}
              variants={cardVariants}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <div className="feature-icon-wrapper">
                <span className="feature-icon">{feature.icon}</span>
              </div>
              
              <div className="feature-content">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="cta-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="cta-content">
            <h3>Let EKS Construction be your trusted partner in building a strong and lasting future.</h3>
            <p>📞 Contact us today to discuss your next project!</p>
            <motion.button 
              className="cta-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
