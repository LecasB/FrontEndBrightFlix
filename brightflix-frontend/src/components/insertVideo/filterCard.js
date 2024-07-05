import React from 'react';
import '../../styles/css/filterCard.css';

function FilterCard({ onClose, onSelectFilter }) {
  return (
    <div className="filter-card">
      <div className="popup">
        <span className="close-btn" onClick={onClose}>X</span>
        <h1>Select Filter</h1>
        <button onClick={() => onSelectFilter('videos')}>Movies</button>
        <button onClick={() => onSelectFilter('series')}>Series</button>
      </div>
    </div>
  );
}

export default FilterCard;
