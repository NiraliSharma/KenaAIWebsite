import React from 'react';
import { motion } from 'framer-motion';
import './HowItWorks.css';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: 'Simple Camera Integration',
      description: 'Utilize your existing cameras or install affordable, easy-to-deploy cameras throughout your store. No complex infrastructure changes required.',
      icon: '📹',
      imageUrl: '', // Add your image URL here
      details: [
        'Works with most standard IP cameras',
        'Minimal installation time',
        'Flexible placement options'
      ]
    },
    {
      id: 2,
      title: 'AI Vision Processing',
      description: 'KeNaAI\'s powerful cloud-based AI platform will process video feeds in real-time, analyzing inventory levels, customer movements, and staff activities.',
      icon: '🧠',
      imageUrl: '', // Add your image URL here
      details: [
        'Advanced computer vision algorithms',
        'Real-time processing capabilities',
        'Secure cloud infrastructure'
      ]
    },
    {
      id: 3,
      title: 'Real-Time Insights Dashboard',
      description: 'Data will be instantly pushed to your intuitive web dashboard, providing actionable insights and automated alerts accessible from any device.',
      icon: '📱',
      imageUrl: '', // Add your image URL here
      details: [
        'Mobile-friendly interface',
        'Customizable alerts and notifications',
        'Comprehensive reporting tools'
      ]
    },
    {
      id: 4,
      title: 'Action & Optimization',
      description: 'Use the insights to optimize inventory, improve store layout, enhance staff efficiency, and make data-driven decisions that will boost profitability.',
      icon: '🚀',
      imageUrl: '', // Add your image URL here
      details: [
        'Actionable recommendations',
        'Continuous optimization',
        'Measurable ROI improvements'
      ]
    }
  ];

  return (
    <section id="how-it-works" className="how-it-works section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            How <span className="highlight">KeNaAI Works</span>
          </h2>
          <p className="section-description">
            A simple, four-step process to transform your retail operations with AI-powered intelligence
          </p>
        </motion.div>

        <div className="steps-container">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              className="step-card"
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="step-number">{step.id}</div>
              
              <div className="step-icon-wrapper">
                <span className="step-icon">{step.icon}</span>
              </div>

              <div className="step-content">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
                
                <ul className="step-details">
                  {step.details.map((detail, idx) => (
                    <li key={idx} className="detail-item">
                      <span className="detail-bullet">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              {index < steps.length - 1 && (
                <div className="step-connector">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
