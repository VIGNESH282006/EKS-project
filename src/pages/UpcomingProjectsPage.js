import React from 'react';
import { motion } from 'framer-motion';
import ProjectsSection from '../components/ProjectsSection';
import ContactForm from '../components/ContactForm';
import '../styles/ProjectsPage.css';

const UpcomingProjectsPage = () => {
  const upcomingProjects = [
    {
      id: 1,
      title: 'Smart City Residential Complex',
      location: 'HITEC City, Hyderabad',
      type: 'Residential',
      area: '85,000 sqft',
      units: '80 Apartments',
      launchDate: 'January 2025',
      expectedStart: 'March 2025',
      estimatedBudget: '₹30 Crores',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop',
      features: ['Smart Home Automation', 'AI Security System', 'EV Charging Stations', 'Co-working Spaces'],
      description: 'A futuristic residential complex with cutting-edge smart home technology and amenities.',
      color: 'blue'
    },
    {
      id: 2,
      title: 'Green Office Campus',
      location: 'Sarjapur Road, Bangalore',
      type: 'Commercial',
      area: '120,000 sqft',
      floors: '12 Floors',
      launchDate: 'February 2025',
      expectedStart: 'May 2025',
      estimatedBudget: '₹45 Crores',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop',
      features: ['LEED Certified', 'Vertical Gardens', 'Natural Lighting', 'Waste Management'],
      description: 'An eco-friendly office campus designed to achieve LEED Gold certification.',
      color: 'red'
    },
    {
      id: 3,
      title: 'Heritage Villa Development',
      location: 'Pondicherry',
      type: 'Residential',
      area: '15,000 sqft',
      units: '8 Villas',
      launchDate: 'March 2025',
      expectedStart: 'June 2025',
      estimatedBudget: '₹8 Crores',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop',
      features: ['Colonial Architecture', 'Heritage Design', 'Courtyard Gardens', 'Premium Finishes'],
      description: 'Exclusive heritage-style villas inspired by colonial architecture and modern luxury.',
      color: 'blue'
    },
    {
      id: 4,
      title: 'Medical Center Complex',
      location: 'T. Nagar, Chennai',
      type: 'Healthcare',
      area: '40,000 sqft',
      floors: '6 Floors',
      launchDate: 'April 2025',
      expectedStart: 'July 2025',
      estimatedBudget: '₹20 Crores',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop',
      features: ['Advanced Medical Equipment', 'Emergency Services', 'Diagnostic Center', 'Patient Parking'],
      description: 'A state-of-the-art medical center with modern healthcare facilities and equipment.',
      color: 'red'
    },
    {
      id: 5,
      title: 'Educational Institution Campus',
      location: 'Coimbatore, Tamil Nadu',
      type: 'Educational',
      area: '95,000 sqft',
      buildings: '5 Buildings',
      launchDate: 'May 2025',
      expectedStart: 'August 2025',
      estimatedBudget: '₹35 Crores',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop',
      features: ['Modern Classrooms', 'Laboratory Facilities', 'Sports Complex', 'Digital Library'],
      description: 'A comprehensive educational campus with modern teaching facilities and infrastructure.',
      color: 'blue'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="projects-page"
    >
      {/* Page Hero */}
      <motion.section 
        className="projects-hero upcoming"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <div className="projects-hero-container">
          <div className="hero-graphics">
            <div className="floating-icon">🏗️</div>
            <div className="floating-icon">🎯</div>
            <div className="floating-icon">🚀</div>
            <div className="floating-icon">💡</div>
          </div>
          <h1>Upcoming Projects</h1>
          <p>Future innovations - Exciting projects launching soon</p>
          <div className="hero-description">
            <p>Discover our upcoming construction projects that will set new standards in design, 
            technology, and sustainability. These projects represent our vision for the future 
            of construction and our commitment to innovation.</p>
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <ProjectsSection projects={upcomingProjects} type="upcoming" />

      {/* Contact Form */}
      <ContactForm />
    </motion.div>
  );
};

export default UpcomingProjectsPage;
