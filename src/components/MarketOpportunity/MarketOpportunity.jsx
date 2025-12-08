import React from 'react';
import { motion } from 'framer-motion';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import './MarketOpportunity.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const MarketOpportunity = () => {
  const marketGrowthData = {
    labels: ['2024', '2025', '2026', '2027', '2028', '2029', '2030'],
    datasets: [
      {
        label: 'Retail AI Market Size ($B)',
        data: [12, 18, 27, 39, 54, 72, 95],
        borderColor: 'rgba(237, 96, 66, 1)',
        backgroundColor: 'rgba(237, 96, 66, 0.2)',
        fill: true,
        tension: 0.4,
        pointRadius: 6,
        pointHoverRadius: 8,
        pointBackgroundColor: 'rgba(237, 96, 66, 1)',
        pointBorderColor: '#ffffff',
        pointBorderWidth: 2
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          color: '#b0b0b0',
          font: { size: 14, weight: '600' }
        }
      },
      tooltip: {
        backgroundColor: 'rgba(26, 26, 26, 0.95)',
        titleColor: '#ffffff',
        bodyColor: '#b0b0b0',
        borderColor: 'rgba(237, 96, 66, 0.5)',
        borderWidth: 1,
        padding: 12,
        displayColors: false
      }
    },
    scales: {
      x: {
        ticks: { color: '#b0b0b0', font: { size: 12 } },
        grid: { color: 'rgba(237, 96, 66, 0.1)' }
      },
      y: {
        ticks: { 
          color: '#b0b0b0',
          font: { size: 12 },
          callback: (value) => `$${value}B`
        },
        grid: { color: 'rgba(237, 96, 66, 0.1)' }
      }
    }
  };

  const opportunities = [
    {
      title: 'Massive Addressable Market',
      description: 'Thriving retail sector across Australia, New Zealand, and Asia-Pacific, with expansion potential to millions of retail locations worldwide.',
      icon: '🌍',
      stats: 'Multi-billion dollar opportunity'
    },
    {
      title: 'Scalable for All Retailers',
      description: 'KeNaAI will bring enterprise-grade AI capabilities to retailers of all sizes at accessible price points, with modular features that scale with business needs.',
      icon: '⚖️',
      stats: 'Flexible pricing for all sizes'
    },
    {
      title: 'Growing Demand for Efficiency',
      description: 'Rising labor costs, shrinkage concerns, and competitive pressure from e-commerce are driving unprecedented demand for operational efficiency solutions in physical retail.',
      icon: '📈',
      stats: '15.3% annual market growth'
    }
  ];

  const futureVision = [
    {
      phase: 'Year 1-2',
      milestone: 'MVP Launch & Market Validation',
      goals: 'Deploy core platform with 100+ pilot stores, validate product-market fit, establish case studies demonstrating ROI'
    },
    {
      phase: 'Year 2-3',
      milestone: 'Scale & Feature Expansion',
      goals: 'Expand to 1,000+ stores, launch autonomous billing and advanced analytics modules, establish strategic partnerships'
    },
    {
      phase: 'Year 3-5',
      milestone: 'Market Leadership & Geographic Expansion',
      goals: 'Capture 10% of US small retail market, expand internationally, integrate full modular ecosystem, achieve profitability'
    },
    {
      phase: 'Year 5+',
      milestone: 'Industry Standard & Platform Ecosystem',
      goals: 'Become the default AI platform for small retail, develop partner ecosystem, explore adjacent markets and acquisition opportunities'
    }
  ];

  return (
    <section id="market" className="market-opportunity section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Market Opportunity & <span className="highlight">Future Vision</span>
          </h2>
          <p className="section-description">
            Positioned at the intersection of explosive AI growth and vast underserved retail market
          </p>
        </motion.div>

        <motion.div
          className="market-chart-container"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="chart-card">
            <h3 className="chart-title">Retail AI Market Growth Projection</h3>
            <div className="chart-wrapper">
              <Line data={marketGrowthData} options={chartOptions} />
            </div>
            <p className="chart-note">Source: Industry analyst projections, retail technology research</p>
          </div>
        </motion.div>

        <div className="opportunities-grid">
          {opportunities.map((opportunity, index) => (
            <motion.div
              key={index}
              className="opportunity-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <span className="opportunity-icon">{opportunity.icon}</span>
              <h3 className="opportunity-title">{opportunity.title}</h3>
              <p className="opportunity-description">{opportunity.description}</p>
              <div className="opportunity-stats">{opportunity.stats}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="future-vision"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="vision-title">Our Roadmap to Market Leadership</h3>
          <div className="timeline">
            {futureVision.map((phase, index) => (
              <motion.div
                key={index}
                className="timeline-item"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <div className="timeline-marker">
                  <span className="marker-dot"></span>
                  {index < futureVision.length - 1 && <div className="marker-line"></div>}
                </div>
                <div className="timeline-content">
                  <div className="timeline-phase">{phase.phase}</div>
                  <h4 className="timeline-milestone">{phase.milestone}</h4>
                  <p className="timeline-goals">{phase.goals}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MarketOpportunity;
