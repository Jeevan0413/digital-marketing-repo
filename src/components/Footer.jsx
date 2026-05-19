import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const navigate = useNavigate();

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  const go = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  const platformLinks = [
    { label: 'Home', path: '/', icon: 'fa-house' },
    { label: 'About Us', path: '/about', icon: 'fa-circle-info' },
    { label: 'Services', path: '/services', icon: 'fa-rocket' },
    { label: 'Blog', path: '/blog', icon: 'fa-blog' },
    { label: 'Contact', path: '/contact', icon: 'fa-envelope' },
  ];

  const legalLinks = [
    { label: 'Privacy Policy', path: '/privacy-policy' },
    { label: 'Terms of Service', path: '/terms-and-conditions' },
    { label: 'Cookie Policy', path: '/cookie-policy' },
  ];

  const socials = [
    { icon: 'fa-brands fa-instagram', href: '#', label: 'Instagram' },
    { icon: 'fa-brands fa-facebook-f', href: '#', label: 'Facebook' },
    { icon: 'fa-brands fa-linkedin-in', href: '#', label: 'LinkedIn' },
    { icon: 'fa-brands fa-twitter', href: '#', label: 'Twitter/X' },
    { icon: 'fa-brands fa-youtube', href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="saas-footer">
      <div className="footer-glow"></div>

      {/* ── Newsletter Strip ── */}
      <div className="footer-newsletter-strip">
        <div className="container">
          <div className="fnl-inner">
            <div className="fnl-text">
              <span className="fnl-badge"><i className="fa-solid fa-bolt"></i> Stay Ahead</span>
              <h3>Digital Marketing Insights, Weekly</h3>
              <p>Join 5,000+ marketers getting actionable tips, trends and strategies straight to their inbox.</p>
            </div>
            <form className="fnl-form" onSubmit={handleSubscribe}>
              <div className="fnl-input-row">
                <i className="fa-solid fa-envelope fnl-icon"></i>
                <input
                  type="email"
                  className="fnl-input"
                  placeholder="Your email address"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="fnl-btn">
                  {subscribed
                    ? <><i className="fa-solid fa-check"></i> Subscribed!</>
                    : <>Subscribe <i className="fa-solid fa-arrow-right"></i></>}
                </button>
              </div>
              <p className="fnl-note"><i className="fa-solid fa-lock"></i> No spam, ever. Unsubscribe anytime.</p>
            </form>
          </div>
        </div>
      </div>

      {/* ── Main Footer Grid ── */}
      <div className="container">
        <div className="footer-grid-saas">

          {/* Column 1 – Brand */}
          <div className="footer-col brand-col">
            <button className="brand-logo-white footer-brand-btn" onClick={() => go('/')}>
              LearnSpace<span> Digital</span>
            </button>
            <p className="brand-paragraph">
              Empowering ambitious brands with data-backed digital strategies and boundary-pushing creativity.
              We turn complexity into competitive advantage.
            </p>
            <div className="footer-contact-info">
              <a href="mailto:hello@learnspacedigital.com" className="footer-contact-item">
                <i className="fa-solid fa-envelope"></i>
                hello@learnspacedigital.com
              </a>
              <a href="tel:+911234567890" className="footer-contact-item">
                <i className="fa-solid fa-phone"></i>
                +91 123 456 7890
              </a>
              <span className="footer-contact-item no-link">
                <i className="fa-solid fa-location-dot"></i>
                Hi-Tech City, Hyderabad, India
              </span>
            </div>
          </div>

          {/* Column 2 – Platform */}
          <div className="footer-col">
            <h4 className="footer-heading">Platform</h4>
            <ul className="footer-link-list">
              {platformLinks.map(link => (
                <li key={link.path}>
                  <button className="footer-nav-btn" onClick={() => go(link.path)}>
                    <i className={`fa-solid ${link.icon} fnb-icon`}></i>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 – Support */}
          <div className="footer-col">
            <h4 className="footer-heading">Support</h4>
            <ul className="footer-link-list">
              <li>
                <button className="footer-nav-btn" onClick={() => go('/contact')}>
                  <i className="fa-solid fa-headset fnb-icon"></i>Contact Us
                </button>
              </li>
              {legalLinks.map(link => (
                <li key={link.path}>
                  <button className="footer-nav-btn" onClick={() => go(link.path)}>
                    <i className="fa-solid fa-file-lines fnb-icon"></i>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 – Socials + Trust */}
          <div className="footer-col">
            <h4 className="footer-heading">Follow Us</h4>
            <div className="social-glass-group" style={{ marginBottom: '30px' }}>
              {socials.map(s => (
                <a key={s.label} href={s.href} className="social-glass-item" aria-label={s.label}>
                  <i className={s.icon}></i>
                </a>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="footer-trust-block">
              <p className="footer-trust-title">Certified Partners</p>
              <div className="footer-trust-badges">
                <span className="ftb-badge"><i className="fa-brands fa-google"></i> Google</span>
                <span className="ftb-badge"><i className="fa-brands fa-meta"></i> Meta</span>
                <span className="ftb-badge"><i className="fa-solid fa-shield-halved"></i> ISO</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="footer-bottom-saas">
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <p className="copyright-text">
              &copy; {new Date().getFullYear()} <strong>LearnSpace Digital</strong>. All rights reserved.
              Crafted with <i className="fa-solid fa-heart" style={{ color: '#f43f5e', margin: '0 3px' }}></i> in Hyderabad.
            </p>
            <div className="footer-bottom-legal">
              {legalLinks.map(link => (
                <button key={link.path} className="fbl-link" onClick={() => go(link.path)}>
                  {link.label}
                </button>
              ))}
            </div>
            <div className="footer-badge">
              <span>Next-Gen Marketing <i className="fa-solid fa-bolt"></i></span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
