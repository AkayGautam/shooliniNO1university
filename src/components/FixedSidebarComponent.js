import React, { useState, useEffect } from 'react';
import { Styles } from "./common/styles/fixedSidebar";

const FixedSidebarComponent = () => {
  const [currentSection, setCurrentSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.watched-section');

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const sectionRect = section.getBoundingClientRect();

        if (sectionRect.top <= 0) {
          setCurrentSection(section.id);
          return;
        }  
     
      }

      // If no section is in view, remove the fixed class
      setCurrentSection(null);
    };
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
      <Styles> 
          <section className="position-relative"> 
        
    </section>
    </Styles>
  );
};

export default FixedSidebarComponent;
