import React from 'react';

const RatingApp = () => {
  return (
    <div className="star-rating">
      {[...Array(5)].map((star) => {
        return <span className="star">&#9733;</span>;
      })}
    </div>
  );
};
export default RatingApp;
