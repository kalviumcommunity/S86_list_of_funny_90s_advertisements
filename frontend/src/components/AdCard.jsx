import React from 'react';
import './AdCard.jsx'; // Optional CSS for styling



const AdCard = ({ title, description, videoUrl, category }) => {
  return (
    <div className="ad-card">
      <h2>{title}</h2>
      <p><strong>Category:</strong> {category}</p>
      <p>{description}</p>
      <iframe
        width="300"
        height="200"
        src={videoUrl}
        title="Ad Video"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default AdCard;
