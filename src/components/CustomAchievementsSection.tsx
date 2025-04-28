
import React from 'react';
import AchievementsSection from './AchievementsSection';

// This component wraps the original AchievementsSection and injects the LeetCode image
const CustomAchievementsSection: React.FC = () => {
  // Add CSS that targets the second grid item in the achievements section
  React.useEffect(() => {
    // Create a style element
    const style = document.createElement('style');
    style.innerHTML = `
      #achievements .grid > div:nth-child(2) {
        position: relative;
      }
      
      #achievements .grid > div:nth-child(2)::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url('/lovable-uploads/0a5769e8-4d3e-45c0-8005-857ab56564e7.png');
        background-size: cover;
        background-position: center;
        border-radius: 8px;
        z-index: 1;
        opacity: 0.5; /* Optional: make it slightly transparent */
      }
    `;
    
    // Append the style element to head
    document.head.appendChild(style);
    
    // Clean up function
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  
  // Return the original achievements section
  return <AchievementsSection />;
};

export default CustomAchievementsSection;
