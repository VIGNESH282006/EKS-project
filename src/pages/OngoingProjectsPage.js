import React from 'react';
import { motion } from 'framer-motion';
import ProjectsSection from '../components/ProjectsSection';
import ContactForm from '../components/ContactForm';
import '../styles/ProjectsPage.css';

const OngoingProjectsPage = () => {
  const ongoingProjects = [
    {
      id: 1,
      title: 'Premium Residential Tower',
      location: 'Electronic City, Bangalore',
      type: 'Residential',
      area: '45,000 sqft',
      units: '36 Units',
      startDate: 'June 2024',
      expectedCompletion: 'December 2025',
      progress: 35,
      budget: '₹15 Crores',
      image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?w=600&h=400&fit=crop',
      features: ['High-rise Tower', 'Premium Amenities', 'Concierge Service', 'Rooftop Garden'],
      description: 'A luxurious residential tower with premium amenities and modern architecture.',
      color: 'blue'
    },
    {
      id: 2,
      title: 'Tech Park Development',
      location: 'OMR, Chennai',
      type: 'Commercial',
      area: '75,000 sqft',
      floors: '8 Floors',
      startDate: 'August 2024',
      expectedCompletion: 'March 2026',
      progress: 25,
      budget: '₹25 Crores',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop',
      features: ['IT Infrastructure', 'Conference Rooms', 'Cafeteria', 'Recreation Area'],
      description: 'A modern tech park designed for IT companies with world-class infrastructure.',
      color: 'red'
    },
    {
      id: 3,
      title: 'Sustainable Housing Project',
      location: 'Whitefield, Bangalore',
      type: 'Residential',
      area: '28,000 sqft',
      units: '24 Villas',
      startDate: 'September 2024',
      expectedCompletion: 'June 2026',
      progress: 15,
      budget: '₹12 Crores',
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&h=400&fit=crop',
      features: ['Solar Energy', 'Rainwater Harvesting', 'Green Building', 'Community Garden'],
      description: 'An eco-friendly housing project focused on sustainable living and green technology.',
      color: 'blue'
    },
    {
      id: 4,
      title: 'Luxury Resort Construction',
      location: 'Kodaikanal, Tamil Nadu',
      type: 'Hospitality',
      area: '35,000 sqft',
      rooms: '50 Rooms',
      startDate: 'July 2024',
      expectedCompletion: 'April 2026',
      progress: 40,
      budget: '₹18 Crores',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop',
      features: ['Spa & Wellness', 'Multi-cuisine Restaurant', 'Conference Hall', 'Adventure Sports'],
      description: 'A premium resort with luxury accommodations and world-class hospitality facilities.',
      color: 'red'
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
        className="projects-hero ongoing"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <div className="projects-hero-container">
          <div className="hero-graphics">
            <div className="floating-icon">🚧</div>
            <div className="floating-icon">🔨</div>
            <div className="floating-icon">⚙️</div>
            <div className="floating-icon">🏗️</div>
          </div>
          <h1>Ongoing Projects</h1>
          <p>Currently under construction - Building dreams in progress</p>
          <div className="hero-description">
            <p>Take a look at our current construction projects that are in various stages of completion. 
            These projects showcase our ongoing commitment to delivering quality construction 
            with timely completion and excellent craftsmanship.</p>
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <ProjectsSection projects={ongoingProjects} type="ongoing" />

      {/* Contact Form */}
      <ContactForm />
    </motion.div>
  );
};

export default OngoingProjectsPage;
