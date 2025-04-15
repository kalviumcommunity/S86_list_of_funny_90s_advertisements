import React from 'react';
import './AdCard.jsx'; // Make sure your CSS file is named correctly

const AdCard = ({ title, description, imageUrl, year, category }) => {
  return (
    <div className="ad-card">
      <h2>{title}</h2>
      <p><strong>Year:</strong> {year}</p>
      <p><strong>Category:</strong> {category}</p>
      <p>{description}</p>
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          style={{
            width: '100%',
            maxWidth: '400px',
            borderRadius: '8px',
            marginTop: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
          }}
        />
      )}
    </div>
  );
};

export default AdCard;
