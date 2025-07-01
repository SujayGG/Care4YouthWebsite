import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = (e) => {
      if (e.target.tagName === 'BUTTON' || e.target.closest('button') || 
          e.target.tagName === 'A' || e.target.closest('a') ||
          e.target.classList.contains('program-card') ||
          e.target.classList.contains('stat-item')) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    document.addEventListener('mousemove', updateCursorPosition);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Add event listeners to interactive elements
    const interactiveElements = document.querySelectorAll('button, a, .program-card, .stat-item');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        className={`cursor-dot ${isHovering ? 'hover' : ''}`}
        style={{
          left: `${position.x - 4}px`,
          top: `${position.y - 4}px`,
        }}
      />
      <div
        className={`cursor-ring ${isHovering ? 'hover' : ''}`}
        style={{
          left: `${position.x - 16}px`,
          top: `${position.y - 16}px`,
        }}
      />
    </>
  );
};

export default CustomCursor; 