import React, { useEffect, useState } from 'react';

const ServicesGrid = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      title: "Auto Body & Panel Repairs",
      description: "Expert collision repair and panel beating to restore your vehicle's structural integrity and appearance.",
      icon: "🔧"
    },
    {
      title: "Paintwork & Respraying",
      description: "Professional spray painting services using premium automotive paints for a flawless finish.",
      icon: "🎨"
    },
    {
      title: "Car Detailing & Cleaning",
      description: "Comprehensive interior and exterior detailing to keep your vehicle looking showroom fresh.",
      icon: "✨"
    },
    {
      title: "Mechanical Repairs",
      description: "Complete mechanical services from engine diagnostics to component replacement and repair.",
      icon: "⚙️"
    },
    {
      title: "Logbook & General Servicing",
      description: "Manufacturer-approved servicing to maintain your warranty and keep your vehicle running smoothly.",
      icon: "📋"
    },
    {
      title: "Complete Vehicle Care",
      description: "End-to-end automotive solutions combining all our services for total vehicle maintenance.",
      icon: "🚗"
    }
  ];

  return (
    <div className="services-grid-container">
      <div className="services-header">
        <h2 
          className="services-title"
          style={{ opacity: isVisible ? 1 : 0 }}
        >
          Our Services
        </h2>
        <div className="services-subtitle-wrapper">
          <h3 
            className="services-subtitle"
            style={{ opacity: isVisible ? 1 : 0 }}
          >
            Complete Automotive Solutions
          </h3>
        </div>
      </div>
      
      <div className="services-grid">
        {services.map((service, index) => (
          <div 
            key={index}
            className="service-card"
            style={{ 
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: `${index * 100}ms`
            }}
          >
            <div className="service-icon-wrapper">
              <span className="service-icon">{service.icon}</span>
            </div>
            <div className="service-content">
              <h4 className="service-title">{service.title}</h4>
              <div className="service-divider"></div>
              <p className="service-description">{service.description}</p>
            </div>
            <div className="service-corner-accent"></div>
          </div>
        ))}
      </div>
      
      <div className="services-graphic-elements">
        <div className="services-graphic-line-1"></div>
        <div className="services-graphic-line-2"></div>
        <div className="services-graphic-block-1"></div>
        <div className="services-graphic-block-2"></div>
      </div>
    </div>
  );
};

export default ServicesGrid;