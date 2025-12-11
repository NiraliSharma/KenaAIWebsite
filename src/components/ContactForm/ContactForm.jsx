import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    inquiryType: 'Investment Discussion',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Send email using EmailJS
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: 'service_kenaai',
          template_id: 'template_kenaai',
          user_id: '09GCvyI8uhsG_oJCX', // Replace with your EmailJS public key
          template_params: {
            to_email: 'sharmanirali1103@gmail.com',
            from_name: formData.name,
            from_email: formData.email,
            company: formData.company || 'Not provided',
            phone: formData.phone || 'Not provided',
            inquiry_type: formData.inquiryType,
            message: formData.message || 'No message provided',
          }
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          inquiryType: 'Investment Discussion',
          message: ''
        });
        
        // Clear success message after 5 seconds
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus(null), 5000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-form section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Partner with <span className="highlight">KeNaAI</span>
          </h2>
          <p className="section-description">
            Join us in revolutionizing retail with AI-powered intelligence. 
            Let's discuss how we can create value together.
          </p>
        </motion.div>

        <div className="form-wrapper">
          <motion.div
            className="form-container"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="inquiry-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="company">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="inquiryType">Inquiry Type *</label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  required
                >
                  <option value="Investment Discussion">Investment Discussion</option>
                  <option value="Partnership Inquiry">Partnership Inquiry</option>
                  <option value="General Question">General Question</option>
                  <option value="Media Inquiry">Media Inquiry</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Tell us about your interest in KeNaAI..."
                ></textarea>
              </div>

              {submitStatus === 'success' && (
                <div className="success-message">
                  ✓ Thank you! We'll be in touch shortly.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="error-message">
                  ✗ There was an error submitting your inquiry. Please try again or email us directly at sharmanirali1103@gmail.com
                </div>
              )}

              <button 
                type="submit" 
                className="submit-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
              </button>
            </form>
          </motion.div>

          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="info-card">
              <h3>Why Partner with KeNaAI?</h3>
              <ul className="benefits-list">
                <li>
                  <span className="benefit-icon">💡</span>
                  <div>
                    <strong>First-Mover Advantage</strong>
                    <p>Be part of the AI revolution in retail</p>
                  </div>
                </li>
                <li>
                  <span className="benefit-icon">📈</span>
                  <div>
                    <strong>Massive Market Potential</strong>
                    <p>150K+ stores in US, 5M+ globally</p>
                  </div>
                </li>
                <li>
                  <span className="benefit-icon">🎯</span>
                  <div>
                    <strong>Proven Value Proposition</strong>
                    <p>Measurable ROI and clear market need</p>
                  </div>
                </li>
                <li>
                  <span className="benefit-icon">🚀</span>
                  <div>
                    <strong>Scalable Technology</strong>
                    <p>Cloud-based, modular architecture</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="info-card alternate">
              <h3>Investment Opportunity</h3>
              <p className="investment-text">
                We're seeking strategic partners and investors who share our vision 
                of bringing AI technology to retailers worldwide. Based in Melbourne, 
                we're building the future of retail intelligence.
              </p>
              <div className="investment-stats">
                <div className="stat">
                  <div className="stat-value">$95B</div>
                  <div className="stat-label">Market by 2030</div>
                </div>
                <div className="stat">
                  <div className="stat-value">15.3%</div>
                  <div className="stat-label">Annual Growth</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
