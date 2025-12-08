import React from 'react';
import { motion } from 'framer-motion';
import './DemoVideo.css';

const DemoVideo = () => {
  // Add your video URL here (YouTube embed, Vimeo, or direct video URL)
  const videoUrl = '';
  
  return (
    <section id="demo" className="demo-video section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            KeNaAI in Action: <span className="highlight">Concept Demo</span>
          </h2>
          <p className="section-description">
            Experience the future of retail intelligence through our concept demonstration
          </p>
        </motion.div>

        <motion.div
          className="video-container"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {videoUrl ? (
            <div className="video-wrapper">
              {videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be') ? (
                <iframe
                  src={videoUrl}
                  title="KeNaAI Demo Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="demo-video"
                ></iframe>
              ) : videoUrl.includes('vimeo.com') ? (
                <iframe
                  src={videoUrl}
                  title="KeNaAI Demo Video"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  className="demo-video"
                ></iframe>
              ) : (
                <video controls className="demo-video">
                  <source src={videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          ) : (
            <div className="video-placeholder">
            <div className="placeholder-content">
              <div className="play-button">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 5.14v13.72L19 12L8 5.14z" fill="currentColor"/>
                </svg>
              </div>
              <h3>Concept Demo Video</h3>
              <p className="demo-description">
                Watch how KeNaAI will transform retail operations with real-time inventory tracking,
                customer analytics, and intelligent alerts
              </p>
              <ul className="demo-features">
                <li>📊 Live Dashboard Interface</li>
                <li>🔥 Customer Heatmap Visualization</li>
                <li>📦 Real-Time Inventory Monitoring</li>
                <li>🚨 Anomaly Detection in Action</li>
                <li>📱 Mobile-Friendly Management</li>
              </ul>
            </div>
          </div>
          )}
        </motion.div>

        <motion.div
          className="demo-highlights"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="highlight-card">
            <span className="highlight-number">01</span>
            <h4>Real-Time Monitoring</h4>
            <p>See how the dashboard will display live inventory levels and customer movement patterns</p>
          </div>
          <div className="highlight-card">
            <span className="highlight-number">02</span>
            <h4>Intelligent Alerts</h4>
            <p>Experience automated notifications for low stock, anomalies, and operational insights</p>
          </div>
          <div className="highlight-card">
            <span className="highlight-number">03</span>
            <h4>Actionable Analytics</h4>
            <p>Discover how data-driven recommendations will optimize store performance</p>
          </div>
        </motion.div>

        <motion.div
          className="demo-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3>Ready to Transform Your Retail Operations?</h3>
          <p>Join us in revolutionizing the retail industry with accessible, scalable AI technology</p>
          <button 
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="cta-button"
          >
            Schedule an Investment Discussion
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default DemoVideo;
