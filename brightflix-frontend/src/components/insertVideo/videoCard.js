import React, { useState } from 'react';
import { FaClock, FaInfoCircle, FaCalendarAlt, FaUser, FaHandPointer, FaCheckCircle, FaRegCircle, FaEdit } from 'react-icons/fa';
import { BiSolidMoviePlay } from "react-icons/bi";
import StarRating from './starRating';

function VideoCard({ video, isDeleteMode, isSelected, toggleSelectVideo, onEdit }) {
  const [showTrailer, setShowTrailer] = useState(false);

  const toggleTrailer = () => {
    setShowTrailer(!showTrailer);
  };

  const watchFullMovie = () => {
    if (video && video.movie) {
      window.open(video.movie, '_blank');
    } else {
      console.error('No movie link available');
    }
  };

  return (
    <div className={`videoInserted ${isDeleteMode ? 'deleteMode' : ''} ${isSelected ? 'selected' : ''}`}>
      {isDeleteMode && (
        <div className={`selectOverlay ${isSelected ? 'selected' : ''}`} onClick={toggleSelectVideo}>
          <div className='selectCircle'>
            {isSelected ? <FaCheckCircle size={50} /> : <FaRegCircle size={50} />}
          </div>
        </div>
      )}
      <div className='thumbnail'>
        {video.thumb ? (
          <img src={video.thumb} alt={`Thumbnail of ${video.title}`} />
        ) : (
          <div>No thumbnail available</div>
        )}
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
        <div className='fields edit' onClick={() => onEdit(video)}>
          <FaEdit />
        </div>
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
        <div className='fields'>
          <BiSolidMoviePlay />
          <span className='trailer' onClick={watchFullMovie}>
            Movie 
          </span>
        </div>
      </div>
      {showTrailer && (
        <div className='trailerPopup'>
          <div className='trailerContent'>
            <iframe 
              src={`${video.video}?autoplay=1&mute=1`} 
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
