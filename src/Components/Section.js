import React from 'react';
import './Section.css';

const Section = ({ title, imageUrl,children }) => {
  return (
    <div className="section">
      <div className="section-content">
        <h2>{title}</h2>
        {children}
      </div>
      <div className="section-hover" style={{ backgroundImage: `url(${imageUrl})` }}></div>
    </div>
  );
}

export default Section;
