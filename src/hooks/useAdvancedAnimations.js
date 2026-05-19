import { useEffect } from 'react';

const useAdvancedAnimations = () => {
  useEffect(() => {
    // --- 1. Header Scroll Effect ---
    const header = document.querySelector('.pill-nav-container');
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        header?.classList.add('scrolled');
      } else {
        header?.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll);

    // --- 2. Scroll Progress Indicator ---
    const existingProgress = document.querySelector('.scroll-progress');
    if (!existingProgress) {
      const progressBar = document.createElement('div');
      progressBar.className = 'scroll-progress';
      document.body.prepend(progressBar);
    }
    
    const updateProgress = () => {
      const progressBar = document.querySelector('.scroll-progress');
      if (progressBar) {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.pageYOffset / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
      }
    };
    window.addEventListener('scroll', updateProgress);

    // --- 3. Magnetic Effect ---
    const handleMagneticMove = (e) => {
      const magneticElements = document.querySelectorAll('.magnetic');
      magneticElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        // Only if mouse is close enough (e.g., 100px)
        const distance = Math.sqrt(x * x + y * y);
        if (distance < 100) {
          element.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px) scale(1.05)`;
        } else {
          element.style.transform = 'translate(0, 0) scale(1)';
        }
      });
    };
    window.addEventListener('mousemove', handleMagneticMove);

    // --- 4. Ripple Effect ---
    const handleRipple = (e) => {
      const button = e.target.closest('.btn');
      if (!button) return;

      const existingRipple = button.querySelector('.ripple');
      if (existingRipple) existingRipple.remove();

      const ripple = document.createElement('span');
      ripple.className = 'ripple';
      
      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';

      button.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    };
    document.addEventListener('click', handleRipple);

    // --- 5. Service Cards Tilt Effect ---
    const handleTilt = (e) => {
      const card = e.target.closest('.service-card, .feature-item');
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px) scale(1.02)`;
    };
    
    const handleTiltLeave = (e) => {
      const card = e.target.closest('.service-card, .feature-item');
      if (!card) return;
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0) scale(1)';
    };

    document.addEventListener('mousemove', handleTilt);
    document.addEventListener('mouseout', handleTiltLeave);

    // --- 6. FAQ Accordion Logic ---
    const handleFAQ = (e) => {
      const question = e.target.closest('.faq-question');
      if (!question) return;

      const item = question.parentElement;
      const isActive = item.classList.contains('active');

      // Close all
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));

      if (!isActive) {
        item.classList.add('active');
      }
    };
    document.addEventListener('click', handleFAQ);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('mousemove', handleMagneticMove);
      document.removeEventListener('click', handleRipple);
      document.removeEventListener('mousemove', handleTilt);
      document.removeEventListener('mouseout', handleTiltLeave);
      document.removeEventListener('click', handleFAQ);
      const progressBar = document.querySelector('.scroll-progress');
      if (progressBar) progressBar.remove();
    };
  }, []);
};

export default useAdvancedAnimations;
