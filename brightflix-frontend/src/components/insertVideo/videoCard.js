import React, { useState } from 'react';
import { FaClock, FaInfoCircle, FaCalendarAlt, FaUser, FaArrowDown, FaArrowUp, FaHandPointer } from 'react-icons/fa';
import StarRating from './starRating';

function VideoCard({ video }) {
  const [showTrailer, setShowTrailer] = useState(false);


  const toggleTrailer = () => {
    setShowTrailer(!showTrailer);
  };

  return (
    <div className='videoInserted'>
      <div className='thumbnail'>
        <img src={video.thumb} alt={`Thumbnail of ${video.title}`} />
      </div> 
      <div className='info'>
        <div className='field'>
          {video.title}
        </div>
        <div className='field'>
          <div className='clock'>
            <FaClock /> {video.duration} min
          </div>
        </div>
      </div>
        <div className='info details'>
          <div className='fields description'>
            <span>{video.description}</span>
          </div>
          <div className='fields'>
            <StarRating rating={video.rating} />
          </div>
          <div className='fields'>
            <FaInfoCircle /> Category: {video.category}
          </div>
          <div className='fields'>
            <FaCalendarAlt /> {video.created}
          </div>
          <div className='fields'>
            <FaUser /> Creator: {video.creator}
          </div>
          <div className='fields'>
            <FaHandPointer />
            <span className='trailer' onClick={toggleTrailer}>
              Trailer 
            </span>
          </div>
        </div>
      {showTrailer && (
        <div className='trailerPopup'>
          <div className='trailerContent'>
            <iframe 
              src={`${video.video}?autoplay=1`} 
              title="YouTube video player" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
            <button className='closeButton' onClick={toggleTrailer}>X</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default VideoCard;