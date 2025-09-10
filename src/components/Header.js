import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import '../styles/Header.css';

const Header = () => {
  const location = useLocation();
  const [activeNav, setActiveNav] = useState(getActiveNav(location.pathname));
  const [showWorksDropdown, setShowWorksDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  function getActiveNav(pathname) {
    switch (pathname) {
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
      case '/why-choose-us': return 'WHY CHOOSE US';
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
    { name: 'WHY CHOOSE US', path: '/why-choose-us' },
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

  const handleWorksClick = (e) => {
    e.stopPropagation();
    setShowWorksDropdown(!showWorksDropdown);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setShowWorksDropdown(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">
          <Link to="/">
            <img src={logo} alt="EKS Construction" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="nav-desktop">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.name} className={`nav-item ${activeNav === item.name ? 'active' : ''}`}>
                {item.dropdown ? (
                  <div className="dropdown" ref={dropdownRef}>
                    <span 
                      className="nav-link dropdown-toggle" 
                      onClick={handleWorksClick}
                    >
                      {item.name} ▼
                    </span>
                    {showWorksDropdown && (
                      <ul className="dropdown-menu">
                        {worksDropdownItems.map((dropItem) => (
                          <li key={dropItem.path}>
                            <Link 
                              to={dropItem.path} 
                              className="dropdown-link"
                              onClick={() => {
                                setActiveNav('OUR WORKS');
                                setShowWorksDropdown(false);
                              }}
                            >
                              <span className="dropdown-icon">{dropItem.icon}</span>
                              {dropItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link 
                    to={item.path} 
                    className="nav-link"
                    onClick={() => setActiveNav(item.name)}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Hamburger */}
        <button 
          className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile Navigation */}
        <nav className={`nav-mobile ${mobileMenuOpen ? 'open' : ''}`}>
          <ul className="mobile-nav-list">
            {navItems.map((item) => (
              <li key={item.name} className="mobile-nav-item">
                {item.dropdown ? (
                  <div className="mobile-dropdown">
                    <span 
                      className="mobile-nav-link dropdown-toggle" 
                      onClick={handleWorksClick}
                    >
                      {item.name} ▼
                    </span>
                    {showWorksDropdown && (
                      <ul className="mobile-dropdown-menu">
                        {worksDropdownItems.map((dropItem) => (
                          <li key={dropItem.path}>
                            <Link 
                              to={dropItem.path} 
                              className="mobile-dropdown-link"
                              onClick={closeMobileMenu}
                            >
                              <span className="dropdown-icon">{dropItem.icon}</span>
                              {dropItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link 
                    to={item.path} 
                    className="mobile-nav-link"
                    onClick={closeMobileMenu}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Overlay */}
        {mobileMenuOpen && <div className="mobile-overlay" onClick={closeMobileMenu}></div>}
      </div>
    </header>
  );
};

export default Header;
