import React from 'react';
import { motion } from 'framer-motion';
import '../styles/InteriorProcess.css';

const InteriorProcess = () => {
  const processSteps = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'We start with a detailed discussion about your vision, requirements, budget, and timeline to understand your unique needs.',
      icon: '💬',
      color: 'blue'
    },
    {
      step: '02',
      title: 'Site Visit & Measurement',
      description: 'Our team visits your space to take precise measurements, assess the structure, and capture photos for accurate planning.',
      icon: '📏',
      color: 'red'
    },
    {
      step: '03',
      title: 'Design Development',
      description: 'We create detailed 3D designs, mood boards, and material selections that bring your vision to life.',
      icon: '🎨',
      color: 'blue'
    },
    {
      step: '04',
      title: 'Proposal & Agreement',
      description: 'We present a comprehensive proposal with detailed quotations, timelines, and terms for your approval.',
      icon: '📋',
      color: 'red'
    },
    {
      step: '05',
      title: 'Project Execution',
      description: 'Our skilled craftsmen begin the transformation process with regular quality checks and progress updates.',
      icon: '🔨',
      color: 'blue'
    },
    {
      step: '06',
      title: 'Final Handover',
      description: 'After thorough quality inspection, we hand over your beautifully transformed space ready to enjoy.',
      icon: '🏠',
      color: 'red'
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

  const stepVariants = {
    hidden: { 
      opacity: 0, 
      x: -50
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="interior-process-section">
      <div className="interior-container">
        <motion.div 
          className="process-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Our Design Process</h2>
          <p>From concept to completion, we follow a structured approach to deliver exceptional results</p>
        </motion.div>

        <motion.div
          className="process-timeline"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              className={`process-step ${step.color}`}
              variants={stepVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <div className="step-number">{step.step}</div>
              <div className="step-icon">{step.icon}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
              {index < processSteps.length - 1 && <div className="step-connector"></div>}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default InteriorProcess;
