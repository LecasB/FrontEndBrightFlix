import React from 'react';

const VideoForm = ({ 
  title, setTitle,
  bannerLink, setBanner,
  movieLink, setMovie,
  description, setDescription,
  category, setCategory,
  rating, setRating,
  videoLink, setVideoLink,
  thumbnail, setThumbnail,
  duration, setDuration,
  creator, setCreator,
  handleSubmit, submitLabel,
  handleCancel // Adicione esta prop
}) => {
  return (
    <form onSubmit={handleSubmit}>
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
          value={movieLink}
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
      <div className="modal-actions">
      <button type="button" className='cancel' onClick={handleCancel}>Cancel</button>
        <button id='insertButton' type="submit">{submitLabel}</button>
      </div>
    </form>
  );
};

export default VideoForm;
