import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section brand">
            <h2 className="footer-logo">KeNaAI</h2>
            <p className="footer-tagline">Empowering Retailers with AI</p>
            <p className="footer-description">
              Transforming retail operations worldwide with affordable, intelligent camera-based AI solutions for businesses of all sizes.
            </p>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">Platform</h3>
            <ul className="footer-links">
              <li><button onClick={() => scrollToSection('mvp')}>MVP Features</button></li>
              <li><button onClick={() => scrollToSection('how-it-works')}>How It Works</button></li>
              <li><button onClick={() => scrollToSection('future-addons')}>Future Add-Ons</button></li>
              <li><button onClick={() => scrollToSection('demo')}>Demo</button></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">Investment</h3>
            <ul className="footer-links">
              <li><button onClick={() => scrollToSection('investment')}>Why Invest</button></li>
              <li><button onClick={() => scrollToSection('market')}>Market Opportunity</button></li>
              <li><button onClick={() => scrollToSection('contact')}>Partner With Us</button></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">Connect</h3>
            {/* Social links temporarily commented out */}
            {/* <div className="social-links">
              <a href="#" className="social-link" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="Email">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </a>
            </div> */}
            <p className="contact-email">test@gmail.com</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} KeNaAI. All rights reserved.
          </p>
          <div className="footer-legal">
            <button className="legal-link">Privacy Policy</button>
            <span className="separator">•</span>
            <button className="legal-link">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
