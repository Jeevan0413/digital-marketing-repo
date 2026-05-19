import { useEffect } from 'react';

const useReveal = (deps = []) => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const staggerObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const children = entry.target.children;
          Array.from(children).forEach((child, index) => {
            setTimeout(() => {
              child.classList.add('visible');
            }, index * 100);
          });
          staggerObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => revealObserver.observe(el));

    const staggerContainers = document.querySelectorAll('.stagger-container');
    staggerContainers.forEach(container => staggerObserver.observe(container));

    // Cleanup
    return () => {
      revealElements.forEach(el => revealObserver.unobserve(el));
      staggerContainers.forEach(container => staggerObserver.unobserve(container));
      revealObserver.disconnect();
      staggerObserver.disconnect();
    };
  }, deps);
};

export default useReveal;
