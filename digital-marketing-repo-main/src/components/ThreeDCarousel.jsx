import React, { useEffect, useRef, useState } from 'react';
import '../assets/styles/style.css'; 

const ThreeDCarousel = ({ items, renderItem, options = {} }) => {
  const containerRef = useRef(null);
  const wheelRef = useRef(null);
  const [currentRadius, setCurrentRadius] = useState(options.radius || 800);
  
  const config = {
    radius: currentRadius,
    tiltSensitivity: options.tiltSensitivity || 15,
    dragSensitivity: options.dragSensitivity || 0.5,
    inertiaFriction: options.inertiaFriction || 0.95,
    autoSpinSpeed: options.autoSpinSpeed || 0.08,
    idleTimeout: options.idleTimeout || 2000,
    ...options
  };

  const state = useRef({
    rotation: 0,
    tilt: 0,
    targetTilt: 0,
    velocity: 0,
    isDragging: false,
    dragStart: 0,
    initialRotation: 0,
    lastInteraction: Date.now(),
    animationFrame: null
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 480) setCurrentRadius(options.radiusMobile || 350);
      else if (width < 768) setCurrentRadius(options.radiusTablet || 500);
      else setCurrentRadius(options.radius || 800);
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, [options.radius, options.radiusMobile, options.radiusTablet]);

  useEffect(() => {
    if (!wheelRef.current) return;

    const cards = Array.from(wheelRef.current.querySelectorAll('.carousel-card'));
    const count = cards.length;
    
    const setupCards = () => {
      cards.forEach((card, idx) => {
        const angle = (idx * 360) / count;
        card.style.transform = `rotateY(${angle}deg) translateZ(${config.radius}px)`;
      });
    };

    setupCards();

    const handleMouseMove = (e) => {
      if (state.current.isDragging) return;
      state.current.lastInteraction = Date.now();

      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      
      const mouseY = e.clientY - rect.top;
      const normalizedY = (mouseY / rect.height - 0.5) * 2;
      state.current.targetTilt = -normalizedY * config.tiltSensitivity;
    };

    const handleDragStart = (clientX) => {
      state.current.lastInteraction = Date.now();
      state.current.isDragging = true;
      state.current.velocity = 0;
      state.current.dragStart = clientX;
      state.current.initialRotation = state.current.rotation;
      if (containerRef.current) containerRef.current.style.cursor = 'grabbing';
    };

    const handleDragMove = (clientX) => {
      if (!state.current.isDragging) return;
      state.current.lastInteraction = Date.now();
      const deltaX = clientX - state.current.dragStart;
      const newRotation = state.current.initialRotation + deltaX * config.dragSensitivity;
      state.current.velocity = newRotation - state.current.rotation;
      state.current.rotation = newRotation;
    };

    const handleDragEnd = () => {
      if (!state.current.isDragging) return;
      state.current.isDragging = false;
      state.current.lastInteraction = Date.now();
      if (containerRef.current) containerRef.current.style.cursor = 'grab';
    };

    const animate = () => {
      if (!state.current.isDragging) {
        if (Math.abs(state.current.velocity) > 0.01) {
          state.current.rotation += state.current.velocity;
          state.current.velocity *= config.inertiaFriction;
        } else if (Date.now() - state.current.lastInteraction > config.idleTimeout) {
          state.current.rotation += config.autoSpinSpeed;
        }
      }

      state.current.tilt += (state.current.targetTilt - state.current.tilt) * 0.1;

      if (wheelRef.current) {
        wheelRef.current.style.transform = `rotateX(${state.current.tilt}deg) rotateY(${state.current.rotation}deg)`;
        
        // Dynamic opacity based on card position
        const count = cards.length;
        cards.forEach((card, idx) => {
          const cardRotation = (idx * 360) / count + state.current.rotation;
          const normalizedRotation = ((cardRotation % 360) + 360) % 360;
          
          // Cards facing the viewer (near 0 or 360) should be fully opaque
          // Cards at the back (near 180) should be faded
          let opacity = 1;
          if (normalizedRotation > 90 && normalizedRotation < 270) {
            const distFromBack = Math.abs(normalizedRotation - 180);
            opacity = 0.2 + (distFromBack / 90) * 0.8;
          }
          card.style.opacity = opacity;
          card.style.zIndex = Math.round(Math.cos(normalizedRotation * Math.PI / 180) * 100);
        });
      }

      state.current.animationFrame = requestAnimationFrame(animate);
    };

    const container = containerRef.current;
    if (container) {
      const onMouseDown = (e) => handleDragStart(e.clientX);
      const onTouchStart = (e) => handleDragStart(e.touches[0].clientX);
      
      const onMouseMove = (e) => {
        handleMouseMove(e);
        handleDragMove(e.clientX);
      };
      const onTouchMove = (e) => {
        handleDragMove(e.touches[0].clientX);
      };
      
      const onMouseUp = handleDragEnd;
      const onTouchEnd = handleDragEnd;

      container.addEventListener('mousedown', onMouseDown);
      container.addEventListener('touchstart', onTouchStart, { passive: false });
      
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('touchmove', onTouchMove, { passive: false });
      
      window.addEventListener('mouseup', onMouseUp);
      window.addEventListener('touchend', onTouchEnd);

      state.current.animationFrame = requestAnimationFrame(animate);

      return () => {
        cancelAnimationFrame(state.current.animationFrame);
        container.removeEventListener('mousedown', onMouseDown);
        container.removeEventListener('touchstart', onTouchStart);
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('touchmove', onTouchMove);
        window.removeEventListener('mouseup', onMouseUp);
        window.removeEventListener('touchend', onTouchEnd);
      };
    }
  }, [items.length, config.radius, config.tiltSensitivity, config.dragSensitivity, config.inertiaFriction, config.autoSpinSpeed, config.idleTimeout]);

  return (
    <div id="carousel-3d-container" ref={containerRef} className="carousel-3d-container">
      <div className="carousel-wheel" ref={wheelRef}>
        {items.map((item, index) => (
          <div key={index} className="carousel-card">
            {renderItem(item, index)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThreeDCarousel;


