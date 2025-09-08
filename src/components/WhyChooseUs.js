import React from 'react';
import '../styles/WhyChooseUs.css';

const features = [
  { 
    icon: '👥', 
    title: 'Experienced Team', 
    description: 'More than 15 years of experience in the construction industry. Our team consists of skilled architects, engineers, and construction specialists who have worked with thousands of clients and hundreds of projects.' 
  },
  { 
    icon: '🏗️', 
    title: 'Quality Construction', 
    description: 'We use only the best construction materials and equipment to guarantee lasting quality.' 
  },
  { 
    icon: '🎨', 
    title: 'Customizable Designs', 
    description: 'We tailor each project to the client needs, ensuring design matches personal style and requirements.' 
  },
  { 
    icon: '📋', 
    title: 'Transparent Process', 
    description: 'A transparent, client-friendly workflow with frequent project updates and clear communication.' 
  },
  { 
    icon: '⏰', 
    title: 'Timely Completion', 
    description: 'Efficient project management and timelines to meet all deadlines.' 
  },
  { 
    icon: '🏠', 
    title: 'In-house Team of Experts', 
    description: 'A complete in-house team: architects, engineers, designers, managers.' 
  },
  { 
    icon: '💻', 
    title: 'Technology-driven Approach', 
    description: 'Modern technology and software ensure high-quality results and timely progress.' 
  },
];

const WhyChooseUs = () => (
  <section className="why-choose-section">
    <div className="why-choose-container">
      <div className="section-header">
        <h2>Why Choose EKS Construction?</h2>
        <p>Feel the happiness in your Home with our expert services</p>
      </div>
      <div className="features-grid">
        {features.map((feature, idx) => (
          <div key={idx} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
