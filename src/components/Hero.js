import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleReadyState = () => {
      if (document.readyState === 'complete') {
        setLoading(false);
      }
    };

    document.addEventListener('readystatechange', handleReadyState);

    return () => document.removeEventListener('readystatechange', handleReadyState);
  }, []);

  return (
    <section className="hero-banner-container">
      <div className="hero-banner">
        <div className={`hero hero-0 ${loading ? '' : 'active'}`}>
          <div className="hero__bg"></div>
          <div className="hero__content">
            <svg className="hero__overlay" viewBox="0 0 720 405" preserveAspectRatio="xMaxYMax slice">
              <path className="hero__overlay-path" d="M0,0 150,0 500,405 0,405" />
            </svg>
            <div className="hero__text">
              <h2 className="hero__text-heading">WEI HUANG</h2>
              <p className="hero__text-desc">Software Engineer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
