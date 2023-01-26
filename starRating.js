import React, { useState } from 'react';

const RatingApp = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        return (
          <button
            type="text"
            key={index}
            className={index <= rating ? 'on' : 'off'}
          >
            {' '}
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
};
export default RatingApp;
