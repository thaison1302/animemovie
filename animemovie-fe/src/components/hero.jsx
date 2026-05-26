
import React from 'react';
import '../styles/hero.css';

export default function Hero({ image, title, description, outline = 'medium', textWeight = 'normal' }) {

  return (
    <div className="hero">
      <img src={image} alt={title} className="hero-image" />
      <div className="hero-overlay">
        <h3 className={`hero-title hero-outline--${outline} hero-text--${textWeight}`}>
          {title}
        </h3>
        <p className="hero-desc">{description}</p>
      </div>
    </div>
  );
}