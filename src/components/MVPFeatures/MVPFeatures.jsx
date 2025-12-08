import React from 'react';
import { motion } from 'framer-motion';
import './MVPFeatures.css';
import inventoryImage from '../../../assets/images/real-time-inventory.png';
import dwellTimeImage from '../../../assets/images/customer-dwell-time-analysis.png';
import staffMonitoringImage from '../../../assets/images/privacy-staff-monitoring.png';
import dashboardImage from '../../../assets/images/intelligent-dashboard.png';
import anomalyDetectionImage from '../../../assets/images/anomaly-detection.png';

const MVPFeatures = () => {
  const features = [
    {
      id: 1,
      title: 'Real-Time Inventory Tracking',
      description: 'Our AI-powered camera vision will monitor stock levels on shelves in real-time, automatically trigger low-stock alerts, and display comprehensive stock insights on an intuitive web-based dashboard.',
      benefits: [
        'Will prevent out-of-stock situations',
        'Will reduce manual inventory checks by 80%',
        'Will optimize reordering processes'
      ],
      icon: '📦',
      mediaNote: 'Animated dashboard showing real-time shelf monitoring and stock alerts',
      imageUrl: inventoryImage
    },
    {
      id: 2,
      title: 'Customer Dwell Time Analytics',
      description: 'The platform will track how long customers spend in each section of your store, generating detailed heatmaps that identify high-traffic and low-traffic zones to optimize store layout and product placement.',
      benefits: [
        'Reveal shopping patterns',
        'Optimize product placement',
        'Increase conversion by 25%'
      ],
      icon: '🔥',
      imageUrl: dwellTimeImage,
      mediaNote: 'Interactive heatmap visualization with customer movement patterns'
    },
    {
      id: 3,
      title: 'Privacy-First Staff Monitoring',
      description: 'KeNaAI will monitor staff presence in key zones while respecting privacy, detecting time spent restocking, identifying idle zones, and providing insights to improve operational efficiency.',
      benefits: [
        'Optimize staff allocation',
        'Identify training needs',
        'Improve efficiency by 30%'
      ],
      icon: '👥',
      imageUrl: staffMonitoringImage,
      mediaNote: 'Privacy-compliant staff activity dashboard with zone analytics'
    },
    {
      id: 4,
      title: 'Intelligent Dashboard',
      description: 'Store owners will access a clean, intuitive web interface displaying real-time shelf data, traffic heatmaps, low-stock alerts, and comprehensive daily summary reports—all in one centralized location.',
      benefits: [
        'Actionable insights instantly',
        'Data-driven decisions',
        'Accessible anywhere'
      ],
      icon: '📊',
      imageUrl: dashboardImage,
      mediaNote: 'Modern dashboard interface with real-time metrics and alerts'
    },
    {
      id: 5,
      title: 'Anomaly Detection & Alerts',
      description: 'Advanced AI algorithms will detect suspicious behavior such as potential theft, unusual loitering, or other anomalies, immediately alerting store managers via email or SMS to enable rapid response.',
      benefits: [
        'Will reduce shrinkage by up to 40%',
        'Will enable immediate incident response',
        'Will improve overall store security'
      ],
      icon: '🚨',
      imageUrl: anomalyDetectionImage,
      mediaNote: 'Real-time alert system with anomaly detection visualization',
      
    }
  ];

  return (
    <section id="mvp" className="mvp-features section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Core Platform: <span className="highlight">MVP Features</span>
          </h2>
          <p className="section-description">
            Our minimum viable product will deliver essential AI-powered capabilities designed 
            to transform retail operations from day one, regardless of store size.
          </p>
        </motion.div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="feature-media">
                {feature.imageUrl ? (
                  <img src={feature.imageUrl} alt={feature.title} className="feature-image" />
                ) : (
                  <div className="media-placeholder">
                    <span className="media-icon">{feature.icon}</span>
                    <p className="media-note">{feature.mediaNote}</p>
                  </div>
                )}
              </div>

              <div className="feature-content">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                
                <div className="feature-benefits">
                  <div className="benefits-badges">
                    {feature.benefits.map((benefit, idx) => (
                      <span key={idx} className="benefit-badge">
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MVPFeatures;
