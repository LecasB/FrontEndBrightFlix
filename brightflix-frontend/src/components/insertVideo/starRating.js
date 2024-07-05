import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';

function StarRating({ rating, onChange }) {
  const adjustedRating = Math.round(rating / 2); 

  const handleClick = (newRating) => {
    onChange(newRating * 2); 
  };

  return (
    <div className='star-rating-selector'>
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        return (
          <span
            key={index}
            onClick={() => handleClick(starValue)}
            className={starValue <= adjustedRating ? 'star selected' : 'star'}
          >
            {starValue <= adjustedRating ? <FaStar /> : <FaRegStar />}
          </span>
        );
      })}
    </div>
  );
}

export default StarRating;
