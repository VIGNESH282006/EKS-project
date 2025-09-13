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
      case '/upcoming-projects':
        return 'OUR WORKS';
      default: return 'HOME';
    }
  }

  // REMOVED "WHY CHOOSE US" from navigation
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
        {/* Logo */}
        <div className="header-logo">
          <Link to="/">
            <img src={logo} alt="EKS Construction Logo" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="nav-desktop">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.name} className={`nav-item ${activeNav === item.name ? 'active' : ''}`} ref={item.dropdown ? dropdownRef : null}>
                {item.dropdown ? (
                  <>
                    <button className="nav-link dropdown-toggle" onClick={handleWorksClick}>
                      {item.name} <span>▼</span>
                    </button>
                    {showWorksDropdown && (
                      <ul className="dropdown-menu">
                        {worksDropdownItems.map((dropdownItem, index) => (
                          <li key={index}>
                            <Link to={dropdownItem.path} className="dropdown-link" onClick={closeMobileMenu}>
                              <span className="dropdown-icon">{dropdownItem.icon}</span>
                              {dropdownItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link to={item.path} className="nav-link" onClick={closeMobileMenu}>
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Hamburger */}
        <button className={`hamburger ${mobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && <div className="mobile-overlay" onClick={closeMobileMenu} />}
      <nav className={`nav-mobile ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-list">
          {navItems.map((item) => (
            <li key={item.name} className="mobile-nav-item">
              {item.dropdown ? (
                <>
                  <button className="mobile-nav-link" onClick={handleWorksClick}>
                    {item.name}
                  </button>
                  {showWorksDropdown && (
                    <ul className="mobile-dropdown-menu">
                      {worksDropdownItems.map((dropdownItem, index) => (
                        <li key={index}>
                          <Link to={dropdownItem.path} className="mobile-dropdown-link" onClick={closeMobileMenu}>
                            <span className="dropdown-icon">{dropdownItem.icon}</span>
                            {dropdownItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link to={item.path} className="mobile-nav-link" onClick={closeMobileMenu}>
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
