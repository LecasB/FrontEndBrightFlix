import React, { useEffect, useState } from "react";
import SerieCard from "../components/SerieCard";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Modal from "../components/Modal-series";
import "../scss/SerieCard.scss";

function Series() {
  const [videos, setVideos] = useState([]);
  const [filteredVideos, setFilteredVideos] = useState([]);
  const [bannerData, setBannerData] = useState(null);
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [genre, setGenre] = useState("");
  const apiEndpoint = "https://brightflixapii.vercel.app/api/v1/series";

  const fetchVideos = () => {
    fetch(apiEndpoint)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setVideos(data.data);
        setFilteredVideos(data.data);
        setBannerData(data.data[0]);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeOut(true);
      setTimeout(() => {
        setCurrentBannerIndex((prevIndex) => {
          const newIndex = (prevIndex + 1) % filteredVideos.length;
          setBannerData(filteredVideos[newIndex]);
          setFadeOut(false);
          return newIndex;
        });
      }, 1000); // Time for the fade-out animation
    }, 30000); // Interval time to change the banner

    return () => clearInterval(interval);
  }, [filteredVideos]);

  useEffect(() => {
    const filtered = videos.filter((video) => {
      const matchesSearchTerm =
        searchTerm === "" ||
        video.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesGenre =
        genre === "" ||
        (video.category && video.category.includes(genre));
      return matchesSearchTerm && matchesGenre;
    });
    setFilteredVideos(filtered);
  }, [searchTerm, genre, videos]);

  const handleGenreChange = (e) => {
    const selectedGenre = e.target.value;
    setGenre(selectedGenre);
  };

  const handleVideoCardClick = (movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Navbar />
      {bannerData && (
        <Banner
          title={bannerData.title}
          rating={bannerData.rating}
          description={bannerData.description}
          banner={bannerData.banner}
          fadeOut={fadeOut}
        />
      )}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for a movie..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select onChange={handleGenreChange} value={genre}>
          <option value="">All Genres</option>
          <option value="Action">Action</option>
          <option value="Adventure">Adventure</option>
          <option value="Drama">Drama</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Horror">Horror</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Thriller">Thriller</option>
        </select>
      </div>
      <div className="Films">
        {filteredVideos.map((video) => (
          <div key={video.id} onClick={() => handleVideoCardClick(video)}>
            <SerieCard
              thumbnail={video.thumb}
              title={video.title}
              previewVideoUrl={video.video}
            />
          </div>
        ))}
      </div>
      <Modal show={isModalOpen} onClose={closeModal} movie={selectedMovie} />
    </>
  );
}

export default Series;
