import React, { useState, useEffect } from 'react';
import axios from 'axios';
import search from "../../img/search.png";
import VideoCard from './videoCard';
import {FaFilter } from 'react-icons/fa';


function insertCard() {
  var cart = document.getElementById("popupCard");
  cart.classList.toggle("showw");
}

function InsertVideo() {
  const [videos, setVideos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('https://brightflixapii.vercel.app/api/v1/videos')
      .then(response => {
        console.log('API response:', response.data);
        if (Array.isArray(response.data.data)) {
          setVideos(response.data.data);
        } else {
          console.error('Response data is not an array:', response.data);
        }
      })
      .catch(error => {
        console.error('Error fetching videos:', error);
      });
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredVideos = videos.filter(video => 
    video.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='videoInsert'>
      <div className='addVideo'>
        <div className="searchBar">
          <input 
            type="text" 
            placeholder="Search" 
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <img src={search} alt="Search icon" />
        </div>
        <div className='insertButtons'>
        <div className='addIcon' ><FaFilter /></div>
        <div className='addIcon' onClick={insertCard}>+</div>
        </div>
      </div>
      <div className='videoCards'>
        {filteredVideos.length > 0 ? (
          filteredVideos.map((video, index) => (
            <VideoCard key={index} video={video} />
          ))
        ) : (
          <p>No videos found</p>
        )}
      </div>
    </div>
  );
}

export default InsertVideo;
