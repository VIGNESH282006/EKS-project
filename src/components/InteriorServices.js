import React from 'react';
import { motion } from 'framer-motion';
import '../styles/InteriorServices.css';

const InteriorServices = () => {
  const services = [
    {
      icon: '🍳',
      title: 'Modular Kitchens',
      description: 'Custom-designed kitchens that combine style with functionality. Smart storage solutions and premium finishes.',
      features: ['Custom Cabinets', 'Smart Storage', 'Premium Appliances', 'Island Designs'],
      color: 'blue'
    },
    {
      icon: '👗',
      title: 'Walk-in Wardrobes',
      description: 'Luxurious wardrobe solutions with organized storage systems and elegant designs.',
      features: ['Custom Layouts', 'LED Lighting', 'Mirror Systems', 'Accessory Organizers'],
      color: 'red'
    },
    {
      icon: '🛏️',
      title: 'Bedroom Interiors',
      description: 'Create your perfect sanctuary with personalized bedroom designs for ultimate comfort and style.',
      features: ['Custom Furniture', 'Ambient Lighting', 'Space Optimization', 'Comfort Solutions'],
      color: 'blue'
    },
    {
      icon: '🛋️',
      title: 'Living Room Design',
      description: 'Transform your living space into an elegant area for relaxation and entertainment.',
      features: ['Furniture Selection', 'Entertainment Units', 'Lighting Design', 'Space Planning'],
      color: 'red'
    },
    {
      icon: '💡',
      title: 'False Ceiling & Lighting',
      description: 'Innovative ceiling designs with integrated lighting solutions to enhance your space.',
      features: ['LED Integration', 'Mood Lighting', 'Acoustic Solutions', 'Energy Efficient'],
      color: 'blue'
    },
    {
      icon: '📺',
      title: 'Entertainment Units',
      description: 'Custom TV units and entertainment centers designed for your media needs and aesthetic preferences.',
      features: ['Cable Management', 'Storage Solutions', 'Modern Designs', 'Size Customization'],
      color: 'red'
    },
    {
      icon: '🏢',
      title: 'Office Interiors',
      description: 'Productive workspace designs that inspire creativity and enhance work efficiency.',
      features: ['Ergonomic Design', 'Storage Solutions', 'Meeting Rooms', 'Reception Areas'],
      color: 'blue'
    },
    {
      icon: '🌿',
      title: 'Home Automation',
      description: 'Smart home solutions that integrate technology seamlessly with your interior design.',
      features: ['Smart Lighting', 'Climate Control', 'Security Systems', 'Voice Controls'],
      color: 'red'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section className="interior-services-section">
      <div className="interior-container">
        <motion.div 
          className="services-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Our Interior Design Services</h2>
          <p>From concept to completion, we offer comprehensive interior design solutions</p>
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
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p className="service-description">{service.description}</p>
              
              <div className="service-features">
                {service.features.map((feature, idx) => (
                  <span key={idx} className={`feature-badge ${service.color}`}>
                    {feature}
                  </span>
                ))}
              </div>

              <motion.button 
                className={`service-btn ${service.color}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default InteriorServices;
