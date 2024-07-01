import React, { useState } from 'react';
import axios from 'axios';
import '../../styles/css/insertCard.css';
import VideoForm from '../insertVideo/insertVideoForms';

function InsertCard() {
  const baseMovieUrl = "https://vidsrc.net/embed/";
  const [title, setTitle] = useState('');
  const [bannerLink, setBanner] = useState('');
  const [movieId, setMovieId] = useState(''); // Apenas o ID do filme
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [rating, setRating] = useState('');
  const [videoLink, setVideoLink] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [duration, setDuration] = useState('');
  const [creator, setCreator] = useState('');

  function closeCard() {
    var card = document.getElementById('popupCard');
    card.classList.remove('showw');
  }

  function handleInsert(e) {
    e.preventDefault();
    const creationDate = new Date().toISOString();
    const newMovie = {
      title,
      banner: bannerLink,
      movie: `${baseMovieUrl}${movieId}`,
      description,
      category,
      rating,
      video: videoLink,
      thumb: thumbnail,
      duration,
      creator,
      created_at: creationDate,
    };

    axios.post('https://brightflixapii.vercel.app/api/v1/videos/new', newMovie)
      .then(response => {
        console.log('Movie inserted:', response.data);
        closeCard();
      })
      .catch(error => {
        console.error('Error inserting movie:', error);
      });
  }

  return (
    <div className="card" id="popupCard">
      <div className="popup-card">
        <span className="close-btn" onClick={closeCard}>X</span>
        <h1>Insert movies</h1>
        <div id="card-content">
          <VideoForm 
            title={title} setTitle={setTitle}
            bannerLink={bannerLink} setBanner={setBanner}
            movieLink={movieId} setMovie={setMovieId}
            description={description} setDescription={setDescription}
            category={category} setCategory={setCategory}
            rating={rating} setRating={setRating}
            videoLink={videoLink} setVideoLink={setVideoLink}
            thumbnail={thumbnail} setThumbnail={setThumbnail}
            duration={duration} setDuration={setDuration}
            creator={creator} setCreator={setCreator}
            handleSubmit={handleInsert}
            submitLabel="Insert"
          />
        </div>
      </div>
    </div>
  );
}

export default InsertCard;
