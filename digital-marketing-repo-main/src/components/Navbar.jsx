import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);

  // Scroll detection for navbar style change
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  // Close menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  }, [location.pathname]);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev);
  const toggleServices = (e) => {
    e.preventDefault();
    setIsServicesOpen(prev => !prev);
  };

  return (
    <>
      {/* Backdrop overlay */}
      <div
        className={`nav-backdrop ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={closeMobileMenu}
        aria-hidden="true"
      />

      <div className={`pill-nav-container ${scrolled ? 'nav-scrolled' : ''}`}>
        {/* Brand / Logo */}
        <Link to="/" className="brand-pill" onClick={closeMobileMenu}>
          <i className="fa-solid fa-chart-line"></i>
          Learnspace <span>Digital</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="pill-nav" aria-label="Main navigation">
          <ul className="nav-links">
            <li>
              <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
            </li>
            <li>
              <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link>
            </li>
            <li className="dropdown">
              <Link
                to="/services"
                className={`dropbtn ${location.pathname.startsWith('/services') ? 'active' : ''}`}
              >
                Services <i className="fa-solid fa-chevron-down" style={{ fontSize: '0.75em', marginLeft: '4px' }}></i>
              </Link>
              <div className="dropdown-content">
                <Link to="/services/seo-optimization">SEO Optimization</Link>
                <Link to="/services/social-media-marketing">Social Media</Link>
                <Link to="/services/ppc-advertising">PPC Advertising</Link>
                <Link to="/services/content-marketing">Content Marketing</Link>
                <Link to="/services/email-marketing">Email Marketing</Link>
                <Link to="/services/web-design">Web Design</Link>
              </div>
            </li>
            <li>
              <Link to="/blog" className={location.pathname === '/blog' ? 'active' : ''}>Blog</Link>
            </li>
            <li>
              <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
            </li>
          </ul>
        </nav>

        {/* Desktop CTA */}
        <Link to="/contact" className="cta-pill">Get Started</Link>

        {/* Hamburger Button */}
        <button
          className={`mobile-menu-btn ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`mobile-drawer ${isMobileMenuOpen ? 'active' : ''}`}
        ref={menuRef}
        aria-hidden={!isMobileMenuOpen}
      >
        <ul className="mobile-nav-links">
          <li>
            <Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={closeMobileMenu}>
              <i className="fa-solid fa-house"></i> Home
            </Link>
          </li>
          <li>
            <Link to="/about" className={location.pathname === '/about' ? 'active' : ''} onClick={closeMobileMenu}>
              <i className="fa-solid fa-circle-info"></i> About
            </Link>
          </li>
          <li className="mobile-dropdown">
            <button
              className={`mobile-dropdown-toggle ${location.pathname.startsWith('/services') ? 'active' : ''} ${isServicesOpen ? 'open' : ''}`}
              onClick={toggleServices}
              aria-expanded={isServicesOpen}
            >
              <span><i className="fa-solid fa-rocket"></i> Services</span>
              <i className={`fa-solid fa-chevron-down mobile-chevron ${isServicesOpen ? 'rotated' : ''}`}></i>
            </button>
            <div className={`mobile-dropdown-content ${isServicesOpen ? 'open' : ''}`}>
              <Link to="/services/seo-optimization" onClick={closeMobileMenu}>SEO Optimization</Link>
              <Link to="/services/social-media-marketing" onClick={closeMobileMenu}>Social Media</Link>
              <Link to="/services/ppc-advertising" onClick={closeMobileMenu}>PPC Advertising</Link>
              <Link to="/services/content-marketing" onClick={closeMobileMenu}>Content Marketing</Link>
              <Link to="/services/email-marketing" onClick={closeMobileMenu}>Email Marketing</Link>
              <Link to="/services/web-design" onClick={closeMobileMenu}>Web Design</Link>
            </div>
          </li>
          <li>
            <Link to="/blog" className={location.pathname === '/blog' ? 'active' : ''} onClick={closeMobileMenu}>
              <i className="fa-solid fa-blog"></i> Blog
            </Link>
          </li>
          <li>
            <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''} onClick={closeMobileMenu}>
              <i className="fa-solid fa-envelope"></i> Contact
            </Link>
          </li>
        </ul>
        <Link to="/contact" className="mobile-cta-btn" onClick={closeMobileMenu}>
          Get Started <i className="fa-solid fa-arrow-right"></i>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
