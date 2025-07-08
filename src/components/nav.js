import React, { useEffect, useState } from 'react';
import './nav.css';

const Nav = () => {
  const [currentHash, setCurrentHash] = useState('');
  
  // Update active link when hash changes
  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };
    
    // Set initial hash
    handleHashChange();
    
    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Helper function to check if a link is active
  const isActive = (hash) => {
    // Home is special case - either empty hash or #home
    if (hash === '#') {
      return currentHash === '' || currentHash === '#' || currentHash === '#home';
    }
    return currentHash === hash;
  };

  return (
    <div className='container'>
      <nav className='container-link'>
        <a
          href="#"
          className={isActive('#') ? 'link-child active' : 'link-child'}
        >
          Home
        </a>
        <a
          href="#about"
          className={isActive('#about') ? 'link-child active' : 'link-child'}
        >
          About me
        </a>
        <a
          href="#contact"
          className={isActive('#contact') ? 'link-child active' : 'link-child'}
        >
          Contact me
        </a>
      </nav>
    </div>
  );
};

export default Nav;