import React from 'react';
import { motion } from 'framer-motion';
import './FutureAddOns.css';

const FutureAddOns = () => {
  const addOns = [
    {
      id: 1,
      title: 'Autonomous Billing & Checkout-Free Experience',
      description: 'The system will track products picked by each customer using advanced camera vision, automatically generating a virtual cart and triggering seamless payment at exit via mobile app or QR code.',
      features: [
        'Will enable frictionless shopping experience',
        'Will integrate with customer receipt app',
        'Will support digital receipts and loyalty programs',
        'Will reduce checkout wait times to zero'
      ],
      icon: '💳',
      imageUrl: '', // Add your image URL here
      timeline: 'Phase 2 Development'
    },
    {
      id: 2,
      title: 'Advanced Analytics & Reporting',
      description: 'Comprehensive analytics platform that will provide sales heatmaps, conversion rate analysis (footfall vs purchases), and predictive insights to optimize business operations.',
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
      description: 'AI-driven system that will suggest optimal restock orders based on historical trends, automatically generate low-stock purchase lists, and integrate seamlessly with supplier systems.',
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
      id: 4,
      title: 'POS & ERP Integration',
      description: 'KeNaAI will work seamlessly with your current POS and inventory systems, synchronizing with sales platforms, inventory tools, and loyalty programs while exporting data for accounting and supply planning.',
      features: [
        'Will sync with major POS systems',
        'Will integrate with existing ERP solutions',
        'Will support loyalty program integration',
        'Will provide unified data management'
      ],
      icon: '🔗',
      imageUrl: '', // Add your image URL here
      timeline: 'Phase 3 Development'
    },
    {
      id: 5,
      title: 'Smart Signage & Dynamic In-Store Advertising',
      description: 'Intelligent system that will trigger personalized promotional messages based on customer dwell time and product interest, linking customer location to nearby digital displays for targeted marketing.',
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
              <p className="addon-description">{addon.description}</p>

              <div className="addon-features">
                <h4 className="features-heading">Planned Capabilities:</h4>
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
