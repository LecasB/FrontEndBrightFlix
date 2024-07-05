import React, { useState, useEffect, useRef } from "react";
import "../scss/Modal.scss";
import {
  FaStar,
  FaPlus,
  FaCheck,
  FaPlay,
  FaVolumeMute,
  FaVolumeUp,
} from "react-icons/fa";

const ModalFilms = ({ show, onClose, movie }) => {
  const [isMuted, setIsMuted] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const iframeRef = useRef(null);

  const getRatingColorClass = (rating) => {
    if (rating >= 8) {
      return "good";
    } else if (rating >= 5) {
      return "average";
    } else {
      return "bad";
    }
  };

  useEffect(() => {
    if (iframeRef.current) {
      const iframe = iframeRef.current.contentWindow;
      iframe.postMessage(
        `{"event":"command","func":"setVolume","args":[${isMuted ? 0 : 100}]}`,
        "*"
      );
    }
  }, [isMuted]);

  useEffect(() => {
    if (movie) {
      const favoritesMovies =
        JSON.parse(sessionStorage.getItem("favoritesMovies")) || [];
      setIsFavorite(favoritesMovies.some((fav) => fav.id === movie.id));
    }
  }, [movie]);

  if (!show || !movie) {
    return null;
  }

  const ratingClass = getRatingColorClass(movie.rating);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleAddToFavorites = () => {
    const favoritesMovies =
      JSON.parse(sessionStorage.getItem("favoritesMovies")) || [];
    if (!favoritesMovies.some((fav) => fav.id === movie.id)) {
      favoritesMovies.push(movie);
      sessionStorage.setItem(
        "favoritesMovies",
        JSON.stringify(favoritesMovies)
      );
      setIsFavorite(true);
    } else {
      const updatedFavoritesMovies = favoritesMovies.filter(
        (fav) => fav.id !== movie.id
      );
      sessionStorage.setItem(
        "favoritesMovies",
        JSON.stringify(updatedFavoritesMovies)
      );
      setIsFavorite(false);
    }
  };

  const handlePlayClick = () => {
    window.open(movie.movie, "_blank");
  };

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <iframe
          ref={iframeRef}
          width="100%"
          height="315"
          src={`${movie.video}?autoplay=1&mute=${isMuted ? 1 : 0}&controls=0`}
          title={movie.title}
          allow="autoplay;"
          frameBorder={0}
        />
        <div className="modal-buttons">
          <button className="modal-button" onClick={handleAddToFavorites}>
            {isFavorite ? <FaCheck /> : <FaPlus />} Add to Favorites
          </button>
          <button className="modal-button" onClick={handlePlayClick}>
            <FaPlay /> Play
          </button>
          <button className="modal-button mute-button" onClick={toggleMute}>
            {isMuted ? <FaVolumeUp /> : <FaVolumeMute />}{" "}
            {isMuted ? "Unmute" : "Mute"}
          </button>
        </div>
        <div className="text-in-modal">
          <h2>{movie.title}</h2>
          <div className="Genre-Rating">
            <p className="Genre">Genre: {movie.category}</p>{" "}
            <p className={`Rating ${ratingClass}`}>
              {movie.rating}/10 <FaStar />{" "}
            </p>
          </div>
          <p>
            {movie.created} {movie.duration} min
          </p>
          <p>{movie.description}</p>
          <p>Creator: {movie.creator}</p>
        </div>
      </div>
    </div>
  );
};

export default ModalFilms;
