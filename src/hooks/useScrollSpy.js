import { useEffect, useState } from 'react';

/**
 * Custom hook to track active section for navigation highlighting
 * @param {array} sectionIds - Array of section IDs to track
 * @returns {string} - Currently active section ID
 */
export const useScrollSpy = (sectionIds) => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; // Offset for navbar height
      
      // Find all sections that are currently in view
      let currentSection = '';
      let closestDistance = Infinity;

      for (const sectionId of sectionIds) {
        const section = document.getElementById(sectionId);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          const sectionMiddle = offsetTop + offsetHeight / 2;
          const distance = Math.abs(scrollPosition - sectionMiddle);
          
          // Check if we're within the section bounds
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            // Among sections we're currently in, pick the closest one to scroll position
            if (distance < closestDistance) {
              closestDistance = distance;
              currentSection = sectionId;
            }
          }
        }
      }

      // If we found a section, set it as active
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds]);

  return activeSection;
};
