import React from 'react';
import { motion } from 'framer-motion';
import '../styles/InteriorGallery.css';

const InteriorGallery = () => {
  const galleryItems = [
    {
      id: 1,
      title: 'Modern Living Room',
      category: 'Living Room',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=400&fit=crop',
      description: 'Contemporary design with clean lines and comfortable seating',
      color: 'blue'
    },
    {
      id: 2,
      title: 'Luxury Kitchen',
      category: 'Kitchen',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=400&fit=crop',
      description: 'High-end modular kitchen with smart storage solutions',
      color: 'red'
    },
    {
      id: 3,
      title: 'Master Bedroom',
      category: 'Bedroom',
      image: 'https://images.unsplash.com/photo-1540518614846-7eded47fa843?w=500&h=400&fit=crop',
      description: 'Elegant bedroom design with walk-in wardrobe',
      color: 'blue'
    },
    {
      id: 4,
      title: 'Walk-in Wardrobe',
      category: 'Storage',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=400&fit=crop',
      description: 'Organized storage solution with premium finishes',
      color: 'red'
    },
    {
      id: 5,
      title: 'Dining Space',
      category: 'Dining',
      image: 'https://images.unsplash.com/photo-1556020685-ae41abfc9365?w=500&h=400&fit=crop',
      description: 'Sophisticated dining area with ambient lighting',
      color: 'blue'
    },
    {
      id: 6,
      title: 'Home Office',
      category: 'Office',
      image: 'https://images.unsplash.com/photo-1586119272348-4d7b4b8aa8df?w=500&h=400&fit=crop',
      description: 'Productive workspace with ergonomic design',
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

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="interior-gallery-section">
      <div className="interior-container">
        <motion.div 
          className="gallery-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Our Interior Design Portfolio</h2>
          <p>Explore our stunning collection of interior design projects</p>
        </motion.div>

        <motion.div
          className="gallery-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              className={`gallery-item ${item.color}`}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <div className="gallery-image">
                <img src={item.image} alt={item.title} />
                <div className="gallery-overlay">
                  <div className="overlay-content">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <button className={`view-btn ${item.color}`}>View Details</button>
                  </div>
                </div>
              </div>
              <div className="gallery-info">
                <span className={`category-tag ${item.color}`}>{item.category}</span>
                <h4>{item.title}</h4>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="gallery-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h3>Ready to Transform Your Space?</h3>
          <p>Let's discuss your interior design project and create something amazing together</p>
          <motion.button 
            className="gallery-cta-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default InteriorGallery;
