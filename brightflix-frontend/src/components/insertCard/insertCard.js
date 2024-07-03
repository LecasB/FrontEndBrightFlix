import React, { useState } from 'react';
import axios from 'axios';
import '../../styles/css/insertCard.css';
import VideoForm from '../insertVideo/insertVideoForms';
import SeriesForm from '../insertVideo/insertSeriesForms';

function InsertCard({ onInsertSuccess }) {
  const baseMovieUrl = "https://vidsrc.net/embed/";
  const [title, setTitle] = useState('');
  const [bannerLink, setBanner] = useState('');
  const [movieId, setMovieId] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [rating, setRating] = useState('');
  const [videoLink, setVideoLink] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [duration, setDuration] = useState('');
  const [creator, setCreator] = useState('');
  const [cast, setCast] = useState([]);
  const [seasons, setSeasons] = useState([]);
  const [selection, setSelection] = useState('');

  function closeCard() {
    var card = document.getElementById('popupCard');
    card.classList.remove('showw');
  }

  async function handleInsert(e) {
    e.preventDefault();
    const creationDate = new Date().toISOString();

    if (selection === 'movie') {
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

      try {
        const response = await axios.post('https://brightflixapii.vercel.app/api/v1/videos/new', newMovie);
        console.log('Movie inserted:', response.data);
        closeCard();
        onInsertSuccess();
      } catch (error) {
        console.error('Error inserting movie:', error);
        alert(`Error inserting movie: ${error.response ? error.response.data.error : error.message}`);
      }
    } else {
      const newSeries = {
        title,
        description,
        category,
        creator,
        created: creationDate,
        seasons: seasons.map(season => ({
          ...season,
          episodes: season.episodes.map(episode => ({
            title: episode.title,
            link: episode.link
          }))
        })),
        cast,
        rating,
        thumb: thumbnail,
        video: videoLink,
        banner: bannerLink,
      };

      console.log('New series payload:', JSON.stringify(newSeries, null, 2));

      try {
        const response = await axios.post('https://brightflixapii.vercel.app/api/v1/series/new', newSeries);
        console.log('Series inserted:', response.data);
        closeCard();
        onInsertSuccess();
      } catch (error) {
        console.error('Error inserting series:', error);
        if (error.response) {
          console.log('Response data:', error.response.data);
          console.log('Response status:', error.response.status);
          console.log('Response headers:', error.response.headers);
          alert(`Error inserting series: ${error.response.data.error}`);
        } else if (error.request) {
          console.log('Request:', error.request);
          alert('Error inserting series: No response received');
        } else {
          console.log('Error message:', error.message);
          alert(`Error inserting series: ${error.message}`);
        }
      }
    }
  }

  return (
    <div className="card" id="popupCard">
      <div className="popup-card">
        <span className="close-btn" onClick={closeCard}>X</span>
        <h1>Insert Content</h1>
        {selection === '' ? (
          <div className="selection-buttons">
            <button onClick={() => setSelection('movie')}>Movies</button>
            <button onClick={() => setSelection('series')}>Series</button>
          </div>
        ) : (
          <div id="card-content">
            <button className="back-btn" onClick={() => setSelection('')}>Back</button>
            {selection === 'movie' ? (
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
            ) : (
              <SeriesForm 
                title={title} setTitle={setTitle}
                description={description} setDescription={setDescription}
                category={category} setCategory={setCategory}
                creator={creator} setCreator={setCreator}
                cast={cast} setCast={setCast}
                seasons={seasons} setSeasons={setSeasons}
                rating={rating} setRating={setRating}
                thumbnail={thumbnail} setThumbnail={setThumbnail}
                videoLink={videoLink} setVideoLink={setVideoLink}
                bannerLink={bannerLink} setBanner={setBanner}
                handleSubmit={handleInsert}
                submitLabel="Insert"
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default InsertCard;
