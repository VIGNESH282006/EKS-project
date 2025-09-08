import React from 'react';
import { motion } from 'framer-motion';
import '../styles/CareersSection.css';

const CareersSection = () => {
  const jobOpenings = [
    {
      title: 'HR Training and Development Manager',
      department: 'Human Resources',
      location: 'Chennai',
      type: 'Full-time',
      description: 'The HR Training and Development Manager is responsible for improving the productivity of the organization\'s employees. This position assesses company-wide developmental needs to drive training initiatives and identifies and arranges suitable training solutions for employees.',
      requirements: [
        'Assess company-wide developmental needs',
        'Drive training initiatives',
        'Design effective education methods',
        'Enhance performance recognition'
      ],
      color: 'blue'
    },
    {
      title: 'HR Executive',
      department: 'Human Resources',
      location: 'Chennai',
      type: 'Full-time',
      description: 'The HR Executive will be responsible for managing various human resource functions, including recruitment, onboarding, employee relations, performance management, and compliance.',
      requirements: [
        'Manage recruitment processes',
        'Handle employee onboarding',
        'Maintain employee relations',
        'Ensure HR policy compliance'
      ],
      color: 'red'
    },
    {
      title: 'Graphic Designer cum Video Editor',
      department: 'Marketing',
      location: 'Chennai',
      type: 'Full-time',
      description: 'The Graphic Designer cum Video Editor will be responsible for creating visually appealing graphics and editing engaging video content for EKS Construction. This role involves designing marketing materials and social media content.',
      requirements: [
        'Create visually appealing graphics',
        'Edit engaging video content',
        'Design marketing materials',
        'Support marketing initiatives'
      ],
      color: 'blue'
    },
    {
      title: 'Telecaller',
      department: 'Sales',
      location: 'Chennai',
      type: 'Full-time',
      description: 'The Telecaller will be responsible for attending to enquiry calls, engaging with potential customers who have enquired through the website, and persuading them to visit the EKS Construction office.',
      requirements: [
        'Attend enquiry calls',
        'Engage potential customers',
        'Make follow-up calls',
        'Explain construction packages'
      ],
      color: 'red'
    },
    {
      title: 'Field Marketing Executive',
      department: 'Marketing',
      location: 'Chennai',
      type: 'Full-time',
      description: 'The Field Marketing Executive will be responsible for executing field marketing activities, including visiting plot layouts, meeting with layout promoters, and identifying prime locations for EKS Construction advertisement boards.',
      requirements: [
        'Execute field marketing activities',
        'Visit plot layouts',
        'Meet layout promoters',
        'Manage marketing zones'
      ],
      color: 'blue'
    }
  ];

  const jobCategories = [
    {
      category: 'Architecture & Design',
      positions: [
        { title: 'Architects', locations: ['Chennai', 'Bangalore', 'Hyderabad'], description: 'Creative and experienced architects to join our teams. If you have a keen eye for design and a passion for creating beautiful and functional spaces, we want to hear from you.' },
        { title: '3D Visualizer', locations: ['Chennai'], description: 'Specialize in 3D architectural visualization. Help us bring our architectural designs to life with your visualization skills.' }
      ],
      color: 'blue'
    },
    {
      category: 'Engineering',
      positions: [
        { title: 'Civil Engineer', locations: ['Chennai'], description: 'Excellent opportunities for civil engineers. Whether you are a seasoned professional or a fresher looking to start your career in civil engineering.' }
      ],
      color: 'red'
    },
    {
      category: 'Sales & Marketing',
      positions: [
        { title: 'CRM Executive', locations: ['Chennai'], description: 'Maintain strong relationships with our clients. If you have experience in CRM, this is a great opportunity to advance your career.' },
        { title: 'Digital Marketing', locations: ['Chennai'], description: 'We need skilled digital marketers. If you have experience in SEO, SEM, and social media marketing, we want to hear from you.' },
        { title: 'Marketing Professional', locations: ['Chennai'], description: 'Marketing professionals who can help us promote our services and reach new clients.' }
      ],
      color: 'blue'
    },
    {
      category: 'Administration',
      positions: [
        { title: 'Front Office', locations: ['Chennai'], description: 'Our front office team is the face of EKS Construction. If you are organized, friendly, and efficient, consider applying for our front office positions.' }
      ],
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
    <>
      {/* Company Values */}
      <section className="company-values">
        <div className="careers-container">
          <motion.div 
            className="values-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Why Choose EKS Construction?</h2>
            <p>Are you passionate about architecture and construction? EKS Construction, a leading Turnkey Home construction service provider, is expanding its team and looking for talented individuals to join us in Chennai, Bangalore, Hyderabad, Coimbatore, and Pondicherry.</p>
            <div className="values-grid">
              <div className="value-item">
                <div className="value-icon">🌟</div>
                <h3>Innovation</h3>
                <p>We offer a range of exciting opportunities for professionals at all stages of their careers.</p>
              </div>
              <div className="value-item">
                <div className="value-icon">🤝</div>
                <h3>Support</h3>
                <p>We pride ourselves on creating an innovative and supportive work environment.</p>
              </div>
              <div className="value-item">
                <div className="value-icon">🚀</div>
                <h3>Excellence</h3>
                <p>Our commitment to excellence drives us to seek dedicated and skilled individuals.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Current Job Openings */}
      <section className="job-openings">
        <div className="careers-container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Current Job Openings</h2>
            <p>Join our dynamic team and help shape the future of construction</p>
          </motion.div>

          <motion.div
            className="jobs-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {jobOpenings.map((job, index) => (
              <motion.div
                key={index}
                className={`job-card ${job.color}`}
                variants={cardVariants}
                whileHover={{ 
                  y: -5, 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="job-header">
                  <h3>{job.title}</h3>
                  <div className="job-meta">
                    <span className="department">{job.department}</span>
                    <span className="location">📍 {job.location}</span>
                    <span className="type">⏰ {job.type}</span>
                  </div>
                </div>

                <p className="job-description">{job.description}</p>

                <div className="job-requirements">
                  <h4>Key Responsibilities:</h4>
                  <ul>
                    {job.requirements.map((req, idx) => (
                      <li key={idx}>{req}</li>
                    ))}
                  </ul>
                </div>

                <motion.button 
                  className={`apply-btn ${job.color}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Apply Now
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Job Categories */}
      <section className="job-categories">
        <div className="careers-container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Job Categories</h2>
            <p>Explore opportunities across various departments</p>
          </motion.div>

          <motion.div
            className="categories-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {jobCategories.map((category, index) => (
              <motion.div
                key={index}
                className={`category-card ${category.color}`}
                variants={cardVariants}
                whileHover={{ 
                  y: -5, 
                  transition: { duration: 0.3 }
                }}
              >
                <h3>{category.category}</h3>
                <div className="positions-list">
                  {category.positions.map((position, idx) => (
                    <div key={idx} className="position-item">
                      <h4>{position.title}</h4>
                      <div className="locations">
                        {position.locations.map((location, locIdx) => (
                          <span key={locIdx} className="location-tag">{location}</span>
                        ))}
                      </div>
                      <p>{position.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="careers-cta">
        <div className="careers-container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Ready to Start Your Career with Us?</h2>
            <p>At EKS Construction, we believe in nurturing talent and providing a platform for growth and success. If you are looking for a rewarding career in architecture and construction, join us and be part of a team that shapes the future of home construction.</p>
            <div className="cta-buttons">
              <motion.button 
                className="cta-btn primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View All Openings
              </motion.button>
              <motion.button 
                className="cta-btn secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Submit Resume
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default CareersSection;
