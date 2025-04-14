import React from 'react';
import AdCard from './AdCard.jsx';

const AdCardPage = () => {
  const dummyAd = {
    title: "Crazy Cola Ad (1995)",
    description: "This ad became famous for its dancing cola bottles and wild 90s music.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual embed URL
    category: "Food & Beverages"
  };

  return (
    <div>
      <h1>Sample Advertisement</h1>
      <AdCard {...dummyAd} />
    </div>
  );
};

export default AdCardPage;
