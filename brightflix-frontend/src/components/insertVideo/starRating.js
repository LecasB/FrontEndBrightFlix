import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

function StarRating({ rating }) {
  const adjustedRating = rating / 2;
  const fullStars = Math.floor(adjustedRating);
  const halfStar = adjustedRating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className='star-rating'>
      {[...Array(fullStars)].map((_, index) => (
        <FaStar key={index} />
      ))}
      {halfStar && <FaStarHalfAlt />}
      {[...Array(emptyStars)].map((_, index) => (
        <FaRegStar key={index + fullStars + (halfStar ? 1 : 0)} />
      ))}
    </div>
  );
}

export default StarRating;
