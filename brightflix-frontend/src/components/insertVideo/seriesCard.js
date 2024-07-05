import React, { useState } from 'react';
import { FaInfoCircle, FaCalendarAlt, FaUser, FaHandPointer, FaCheckCircle, FaRegCircle, FaEdit } from 'react-icons/fa';
import StarRating from './starRating';

function SeriesCard({ series, isDeleteMode, isSelected, toggleSelectSeries, onEdit, onClick }) {
  const [showTrailer, setShowTrailer] = useState(false);

  const toggleTrailer = () => {
    setShowTrailer(!showTrailer);
  };

  return (
    <div 
      className={`videoInserted ${isDeleteMode ? 'deleteMode' : ''} ${isSelected ? 'selected' : ''}`} 
      onClick={() => {
        if (!isDeleteMode) {
          onClick();
        }
      }}>
    
      {isDeleteMode && (
        <div className={`selectOverlay ${isSelected ? 'selected' : ''}`} onClick={(e) => {
          e.stopPropagation();
          toggleSelectSeries();
        }}>
          <div className='selectCircle'>
            {isSelected ? <FaCheckCircle size={50} /> : <FaRegCircle size={50} />}
          </div>
        </div>
      )}
      <div className='thumbnail'>
        {series.thumb ? (
          <img src={series.thumb} alt={`Thumbnail of ${series.title}`} />
        ) : (
          <div>No thumbnail available</div>
        )}
      </div>
      <div className='info'>
        <div className='field'>
          {series.title}
        </div>
      </div>
      <div className='info details' style={{ cursor: 'pointer' }}>
        <div className='fields edit' onClick={(e) => { e.stopPropagation(); onEdit(series); }}>
          <FaEdit />
        </div>
        <div className='fields description'>
          <span>{series.description}</span>
        </div>
        <div className='fields'>
          <StarRating rating={series.rating} />
        </div>
        <div className='fields'>
          <FaInfoCircle /> Category: {series.category}
        </div>
        <div className='fields'>
          <FaCalendarAlt /> {series.created}
        </div>
        <div className='fields'>
          <FaUser /> Creator: {series.creator}
        </div>
        <div className='fields'>
          <FaHandPointer />
          <span className='trailer' onClick={(e) => { e.stopPropagation(); toggleTrailer(); }}>
            Trailer 
          </span>
        </div>
      </div>
      {showTrailer && (
        <div className='trailerPopup'>
          <div className='trailerContent'>
            <iframe 
              src={`${series.video}?autoplay=1&mute=1`} 
              title="YouTube video player" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
            <button className='closeButton' onClick={(e) => { e.stopPropagation(); toggleTrailer(); }}>X</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SeriesCard;
