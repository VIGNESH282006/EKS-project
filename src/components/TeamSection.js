import React from 'react';
import { motion } from 'framer-motion';
import '../styles/TeamSection.css';

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Mr. Ilavarasan',
      role: 'Site Engineer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      description: 'Ilavarasan is our dedicated Site Engineer who ensures every project meets our highest quality standards. With his keen eye for detail and years of field experience, he supervises construction activities and coordinates with various teams to deliver excellence.',
      specialties: ['Quality Control', 'Safety Management', 'Project Coordination', 'Team Leadership'],
      experience: '8+ years',
      projects: '50+ completed projects',
      color: 'blue'
    },
    {
      id: 2,
      name: 'Ms. Umamageshwari',
      role: 'Administrator',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b647?w=400&h=400&fit=crop&crop=face',
      description: 'Umamageshwari is the backbone of our administrative operations. She expertly manages office functions, coordinates between departments, and ensures smooth workflow across all projects.',
      specialties: ['Office Management', 'Process Optimization', 'Team Coordination', 'Document Management'],
      experience: '6+ years',
      projects: 'Managing 100+ projects workflow',
      color: 'red'
    },
    {
      id: 3,
      name: 'Mrs. Pooja S.N',
      role: 'Architect',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      description: 'Pooja is our creative Architect who transforms dreams into beautiful, functional spaces. Her innovative designs blend modern aesthetics with practical functionality, creating homes that truly embody our motto.',
      specialties: ['Residential Design', 'Sustainable Architecture', '3D Visualization', 'Interior Planning'],
      experience: '7+ years',
      projects: '75+ architectural designs',
      color: 'blue'
    },
    {
      id: 4,
      name: 'Mr. P. Murugesan',
      role: 'Site Engineer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      description: 'Murugesan brings extensive expertise in site management and construction supervision. He is known for his problem-solving abilities and his talent for managing complex construction challenges.',
      specialties: ['Construction Management', 'Material Planning', 'Quality Assurance', 'Team Mentoring'],
      experience: '10+ years',
      projects: '80+ successful constructions',
      color: 'red'
    },
    {
      id: 5,
      name: 'Mr. Sivabalan',
      role: 'Draftsman',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face',
      description: 'Sivabalan is our meticulous Draftsman who brings architectural visions to life through precise technical drawings. His expertise in CAD software and attention to detail ensures accuracy.',
      specialties: ['Technical Drawing', 'CAD Design', 'Construction Details', 'Blueprint Preparation'],
      experience: '5+ years',
      projects: '200+ detailed drawings',
      color: 'blue'
    }
  ];

  const teamStats = [
    { number: '50+', label: 'Completed Projects' },
    { number: '15+', label: 'Years Experience' },
    { number: '500+', label: 'Happy Clients' },
    { number: '5', label: 'Expert Professionals' }
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
      {/* Team Members */}
      <section className="team-members-section">
        <div className="team-container">
          <motion.div 
            className="team-intro"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Our Professional Team</h2>
            <p>Meet the experts dedicated to bringing your construction dreams to life</p>
          </motion.div>

          <motion.div
            className="team-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                className={`team-member ${member.color}`}
                variants={cardVariants}
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="member-image">
                  <img src={member.image} alt={member.name} />
                  <div className="member-overlay">
                    <h3>{member.name}</h3>
                    <span>{member.role}</span>
                  </div>
                </div>

                <div className="member-content">
                  <div className="member-header">
                    <h3>{member.name}</h3>
                    <span className={`member-role ${member.color}`}>{member.role}</span>
                  </div>

                  <p className="member-description">{member.description}</p>

                  <div className="member-stats">
                    <div className="stat">
                      <span className="stat-label">Experience</span>
                      <span className="stat-value">{member.experience}</span>
                    </div>
                    <div className="stat">
                      <span className="stat-label">Projects</span>
                      <span className="stat-value">{member.projects}</span>
                    </div>
                  </div>

                  <div className="member-specialties">
                    <h4>Specialties</h4>
                    <div className="specialties-tags">
                      {member.specialties.map((specialty, idx) => (
                        <span key={idx} className={`specialty-tag ${member.color}`}>
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="team-stats-section">
        <div className="team-container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Achievements
          </motion.h2>
          
          <motion.div 
            className="stats-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {teamStats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-card"
                variants={cardVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="join-team-section">
        <div className="team-container">
          <motion.div
            className="join-team-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Join Our Team</h2>
            <p>We are always looking for talented professionals who share our passion for excellence</p>
            <div className="cta-buttons">
              <motion.button 
                className="cta-btn primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Open Positions
              </motion.button>
              <motion.button 
                className="cta-btn secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact HR
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default TeamSection;
