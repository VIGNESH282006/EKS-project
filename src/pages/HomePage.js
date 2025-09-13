import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import ContactSection from '../components/ContactSection';
import ContactForm from '../components/ContactForm';

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
      <AboutSection />
      {/* Added WhyChooseUsSection below AboutSection */}
      <WhyChooseUsSection />
      <ContactSection />
      <ContactForm />
    </motion.div>
  );
};

export default HomePage;
