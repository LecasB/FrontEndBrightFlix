import React from 'react';

const ConfirmationModal = ({ show, onClose, onConfirm, selectedVideos }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Confirm Deletion</h2>
        <p>Are you sure you want to delete the following videos?</p>
        <ul>
          {selectedVideos.map(video => (
            <li key={video.id}>{video.title}</li>
          ))}
        </ul>
        <div className="modal-actions">
          <button onClick={onClose}>Cancel</button>
          <button className='confirm' onClick={onConfirm}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
