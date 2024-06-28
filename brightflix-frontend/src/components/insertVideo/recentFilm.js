import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaClock, FaInfoCircle, FaCalendarAlt, FaUser, FaArrowDown, FaArrowUp, FaHandPointer } from 'react-icons/fa';
import StarRating from './starRating';
import '../../styles/css/lastFilm.css';

function LastFilm() {
  const [randomVideo, setRandomVideo] = useState(null);
  const [showTrailer, setShowTrailer] = useState(false);

  useEffect(() => {
    let isMounted = true; // flag to track if component is mounted

    axios.get('https://brightflixapii.vercel.app/api/v1/videos')
      .then(response => {
        if (isMounted) {
          console.log('API response:', response.data);
          if (Array.isArray(response.data.data)) {
            const videosArray = response.data.data;
            const randomIndex = Math.floor(Math.random() * videosArray.length);
            setRandomVideo(videosArray[randomIndex]);
          } else {
            console.error('Response data is not an array:', response.data);
          }
        }
      })
      .catch(error => {
        console.error('Error fetching videos:', error);
      });

    return () => {
      isMounted = false; // clean up flag when component unmounts
    };
  }, []); // empty dependency array ensures this useEffect runs only once

  const toggleTrailer = () => {
    setShowTrailer(!showTrailer);
  };

  if (!randomVideo) {
    return <p>No videos available</p>;
  }

  return (
      <div className='lastMovie'>
        <div className='content'>
          <h2>{randomVideo.title}</h2>
          <p className='category'>{randomVideo.category}</p>
          <p>{randomVideo.description}</p>
          <StarRating rating={randomVideo.rating} />
          <div className='buttons'>
            <button className='button red' onClick={toggleTrailer}>Trailer</button>
            <button className='button'>Watch</button>
          </div>
        </div>
        <div className='banner'>
          <img src={randomVideo.banner} alt={`${randomVideo.title} thumbnail`} />
        </div>
        {showTrailer && (
          <div className='trailerPopup'>
            <div className='trailerContent'>
              <iframe 
                src={`${randomVideo.video}?autoplay=1`} 
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

export default LastFilm;
