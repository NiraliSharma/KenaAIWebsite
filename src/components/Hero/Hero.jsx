import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero section">
      <div className="container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            The Future of <span className="highlight">Retail Efficiency</span>
          </motion.h1>
          
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            AI-Powered Intelligence for Modern Retail Operations
          </motion.p>
          
          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            KeNaAI will transform retail operations with affordable, easy-to-deploy 
            camera-based AI solutions. Our modular platform is designed to provide 
            real-time inventory tracking, customer behavior insights, and staff efficiency 
            analytics for retailers of all sizes—without requiring major infrastructure changes.
          </motion.p>

          <motion.div
            className="hero-features"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="hero-feature">
              <span className="feature-icon">🎯</span>
              <span>Affordable & Scalable</span>
            </div>
            <div className="hero-feature">
              <span className="feature-icon">⚡</span>
              <span>Easy Deployment</span>
            </div>
            <div className="hero-feature">
              <span className="feature-icon">📊</span>
              <span>Real-Time Insights</span>
            </div>
          </motion.div>

          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <button onClick={scrollToContact} className="cta-primary">
              Investment Discussion
            </button>
            <button onClick={() => document.getElementById('mvp').scrollIntoView({ behavior: 'smooth' })} className="cta-secondary">
              Explore Platform
            </button>
          </motion.div>
        </motion.div>
      </div>

      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>
    </section>
  );
};

export default Hero;
