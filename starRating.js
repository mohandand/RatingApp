import React, { useState } from 'react';

const RatingApp = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="text"
            key={index}
            className={index <= rating ? 'on' : 'off'}
            onClick={() => {
              setRating(index);
            }}
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
