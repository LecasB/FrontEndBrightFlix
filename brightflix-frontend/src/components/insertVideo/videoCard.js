import React, { useState } from 'react';
import { FaClock, FaInfoCircle, FaCalendarAlt, FaUser, FaHandPointer } from 'react-icons/fa';
import StarRating from './starRating';

function VideoCard({ video }) {
  const [showTrailer, setShowTrailer] = useState(false);

  const toggleTrailer = () => {
    setShowTrailer(!showTrailer);
  };

  return (
    <div className='videoInserted'>
      <div className='thumbnail'>
        {video.thumb ? (
          <img src="https://th.bing.com/th/id/R.ca2392772abe4f0dc92eca96def53b40?rik=PLeo7SCasa15SQ&riu=http%3a%2f%2fimg.over-blog-kiwi.com%2f1%2f36%2f64%2f60%2f20150405%2fob_73f610_saving-private-ryan-poster-copy.jpg&ehk=eGvtbtNIP2NkmNfuPLedKKG46m0neKGIPs1r%2b74kU3o%3d&risl=&pid=ImgRaw&r=0" alt={`Thumbnail of ${video.title}`} />
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
