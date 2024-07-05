import React, { useState, useEffect } from 'react';
import VideoForm from './insertVideoForms';

const UpdateModal = ({ show, onClose, onUpdate, selectedVideo }) => {
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

  useEffect(() => {
    if (selectedVideo) {
      setTitle(selectedVideo.title || '');
      setDescription(selectedVideo.description || '');
      setCategory(selectedVideo.category || '');
      setMovieId(selectedVideo.movie ? selectedVideo.movie.replace(baseMovieUrl, '') : ''); 
      setBanner(selectedVideo.banner || '');
      setRating(selectedVideo.rating || '');
      setVideoLink(selectedVideo.video || '');
      setThumbnail(selectedVideo.thumb || '');
      setDuration(selectedVideo.duration || '');
      setCreator(selectedVideo.creator || '');
    } else {
      
      setTitle('');
      setDescription('');
      setCategory('');
      setMovieId('');
      setBanner('');
      setRating('');
      setVideoLink('');
      setThumbnail('');
      setDuration('');
      setCreator('');
    }
  }, [selectedVideo]);

  if (!show) {
    return null;
  }

  const handleUpdate = (e) => {
    e.preventDefault();
    onUpdate(selectedVideo.id, { 
      title, 
      description, 
      category, 
      movie: `${baseMovieUrl}${movieId}`, 
      banner: bannerLink, 
      rating, 
      video: videoLink, 
      thumb: thumbnail, 
      duration, 
      creator 
    });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Update Video</h2>
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
          handleSubmit={handleUpdate}
          submitLabel="Update"
          handleCancel={onClose}
        />
      </div>
    </div>
  );
};

export default UpdateModal;
