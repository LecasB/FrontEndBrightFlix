import React from 'react';
import logo from '../../img/logo.png'
import '../../styles/css/insertCard.css';

function InsertCard() {

    function closeCard() {
        var card = document.getElementById('popupCard');
        card.classList.remove('showw');
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
            placeholder=''
          />
          <label>Title</label>
        </div>
        <div className="inputContainer">
          <input
            type="text" 
            required 
            placeholder=''
          />
          <label>Description</label>
        </div>
        <div className="inputContainer">
          <input
            type="text" 
            required 
            placeholder=''
          />
          <label>Category</label>
        </div>
        </div>
    </div>
</div>
  );
}

export default InsertCard;
