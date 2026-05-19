import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import ServiceDetail from './pages/ServiceDetail';
import LegalPage from './pages/LegalPage';
import './assets/styles/style.css';
import './assets/styles/whatsapp_styles.css';
import useAdvancedAnimations from './hooks/useAdvancedAnimations';
import ScrollToTop from './components/ScrollToTop';

function App() {
  useAdvancedAnimations();
  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:serviceId" element={<ServiceDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:blogId" element={<BlogDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<LegalPage />} />
          <Route path="/terms-and-conditions" element={<LegalPage />} />
          <Route path="/cookie-policy" element={<LegalPage />} />
        </Routes>
        <Footer />
        
        {/* WhatsApp Float Button */}
        <a href="https://wa.me/1234567890" className="whatsapp-float" target="_blank" rel="noopener noreferrer" aria-label="Chat with us on WhatsApp">
          <i className="fa-brands fa-whatsapp whatsapp-icon"></i>
        </a>
      </div>
    </Router>
  );
}

export default App;
