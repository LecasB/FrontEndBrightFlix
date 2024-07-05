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

const ModalSeries = ({ show, onClose, movie }) => {
  const [isMuted, setIsMuted] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [selectedSeason, setSelectedSeason] = useState(null);
  const [selectedEpisode, setSelectedEpisode] = useState(null);
  const [videoLink, setVideoLink] = useState("");
  const iframeRef = useRef(null);

  useEffect(() => {
    if (movie) {
      const favorites =
        JSON.parse(sessionStorage.getItem("favoritesSeries")) || [];
      setIsFavorite(favorites.some((fav) => fav.id === movie.id));

      if (movie.seasons && movie.seasons.length > 0) {
        const initialSeason = movie.seasons[0];
        const initialEpisode = initialSeason.episodes ? initialSeason.episodes[0] : null;
        setSelectedSeason(initialSeason);
        setSelectedEpisode(initialEpisode);
        setVideoLink(initialEpisode ? initialEpisode.link : "");
      } else {
        setSelectedSeason(null);
        setSelectedEpisode(null);
        setVideoLink(movie.video);
      }
    }
  }, [movie]);

  useEffect(() => {
    if (iframeRef.current) {
      const iframe = iframeRef.current.contentWindow;
      iframe.postMessage(
        `{"event":"command","func":"setVolume","args":[${isMuted ? 0 : 100}]}`,
        "*"
      );
    }
  }, [isMuted]);

  if (!show || !movie) {
    return null;
  }

  const getRatingColorClass = (rating) => {
    if (rating >= 8) {
      return "good";
    } else if (rating >= 5) {
      return "average";
    } else {
      return "bad";
    }
  };

  const ratingClass = getRatingColorClass(movie.rating);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleAddToFavorites = () => {
    const favorites =
      JSON.parse(sessionStorage.getItem("favoritesSeries")) || [];
    if (!favorites.some((fav) => fav.id === movie.id)) {
      favorites.push(movie);
      sessionStorage.setItem("favoritesSeries", JSON.stringify(favorites));
      setIsFavorite(true);
    } else {
      const updatedFavorites = favorites.filter((fav) => fav.id !== movie.id);
      sessionStorage.setItem("favoritesSeries", JSON.stringify(updatedFavorites));
      setIsFavorite(false);
    }
  };

  const handleSeasonChange = (e) => {
    const seasonId = e.target.value;
    const season = movie.seasons.find((s) => s.id === seasonId);
    const episode = season.episodes[0];
    setSelectedSeason(season);
    setSelectedEpisode(episode);
    setVideoLink(episode.link);
  };

  const handleEpisodeChange = (e) => {
    const episodeId = e.target.value;
    const episode = selectedSeason.episodes.find((ep) => ep.id === episodeId);
    setSelectedEpisode(episode);
    setVideoLink(episode.link);
  };

  const handlePlayClick = () => {
    window.open(videoLink, "_blank");
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
            {movie.created} {movie.seasons ? `Seasons: ${movie.seasons.length}` : ""}
          </p>
          <p>{movie.description}</p>
          <p>Creator: {movie.creator}</p>
          <p>Cast: {movie.cast}</p>
          {selectedSeason && (
            <div>
              <p>Season</p>
              <select
                id="season-select"
                value={selectedSeason.id}
                onChange={handleSeasonChange}
              >
                {movie.seasons.map((season) => (
                  <option key={season.id} value={season.id}>
                    Season {season.number}
                  </option>
                ))}
              </select>
              {selectedSeason && selectedSeason.episodes && (
                <>
                  <p>Episode</p>
                  <select
                    id="episode-select"
                    value={selectedEpisode?.id || ""}
                    onChange={handleEpisodeChange}
                  >
                    {selectedSeason.episodes.map((episode) => (
                      <option key={episode.id} value={episode.id}>
                        {episode.title}
                      </option>
                    ))}
                  </select>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModalSeries;
