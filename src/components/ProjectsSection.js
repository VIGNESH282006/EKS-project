import React from 'react';
import { motion } from 'framer-motion';
import '../styles/ProjectsSection.css';

const ProjectsSection = ({ projects, type }) => {
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

  const getProgressColor = (progress) => {
    if (progress < 25) return '#FF4444';
    if (progress < 50) return '#FFA500';
    if (progress < 75) return '#4169E1';
    return '#4CAF50';
  };

  return (
    <section className="projects-content-section">
      <div className="projects-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Our {type.charAt(0).toUpperCase() + type.slice(1)} Projects</h2>
          <p>
            {type === 'completed' && 'Successfully delivered projects showcasing our expertise'}
            {type === 'ongoing' && 'Projects currently in progress with regular updates'}
            {type === 'upcoming' && 'Exciting new projects launching soon'}
          </p>
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`project-card ${project.color} ${type}`}
              variants={cardVariants}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <span className={`project-type ${project.color}`}>{project.type}</span>
                </div>
                {type === 'ongoing' && (
                  <div className="progress-overlay">
                    <div className="progress-circle">
                      <span>{project.progress}%</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="project-content">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <p className="project-location">📍 {project.location}</p>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-details">
                  <div className="detail-item">
                    <span className="detail-label">Area:</span>
                    <span className="detail-value">{project.area}</span>
                  </div>
                  {project.bedrooms && (
                    <div className="detail-item">
                      <span className="detail-label">Type:</span>
                      <span className="detail-value">{project.bedrooms}</span>
                    </div>
                  )}
                  {project.units && (
                    <div className="detail-item">
                      <span className="detail-label">Units:</span>
                      <span className="detail-value">{project.units}</span>
                    </div>
                  )}
                  {project.floors && (
                    <div className="detail-item">
                      <span className="detail-label">Floors:</span>
                      <span className="detail-value">{project.floors}</span>
                    </div>
                  )}
                  {project.rooms && (
                    <div className="detail-item">
                      <span className="detail-label">Rooms:</span>
                      <span className="detail-value">{project.rooms}</span>
                    </div>
                  )}
                  {project.buildings && (
                    <div className="detail-item">
                      <span className="detail-label">Buildings:</span>
                      <span className="detail-value">{project.buildings}</span>
                    </div>
                  )}
                </div>

                {type === 'ongoing' && project.progress && (
                  <div className="progress-bar-container">
                    <div className="progress-label">Construction Progress</div>
                    <div className="progress-bar">
                      <motion.div 
                        className="progress-fill"
                        style={{ backgroundColor: getProgressColor(project.progress) }}
                        initial={{ width: 0 }}
                        animate={{ width: `${project.progress}%` }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                      />
                    </div>
                    <span className="progress-text">{project.progress}% Complete</span>
                  </div>
                )}

                <div className="project-timeline">
                  {type === 'completed' && (
                    <div className="timeline-item">
                      <span className="timeline-label">Completed:</span>
                      <span className="timeline-value">{project.completedDate}</span>
                    </div>
                  )}
                  {type === 'ongoing' && (
                    <>
                      <div className="timeline-item">
                        <span className="timeline-label">Started:</span>
                        <span className="timeline-value">{project.startDate}</span>
                      </div>
                      <div className="timeline-item">
                        <span className="timeline-label">Expected:</span>
                        <span className="timeline-value">{project.expectedCompletion}</span>
                      </div>
                    </>
                  )}
                  {type === 'upcoming' && (
                    <>
                      <div className="timeline-item">
                        <span className="timeline-label">Launch:</span>
                        <span className="timeline-value">{project.launchDate}</span>
                      </div>
                      <div className="timeline-item">
                        <span className="timeline-label">Start:</span>
                        <span className="timeline-value">{project.expectedStart}</span>
                      </div>
                    </>
                  )}
                </div>

                <div className="project-budget">
                  <span className="budget-label">
                    {type === 'completed' ? 'Project Cost:' : 
                     type === 'ongoing' ? 'Budget:' : 'Estimated Budget:'}
                  </span>
                  <span className={`budget-value ${project.color}`}>
                    {project.budget || project.estimatedBudget}
                  </span>
                </div>

                <div className="project-features">
                  <h4>Key Features:</h4>
                  <div className="features-tags">
                    {project.features.map((feature, idx) => (
                      <span key={idx} className={`feature-tag ${project.color}`}>
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <motion.button 
                  className={`project-btn ${project.color}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {type === 'completed' ? 'View Details' : 
                   type === 'ongoing' ? 'View Progress' : 'Get Updates'}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
