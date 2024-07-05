import React, { useEffect, useState } from "react";
import VideoCard from "../components/VideoCard";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Modal from "../components/Modal-films";
import "./homepage.scss";

function Homepage() {
  const [videos, setVideos] = useState([]);
  const [bannerData, setBannerData] = useState(null);
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const apiEndpoint = "https://brightflixapii.vercel.app/api/v1/videos";

  useEffect(() => {
    fetch(apiEndpoint)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const highRatedVideos = data.data.filter(
          (video) => video.rating >= 9 // Only show high-rated videos
        );
        setVideos(highRatedVideos);
        setBannerData(highRatedVideos[0]);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeOut(true);
      setTimeout(() => {
        setCurrentBannerIndex((prevIndex) => {
          const newIndex = (prevIndex + 1) % videos.length;
          setBannerData(videos[newIndex]);
          setFadeOut(false);
          return newIndex;
        });
      }, 100); // Time for the fade-out animation
    }, 30000); // Interval time to change the banner

    return () => clearInterval(interval);
  }, [videos]);

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
      <h2 className="Titles">Trending</h2>
      <div className="Films">
        {videos.map((video) => (
          <div key={video.id} onClick={() => handleVideoCardClick(video)}>
            <VideoCard
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

export default Homepage;
