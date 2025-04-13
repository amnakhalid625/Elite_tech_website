import React from 'react';
import { FaCode, FaShoppingCart, FaBullhorn, FaCloud, FaBrain, FaShieldAlt,FaLightbulb, FaChartLine,FaNetworkWired} from 'react-icons/fa';
import './services.css';

const servicesData = [
  {
    icon: <FaCode />,
    title: 'Software Development',
    items: [
      'Custom Software Solutions (ERP, CRM, HRMS)',
      'Web & Mobile App Development (MERN, Flutter, React Native)',
      'SaaS Products & MVP Development'
    ]
  },
  {
    icon: <FaShoppingCart />,
    title: 'Web & E-commerce Development',
    items: [
      'Corporate Websites (WordPress, Elementor)',
      'Online Stores (Shopify, WooCommerce, Magento)',
      'UI/UX Design & Prototyping'
    ]
  },
  {
    icon: <FaBullhorn />,
    title: 'Digital Marketing & Growth',
    items: [
      'SEO & Content Strategy',
      'Paid Media (Meta, Google Ads)',
      'Email Marketing & CRM Integration'
    ]
  },
  {
    icon: <FaCloud />,
    title: 'Cloud & DevOps',
    items: [
      'AWS, Azure, Google Cloud Setup',
      'CI/CD Pipelines, Docker, Kubernetes',
      'Infrastructure & Server Management'
    ]
  },
  {
    icon: <FaBrain />,
    title: 'Data & AI Solutions',
    items: [
      'Data Dashboards & Warehousing',
      'AI/ML Models & Chatbots',
      'Predictive Analytics'
    ]
  },
  {
    icon: <FaShieldAlt />,
    title: 'Cybersecurity',
    items: [
      'VAPT Testing',
      'Compliance (GDPR, HIPAA)',
      'Network Security & Backup Solutions'
    ]
  },
  {
    icon: <FaLightbulb />,
    title: 'IT Consulting',
    items: [
      'Tech Audits & Digital Roadmaps',
      'Staff Augmentation',
      'Product Ownership & Project Management'
    ]
  },
  {
    icon: <FaChartLine />
    ,
    title: 'Fintech Services',
    items: [
      'Digital Payments',
      'Online Lending',
      'Investment Platforms',
      'Mobile Banking',
      'Cryptocurrency Solutions'
    ]
  },
  {
    icon: <FaNetworkWired />    ,
    title: 'ERP Solutions',
    items: [
      'Financial Management',
      'Supply Chain Management',
      'Customer Relationship Management'
    ]
  }
];

const Services = () => {
  return (
    <section className="services-section py-5 " id='services'>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">Empowering businesses through technology</p>
        </div>
        <div className="row">
          {servicesData.map((service, idx) => (
            <div className="col-lg-4 col-md-6 mb-4" key={idx}>
              <div className="service-card h-100 p-4 shadow-sm rounded">
                <div className="service-icon mb-3">{service.icon}</div>
                <h5 className="service-title">{service.title}</h5>
                <ul className="service-list">
                  {service.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
