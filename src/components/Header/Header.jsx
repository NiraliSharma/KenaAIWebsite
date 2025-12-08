import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo-section">
            <h1 className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ cursor: 'pointer' }}>KeNaAI</h1>
            <span className="tagline">Empowering Retailers with AI</span>
          </div>
          
          <nav className="nav">
            <button onClick={() => scrollToSection('mvp')} className="nav-link">Platform</button>
            <button onClick={() => scrollToSection('how-it-works')} className="nav-link">How It Works</button>
            <button onClick={() => scrollToSection('investment')} className="nav-link">Investment</button>
            <button onClick={() => scrollToSection('contact')} className="nav-link cta-button">Partner With Us</button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
