import React from 'react';
import '../assets/styles/style.css';

const Marquee = ({ children, speed = 30, direction = 'left', pauseOnHover = true }) => {
  return (
    <div className={`marquee-container ${pauseOnHover ? 'pause-on-hover' : ''}`}>
      <div 
        className="marquee-content" 
        style={{ 
          animationDuration: `${speed}s`, 
          flexDirection: direction === 'right' ? 'row-reverse' : 'row' 
        }}
      >
        <div className="marquee-item-group">
          {children}
        </div>
        {/* Duplicate content for seamless loop */}
        <div className="marquee-item-group">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
