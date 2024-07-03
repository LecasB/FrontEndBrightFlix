// EpisodeModal.js
import React from 'react';
import '../../styles/css/epModal.css';

function EpisodeModal({ series, onClose }) {
  return (
    <div className="episode-modal">
      <div className="popup">
        <span className="close-btn" onClick={onClose}>X</span>
        <h1>{series.title}</h1>
        {series.seasons.map(season => (
          <div key={season.number}>
            <h2>Season {season.number}</h2>
            <ul>
              {season.episodes.map(episode => (
                <li key={episode.id}>
                  {episode.title} - <a href={`https://vidsrc.net/embed/${episode.link}`} target="_blank" rel="noopener noreferrer">Watch</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EpisodeModal;
