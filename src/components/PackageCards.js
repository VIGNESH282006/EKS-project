import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/PackageCards.css';

const PackageCards = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const packages = [
    {
      id: 'basic',
      title: 'BASIC PACKAGE',
      price: '1999',
      color: 'blue',
      popular: false
    },
    {
      id: 'standard',
      title: 'STANDARD PACKAGE',
      price: '2199',
      color: 'red',
      popular: true
    },
    {
      id: 'premium',
      title: 'PREMIUM PACKAGE',
      price: '2499',
      color: 'blue',
      popular: false
    }
  ];

  const packageSections = [
    'Design',
    'Project Management', 
    'Structure',
    'Bathroom & Plumbing',
    'Flooring',
    'Kitchen & Dining',
    'Door, Windows and Railing',
    'Painting',
    'Electrical',
    'What\'s Not Included'
  ];

  const toggleSection = (packageId, section) => {
    const key = `${packageId}-${section}`;
    setExpandedSections(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <section className="packages-section">
      <div className="packages-container">
        <motion.div 
          className="packages-grid"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              className={`package-card ${pkg.color} ${pkg.popular ? 'popular' : ''}`}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              {pkg.popular && <div className="popular-badge">MOST POPULAR</div>}
              
              <div className="package-header">
                <h3>{pkg.title}</h3>
                <div className="package-price">
                  <span className="currency">₹</span>
                  <span className="amount">{pkg.price}</span>
                  <span className="unit">per sqft</span>
                </div>
              </div>

              <div className="package-features">
                {packageSections.map((section) => (
                  <div key={section} className="feature-item">
                    <button
                      className="feature-header"
                      onClick={() => toggleSection(pkg.id, section)}
                    >
                      <span>{section}</span>
                      <span className="toggle-icon">
                        {expandedSections[`${pkg.id}-${section}`] ? '−' : '+'}
                      </span>
                    </button>
                    {expandedSections[`${pkg.id}-${section}`] && (
                      <motion.div
                        className="feature-content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p>Detailed specifications for {section.toLowerCase()} included in {pkg.title}.</p>
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>

              <button className="get-specification-btn">
                GET DETAILED SPECIFICATION
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PackageCards;
