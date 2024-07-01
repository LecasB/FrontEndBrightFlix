import React, { useState } from 'react';
import axios from 'axios';
import logo from '../../img/logo.png';
import '../../styles/css/insertCard.css';

function InsertCard() {
  const [title, setTitle] = useState('');
  const [bannerLink, setBanner] = useState('');
  const [movielink, setMovie] = useState('');
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

  function handleInsert() {
    const creationDate = new Date().toISOString();
    const newMovie = {
      title,
      banner: bannerLink,
      movie: movielink,
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
          <div className="inputContainer">
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder=''
            />
            <label>Title</label>
          </div>
          <div className="inputContainer">
            <input
              type="text"
              required
              value={movielink}
              onChange={(e) => setMovie(e.target.value)}
              placeholder=''
            />
            <label>Movie</label>
          </div>
          <div className="inputContainer">
            <input
              type="text"
              required
              value={bannerLink}
              onChange={(e) => setBanner(e.target.value)}
              placeholder=''
            />
            <label>Banner</label>
          </div>
          <div className="inputContainer">
            <input
              type="text"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder=''
            />
            <label>Description</label>
          </div>
          <div className="inputContainer">
            <input
              type="text"
              required
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder=''
            />
            <label>Category</label>
          </div>
          <div className="inputContainer">
            <input
              type="text"
              required
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              placeholder=''
            />
            <label>Rating</label>
          </div>
          <div className="inputContainer">
            <input
              type="text"
              required
              value={videoLink}
              onChange={(e) => setVideoLink(e.target.value)}
              placeholder=''
            />
            <label>Video Link</label>
          </div>
          <div className="inputContainer">
            <input
              type="text"
              required
              value={thumbnail}
              onChange={(e) => setThumbnail(e.target.value)}
              placeholder=''
            />
            <label>Thumbnail</label>
          </div>
          <div className="inputContainer">
            <input
              type="text"
              required
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              placeholder=''
            />
            <label>Duration</label>
          </div>
          <div className="inputContainer">
            <input
              type="text"
              required
              value={creator}
              onChange={(e) => setCreator(e.target.value)}
              placeholder=''
            />
            <label>Creator</label>
          </div>
          <button className='insertButton' onClick={handleInsert}>Insert</button>
        </div>
      </div>
    </div>
  );
}

export default InsertCard;
