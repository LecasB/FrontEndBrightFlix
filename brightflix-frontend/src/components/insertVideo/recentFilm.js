import React, { useEffect, useState } from 'react';
import axios from 'axios';
import StarRating from './starRating';
import '../../styles/css/lastFilm.css';

function LastFilm({ filterType }) {
  const [randomVideo, setRandomVideo] = useState(null);
  const [showTrailer, setShowTrailer] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const endpoint = filterType === 'series' 
      ? 'https://brightflixapii.vercel.app/api/v1/series' 
      : 'https://brightflixapii.vercel.app/api/v1/videos';

    axios.get(endpoint)
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
      isMounted = false;
    };
  }, [filterType]);

  const toggleTrailer = () => {
    setShowTrailer(!showTrailer);
  };

  const watchVideo = () => {
    if (randomVideo && randomVideo.movie) {
      window.open(randomVideo.movie, '_blank');
    } else if (randomVideo && randomVideo.link) {
      window.open(randomVideo.link, '_blank');
    } else {
      console.error('No video link available');
    }
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
          <button className='button' onClick={watchVideo}>Watch</button>
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
