import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import PackagesPage from './pages/PackagesPage';
import TeamPage from './pages/TeamPage';
import CareersPage from './pages/CareersPage';
import InteriorPage from './pages/InteriorPage';  // New import
import CompletedProjectsPage from './pages/CompletedProjectsPage';
import OngoingProjectsPage from './pages/OngoingProjectsPage';
import UpcomingProjectsPage from './pages/UpcomingProjectsPage';
import ScrollToTop from './components/ScrollToTop';
import AutoScrollToTop from './components/AutoScrollToTop';
import './styles/globals.css';
import WhyChooseUsPage from './pages/WhyChooseUsPage';


function App() {
  return (
    <Router>
      <div className="App">
        <AutoScrollToTop />
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/packages" element={<PackagesPage />} />
          <Route path="/interior" element={<InteriorPage />} />  {/* New route */}
          <Route path="/our-team" element={<TeamPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/completed-projects" element={<CompletedProjectsPage />} />
          <Route path="/ongoing-projects" element={<OngoingProjectsPage />} />
          <Route path="/upcoming-projects" element={<UpcomingProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/why-choose-us" element={<WhyChooseUsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
