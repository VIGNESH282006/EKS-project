import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Header.css';
import logo from '../assets/images/logo.jpg';  // Keep this import

const Header = () => {
  const location = useLocation();
  const [activeNav, setActiveNav] = useState(getActiveNav(location.pathname));
  const [showWorksDropdown, setShowWorksDropdown] = useState(false);
  const dropdownRef = useRef(null);

  function getActiveNav(pathname) {
    switch(pathname) {
      case '/': return 'HOME';
      case '/about': return 'ABOUT';
      case '/services': return 'SERVICES';
      case '/interior': return 'INTERIOR';
      case '/packages': return 'PACKAGES';
      case '/our-team': return 'OUR TEAM';
      case '/careers': return 'CAREERS';
      case '/contact': return 'CONTACT';
      case '/completed-projects':
      case '/ongoing-projects':
      case '/upcoming-projects':
        return 'OUR WORKS';
      default: return 'HOME';
    }
  }

  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'SERVICES', path: '/services' },
    { name: 'INTERIOR', path: '/interior' },
    { name: 'PACKAGES', path: '/packages' },
    { name: 'OUR WORKS', dropdown: true },
    { name: 'OUR TEAM', path: '/our-team' },
    { name: 'CAREERS', path: '/careers' },
    { name: 'CONTACT', path: '/contact' }
  ];

  const worksDropdownItems = [
    { name: 'Completed Projects', path: '/completed-projects', icon: '✅' },
    { name: 'Ongoing Projects', path: '/ongoing-projects', icon: '🚧' },
    { name: 'Upcoming Projects', path: '/upcoming-projects', icon: '🏗️' }
  ];

  useEffect(() => {
    setActiveNav(getActiveNav(location.pathname));
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowWorksDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleWorksClick = () => {
    setShowWorksDropdown(!showWorksDropdown);
  };

  return (
    <motion.header 
      className="header"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="header-container">
        {/* Fixed: Use imported logo variable */}
        <motion.div 
          className="header-logo"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <Link to="/">
            <img 
              src={logo}
              alt="EKS Construction Logo" 
              className="logo-image"
            />
          </Link>
        </motion.div>
        
        <nav className="navbar">
          {navItems.map((item) => (
            <div key={item.name} className="nav-item-container" ref={item.dropdown ? dropdownRef : null}>
              {item.dropdown ? (
                <>
                  <motion.button
                    className={`nav-item dropdown-trigger ${activeNav === item.name ? 'active' : ''}`}
                    onClick={handleWorksClick}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.name} <span className="dropdown-arrow">▼</span>
                  </motion.button>
                  
                  <AnimatePresence>
                    {showWorksDropdown && (
                      <motion.div
                        className="dropdown-menu"
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                      >
                        {worksDropdownItems.map((dropdownItem, index) => (
                          <motion.div
                            key={dropdownItem.name}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <Link
                              to={dropdownItem.path}
                              className="dropdown-item"
                              onClick={() => {
                                setShowWorksDropdown(false);
                                setActiveNav('OUR WORKS');
                              }}
                            >
                              <span className="dropdown-icon">{dropdownItem.icon}</span>
                              {dropdownItem.name}
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={item.path}
                    className={`nav-item ${activeNav === item.name ? 'active' : ''}`}
                    onClick={() => setActiveNav(item.name)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
