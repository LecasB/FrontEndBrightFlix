import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaClock, FaInfoCircle, FaCalendarAlt, FaUser, FaArrowDown, FaArrowUp, FaHandPointer } from 'react-icons/fa';
import StarRating from './starRating';
import '../../styles/css/lastFilm.css';

function LastFilm() {
  const [videos, setVideos] = useState([]);
  const [showTrailer, setShowTrailer] = useState(false);

  useEffect(() => {
    axios.get('https://brightflixapii.vercel.app/api/v1/videos?sort=created')
      .then(response => {
        console.log('API response:', response.data);
        if (Array.isArray(response.data.data)) {
          setVideos(response.data.data);
        } else {
          console.error('Response data is not an array:', response.data);
        }
      })
      .catch(error => {
        console.error('Error fetching videos:', error);
      });
  }, []);

  const lastVideo = videos.length > 0 ? videos[videos.length - 1] : null;

  const toggleTrailer = () => {
    setShowTrailer(!showTrailer);
  };

  return (
    <div>
      {lastVideo ? (
        <div className='lastMovie'>
          <div className='content'>
            <h2>{lastVideo.title}</h2>
            <p className='category'>{lastVideo.category}</p>
            <p>{lastVideo.description}</p>
            <StarRating rating={lastVideo.rating} />
            <div className='buttons'>
              <button className='button red' onClick={toggleTrailer}>Trailer</button>
              <button className='button'>Watch</button>
            </div>
          </div>
          <div className='banner'>
            <img src={lastVideo.banner} alt={`${lastVideo.title} thumbnail`} />
          </div>
          {showTrailer && (
            <div className='trailerPopup'>
              <div className='trailerContent'>
                <iframe 
                  src={`${lastVideo.video}?autoplay=1`} 
                  title="YouTube video player" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen>
                </iframe>
                <button className='closeButton' onClick={toggleTrailer}>X</button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <p>No videos available</p>
      )}
    </div>
  );
}

export default LastFilm;
