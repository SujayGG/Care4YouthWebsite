import React, { useEffect } from 'react';

const PerformanceMonitor = () => {
  useEffect(() => {
    // Monitor page load performance
    if (window.performance && window.performance.timing) {
      const loadTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;
      console.log(`Page load time: ${loadTime}ms`);
    }

    // Monitor component render time
    const startTime = performance.now();
    
    return () => {
      const endTime = performance.now();
      console.log(`Component render time: ${endTime - startTime}ms`);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor; 