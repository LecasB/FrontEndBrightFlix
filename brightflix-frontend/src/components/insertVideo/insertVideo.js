import React, { useState, useEffect } from 'react';
import axios from 'axios';
import search from "../../img/search.png";
import VideoCard from './videoCard';
import SeriesCard from './seriesCard';
import { FaFilter, FaTrash } from 'react-icons/fa';
import ConfirmationModal from './remove';
import UpdateModal from './updateFilm';
import InsertCard from '../insertCard/insertCard';
import FilterCard from './filterCard';
import EpisodeModal from './episodeModal';

function insertCard() {
  var cart = document.getElementById("popupCard");
  cart.classList.toggle("showw");
}

function InsertVideo({ filterType, onFilterChange }) { 
  const [videos, setVideos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isDeleteMode, setIsDeleteMode] = useState(false);
  const [selectedVideos, setSelectedVideos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [showFilterCard, setShowFilterCard] = useState(false);
  const [showEpisodeModal, setShowEpisodeModal] = useState(false);
  const [selectedSeries, setSelectedSeries] = useState(null);

  useEffect(() => {
    fetchVideos(filterType); 
  }, [filterType]);

  const fetchVideos = (type) => {
    const endpoint = type === 'series' 
      ? 'https://brightflixapii.vercel.app/api/v1/series' 
      : 'https://brightflixapii.vercel.app/api/v1/videos';
    
    axios.get(endpoint)
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
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterSelection = (type) => {
    onFilterChange(type); // Update the filter type in the parent component
    setShowFilterCard(false);
    setSelectedSeries(null); // Reset selected series when switching filters
    setShowEpisodeModal(false); // Close episode modal when switching filters
    fetchVideos(type);
  };

  const filteredVideos = videos.filter(video => 
    video.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const deleteVideoFromAPI = async (id) => {
    const endpoint = filterType === 'series' 
      ? `https://brightflixapii.vercel.app/api/v1/series/delete/${id}` 
      : `https://brightflixapii.vercel.app/api/v1/videos/delete/${id}`;
    
    try {
      await axios.delete(endpoint);
    } catch (error) {
      console.error('Error deleting video:', error);
    }
  };

  const confirmDelete = async () => {
    await Promise.all(selectedVideos.map(deleteVideoFromAPI));
    setVideos(videos.filter(video => !selectedVideos.includes(video.id)));
    setSelectedVideos([]);
    setShowModal(false);
    setIsDeleteMode(false);
  };

  const toggleDeleteMode = () => {
    if (isDeleteMode && selectedVideos.length > 0) {
      setShowModal(true);
    } else {
      setIsDeleteMode(!isDeleteMode);
      setSelectedVideos([]);
    }
  };

  const toggleUpdateMode = (video) => {
    setSelectedVideo(video);
    setShowUpdateModal(true);
  };

  const updateVideoInAPI = async (id, updatedData) => {
    const endpoint = filterType === 'series' 
      ? `https://brightflixapii.vercel.app/api/v1/series/update/${id}` 
      : `https://brightflixapii.vercel.app/api/v1/videos/update/${id}`;
    
    try {
      await axios.put(endpoint, updatedData);
      setVideos(videos.map(video => 
        video.id === id ? { ...video, ...updatedData } : video
      ));
      setShowUpdateModal(false);
    } catch (error) {
      console.error('Error updating video:', error);
    }
  };

  const toggleSelectVideo = (videoId) => {
    setSelectedVideos((prevSelected) =>
      prevSelected.includes(videoId)
        ? prevSelected.filter(id => id !== videoId)
        : [...prevSelected, videoId]
    );
  };

  const openEpisodeModal = (series) => {
    if (filterType === 'series') {
      setSelectedSeries(series);
      setShowEpisodeModal(true);
    }
  };

  const selectedVideoObjects = videos.filter(video => selectedVideos.includes(video.id));
  
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
          <div className='addIcon' onClick={() => setShowFilterCard(true)}>
            <FaFilter />
          </div>
          <div className='addIcon' onClick={toggleDeleteMode}>
            <FaTrash />
          </div>
          <div className='addIcon' onClick={insertCard}>+</div>
        </div>
      </div>
      <div className='videoCards'>
        {filteredVideos.length > 0 ? (
          filteredVideos.map((video) => (
            filterType === 'movies' ? (
              <VideoCard
                key={video.id}
                video={video}
                isDeleteMode={isDeleteMode}
                isSelected={selectedVideos.includes(video.id)}
                toggleSelectVideo={() => toggleSelectVideo(video.id)}
                onEdit={() => toggleUpdateMode(video)}
              />
            ) : (
              <SeriesCard
                key={video.id}
                series={video}
                isDeleteMode={isDeleteMode}
                isSelected={selectedVideos.includes(video.id)}
                toggleSelectSeries={() => toggleSelectVideo(video.id)}
                onEdit={() => toggleUpdateMode(video)}
                onClick={() => openEpisodeModal(video)}
              />
            )
          ))
        ) : (
          <p>No videos found</p>
        )}
      </div>
      <ConfirmationModal
        show={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={confirmDelete}
        selectedVideos={selectedVideoObjects}
      />
      {selectedVideo && (
        <UpdateModal
          show={showUpdateModal}
          onClose={() => setShowUpdateModal(false)}
          onUpdate={updateVideoInAPI}
          selectedVideo={selectedVideo}
        />
      )}
      <InsertCard onInsertSuccess={() => fetchVideos(filterType)} />
      {showFilterCard && (
        <FilterCard
          onClose={() => setShowFilterCard(false)}
          onSelectFilter={handleFilterSelection}
        />
      )}
      {showEpisodeModal && selectedSeries && (
        <EpisodeModal
          series={selectedSeries}
          onClose={() => setShowEpisodeModal(false)}
        />
      )}
    </div>
  );
}

export default InsertVideo;
