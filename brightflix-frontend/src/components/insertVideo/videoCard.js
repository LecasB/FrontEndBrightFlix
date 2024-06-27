import React, { useState } from 'react';
import { FaClock, FaStar, FaInfoCircle, FaCalendarAlt, FaUser, FaArrowDown, FaArrowUp, FaHandPointer } from 'react-icons/fa';

function VideoCard({ video }) {
  const [showDetails, setShowDetails] = useState(false);
  const [showTrailer, setShowTrailer] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

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
          <div className='arrowDown' onClick={toggleDetails}>
            {showDetails ? <FaArrowUp /> : <FaArrowDown />}
          </div>
        </div>
      </div>
      {showDetails && (
        <div className='info details'>
          <div className='fields description'>
            <span>{video.description}</span>
          </div>
          <div className='fields'>
            <FaStar /> Rating: {video.rating} stars
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
      )}
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
