import React from 'react';
import { motion } from 'framer-motion';
import { Bar, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import './InvestmentValue.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const InvestmentValue = () => {
  const roiData = {
    labels: ['Reduced Shrinkage', 'Labor Efficiency', 'Inventory Optimization', 'Increased Sales'],
    datasets: [
      {
        label: 'Potential Annual Savings/Gains ($K)',
        data: [45, 35, 28, 52],
        backgroundColor: [
          'rgba(237, 96, 66, 0.8)',
          'rgba(237, 96, 66, 0.6)',
          'rgba(237, 96, 66, 0.4)',
          'rgba(237, 96, 66, 0.2)'
        ],
        borderColor: 'rgba(237, 96, 66, 1)',
        borderWidth: 2
      }
    ]
  };

  const marketShareData = {
    labels: ['KeNaAI Target Market', 'Current Competitors', 'Untapped Market'],
    datasets: [
      {
        data: [25, 35, 40],
        backgroundColor: [
          'rgba(237, 96, 66, 0.8)',
          'rgba(112, 112, 112, 0.5)',
          'rgba(176, 176, 176, 0.3)'
        ],
        borderColor: [
          'rgba(237, 96, 66, 1)',
          'rgba(112, 112, 112, 0.8)',
          'rgba(176, 176, 176, 0.5)'
        ],
        borderWidth: 2
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: '#b0b0b0',
          font: {
            size: 12
          }
        }
      },
      tooltip: {
        backgroundColor: 'rgba(26, 26, 26, 0.95)',
        titleColor: '#ffffff',
        bodyColor: '#b0b0b0',
        borderColor: 'rgba(237, 96, 66, 0.5)',
        borderWidth: 1
      }
    },
    scales: {
      x: {
        ticks: { color: '#b0b0b0' },
        grid: { color: 'rgba(237, 96, 66, 0.1)' }
      },
      y: {
        ticks: { color: '#b0b0b0' },
        grid: { color: 'rgba(237, 96, 66, 0.1)' }
      }
    }
  };

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: '#b0b0b0',
          font: {
            size: 12
          },
          padding: 15
        }
      },
      tooltip: {
        backgroundColor: 'rgba(26, 26, 26, 0.95)',
        titleColor: '#ffffff',
        bodyColor: '#b0b0b0',
        borderColor: 'rgba(237, 96, 66, 0.5)',
        borderWidth: 1
      }
    }
  };

  const stats = [
    {
      value: '$847B',
      label: 'Global Retail Analytics Market by 2030',
      growth: '+15.3% CAGR'
    },
    {
      value: '40%',
      label: 'Potential Reduction in Shrinkage',
      growth: 'Industry Average'
    },
    {
      value: '30%',
      label: 'Improvement in Operational Efficiency',
      growth: 'Expected Impact'
    },
    {
      value: '25%',
      label: 'Increase in Sales Conversion',
      growth: 'Projected Uplift'
    }
  ];

  return (
    <section id="investment" className="investment-value section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Why Invest in <span className="highlight">KeNaAI</span>?
          </h2>
          <p className="section-description">
            Compelling market opportunity with measurable ROI and transformative impact on 
            the retail sector worldwide
          </p>
        </motion.div>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-growth">{stat.growth}</div>
            </motion.div>
          ))}
        </div>



        <motion.div
          className="investment-highlights"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="highlights-title">Investment Highlights</h3>
          <div className="highlights-grid">
            <div className="highlight-item">
              <span className="highlight-icon">💰</span>
              <h4>Massive TAM</h4>
              <p>Growing retail sector across Australia and global markets with increasing demand for AI-powered solutions</p>
            </div>
            <div className="highlight-item">
              <span className="highlight-icon">🚀</span>
              <h4>Market Leadership</h4>
              <p>Comprehensive platform serving retailers of all sizes with modular, scalable AI solutions</p>
            </div>
            <div className="highlight-item">
              <span className="highlight-icon">📊</span>
              <h4>Recurring Revenue</h4>
              <p>SaaS model with modular add-ons will create predictable, scalable revenue streams</p>
            </div>
            <div className="highlight-item">
              <span className="highlight-icon">⚡</span>
              <h4>Quick Implementation</h4>
              <p>Minimal setup time means faster customer acquisition and shorter sales cycles</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InvestmentValue;
