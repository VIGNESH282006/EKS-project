import React from 'react';
import { motion } from 'framer-motion';
import '../styles/ServicesSection.css';

const ServicesSection = () => {
  const services = [
    {
      icon: '🏠',
      title: 'Residential Construction',
      description: 'Custom home construction with modern designs and quality materials that bring happiness to your family.',
      features: [
        'Custom Home Design',
        'Quality Materials', 
        'Modern Architecture',
        'Timely Delivery'
      ],
      startingPrice: '₹25 Lakh',
      color: 'blue',
      gradient: 'linear-gradient(135deg, #4169E1, #6495ED)'
    },
    {
      icon: '🏢',
      title: 'Commercial Buildings',
      description: 'Professional commercial construction for offices and retail spaces with cutting-edge functionality.',
      features: [
        'Office Buildings',
        'Retail Spaces',
        'Industrial Projects',
        'Modern Facilities'
      ],
      startingPrice: '₹50 Lakh',
      color: 'red',
      gradient: 'linear-gradient(135deg, #FF4444, #FF6666)'
    },
    {
      icon: '🎨',
      title: 'Interior Design',
      description: 'Complete interior design solutions that reflect your style and personality perfectly.',
      features: [
        'Space Planning',
        'Color Coordination',
        'Furniture Selection',
        'Lighting Design'
      ],
      startingPrice: '₹2 Lakh',
      color: 'blue',
      gradient: 'linear-gradient(135deg, #4169E1, #6495ED)'
    },
    {
      icon: '📐',
      title: 'Architectural Planning',
      description: 'Comprehensive architectural planning and design services for all building types.',
      features: [
        '3D Modeling',
        'Structural Design',
        'Planning Permission',
        'Technical Drawings'
      ],
      startingPrice: '₹1 Lakh',
      color: 'red',
      gradient: 'linear-gradient(135deg, #FF4444, #FF6666)'
    },
    {
      icon: '📊',
      title: 'Project Management',
      description: 'End-to-end project management ensuring timely completion and quality assurance.',
      features: [
        'Timeline Management',
        'Budget Control',
        'Quality Assurance',
        'Progress Monitoring'
      ],
      pricing: 'Customized Packages',
      color: 'blue',
      gradient: 'linear-gradient(135deg, #4169E1, #6495ED)'
    },
    {
      icon: '🔧',
      title: 'Renovation & Remodeling',
      description: 'Transform existing spaces into modern, functional areas that enhance your lifestyle.',
      features: [
        'Kitchen Remodeling',
        'Bathroom Renovation',
        'Home Extensions',
        'Space Optimization'
      ],
      startingPrice: '₹5 Lakh',
      color: 'red',
      gradient: 'linear-gradient(135deg, #FF4444, #FF6666)'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section className="services-content-section">
      <div className="services-content-container">
        <motion.div 
          className="services-intro"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>What We Offer</h2>
          <p>Professional construction services tailored to your needs</p>
        </motion.div>
        
        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`service-card ${service.color}`}
              variants={cardVariants}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="service-header" style={{ background: service.gradient }}>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
              </div>
              
              <div className="service-content">
                <p className="service-description">{service.description}</p>
                
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <motion.li 
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * idx, duration: 0.4 }}
                    >
                      <span className="feature-check">✓</span>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
                
                <div className="service-pricing">
                  <span className="pricing-label">
                    {service.startingPrice ? `Starting from ${service.startingPrice}` : service.pricing}
                  </span>
                </div>
                
                <motion.button 
                  className={`get-quote-btn ${service.color}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  GET QUOTE
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
