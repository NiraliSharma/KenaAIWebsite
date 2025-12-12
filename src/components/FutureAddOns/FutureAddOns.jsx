import React from 'react';
import { motion } from 'framer-motion';
import './FutureAddOns.css';

const FutureAddOns = () => {
  const addOns = [
    {
      id: 4,
      title: 'POS & ERP Integration',
      features: [
        'Will sync with major POS systems',
        'Will integrate with existing ERP solutions',
        'Will support loyalty program integration',
        'Will provide unified data management'
      ],
      icon: '🔗',
      imageUrl: '', // Add your image URL here
      timeline: 'Phase 2 Development'
    },
    {
      id: 2,
      title: 'Advanced Analytics & Reporting',
      features: [
        'Will identify best-selling products and peak times',
        'Will analyze customer conversion patterns',
        'Will provide predictive business intelligence',
        'Will generate automated performance reports'
      ],
      icon: '📈',
      imageUrl: '', // Add your image URL here
      timeline: 'Phase 2 Development'
    },
    {
      id: 3,
      title: 'Predictive Inventory Management',
      features: [
        'Will predict demand with high accuracy',
        'Will automate reordering processes',
        'Will integrate with supplier and inventory apps',
        'Will reduce inventory carrying costs by 30%'
      ],
      icon: '🔮',
      imageUrl: '', // Add your image URL here
      timeline: 'Phase 3 Development'
    },
    {
      id: 1,
      title: 'Autonomous Billing & Checkout-Free Experience',
      features: [
        'Will enable frictionless shopping experience',
        'Will integrate with customer receipt app',
        'Will support digital receipts and loyalty programs',
        'Will reduce checkout wait times to zero'
      ],
      icon: '💳',
      imageUrl: '', // Add your image URL here
      timeline: 'Phase 4 Development'
    }
    ,
    {
      id: 5,
      title: 'Smart Signage & Dynamic In-Store Advertising',
      features: [
        'Will deliver personalized promotions',
        'Will increase promotional effectiveness',
        'Will optimize ad placement and timing',
        'Will boost impulse purchases by 35%'
      ],
      icon: '🎯',
      imageUrl: '', // Add your image URL here
      timeline: 'Phase 4 Development'
    }
  ];

  return (
    <section id="future-addons" className="future-addons section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Future Growth: <span className="highlight">The KeNaAI Modular Ecosystem</span>
          </h2>
          <p className="section-description">
            Beyond our MVP, we're planning a comprehensive suite of advanced features that will 
            position KeNaAI as the complete AI solution for modern retail operations.
          </p>
        </motion.div>

        <div className="addons-grid">
          {addOns.map((addon, index) => (
            <motion.div
              key={addon.id}
              className="addon-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="addon-header">
                <div className="addon-icon-wrapper">
                  <span className="addon-icon">{addon.icon}</span>
                </div>
                <span className="addon-timeline">{addon.timeline}</span>
              </div>

              <h3 className="addon-title">{addon.title}</h3>

              <div className="addon-features">
                <ul className="features-list">
                  {addon.features.map((feature, idx) => (
                    <li key={idx} className="feature-item">
                      <span className="feature-check">→</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FutureAddOns;
