import React from 'react';
import useReveal from '../hooks/useReveal';

const Contact = () => {
  useReveal();

  return (
    <main>
      <section id="contact" className="contact bg-soft-1" style={{padding: '120px 0'}}>
        <div className="container">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">Let's start a conversation.</p>

          <div className="contact-wrapper">
            <div className="contact-info">
              <h3 style={{ fontSize: '1.8rem', marginBottom: '20px', color: 'white' }}>Get In Touch</h3>
              <p style={{ marginBottom: '30px', color: 'rgba(255, 255, 255, 0.8)' }}>
                Have questions? Send us a message and we'll respond within 24 hours.
              </p>

              <div style={{ marginBottom: '20px' }}>
                <i className="fa-solid fa-location-dot" style={{ color: 'var(--secondary-color)', width: '25px' }}></i>
                Hi-tech city, Madhapur, Hyderabad, India
              </div>
              <div style={{ marginBottom: '20px' }}>
                <i className="fa-solid fa-envelope" style={{ color: 'var(--secondary-color)', width: '25px' }}></i>
                hello@learnspacedigital.com
              </div>
              <div style={{ marginBottom: '20px' }}>
                <i className="fa-solid fa-phone" style={{ color: 'var(--secondary-color)', width: '25px' }}></i>
                +1 234 567 890
              </div>

              <div style={{ marginTop: '40px' }}>
                <h4 style={{ marginBottom: '15px' }}>Follow Us</h4>
                <div className="social-icons">
                  <a href="#" className="social-icon"><i className="fa-brands fa-instagram"></i></a>
                  <a href="#" className="social-icon"><i className="fa-brands fa-facebook-f"></i></a>
                  <a href="#" className="social-icon"><i className="fa-brands fa-linkedin-in"></i></a>
                  <a href="#" className="social-icon"><i className="fa-brands fa-twitter"></i></a>
                </div>
              </div>
            </div>

            <div className="contact-form-box">
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <input type="number" placeholder="Phone Number" />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Subject" />
                </div>
                <div className="form-group">
                  <textarea rows="4" placeholder="How can we help you?" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary magnetic glow-on-hover" style={{ width: '100%' }}>
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div style={{ marginTop: '50px', height: '300px', background: '#222', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#555' }}>
            <p style={{textAlign: 'center'}}>
              <i className="fa-solid fa-map-location-dot" style={{ fontSize: '3rem', marginBottom: '10px', display: 'block' }}></i>
              Google Map Integration
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
