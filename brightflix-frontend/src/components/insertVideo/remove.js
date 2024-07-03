import React from 'react';

const ConfirmationModal = ({ show, onClose, onConfirm, selectedVideos }) => {
  if (!show || selectedVideos.length === 0) {
    return null;
  }

  console.log(selectedVideos); // This will only log when the modal is shown and there are selected videos

  return (
    <div className="modal-overlay" role="dialog" aria-labelledby="modal-title" aria-describedby="modal-description">
      <div className="modal-content">
        <h2 id="modal-title">Confirm Deletion</h2>
        <p id="modal-description">Are you sure you want to delete the following videos?</p>
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
