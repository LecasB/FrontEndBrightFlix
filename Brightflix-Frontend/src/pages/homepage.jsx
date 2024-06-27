import React, { useEffect, useState } from "react";
import VideoCard from "../components/VideoCard";
import Navbar from "../components/Navbar";
import "./homepage.scss";
import Banner from "../components/Banner";

function Homepage() {
  const [videos, setVideos] = useState([]);
  const [bannerData, setBannerData] = useState(null);
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
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
        setVideos(data.data);
        setBannerData(data.data[0]); // Vai buscar o id do filme a API
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
      }, 100); // Tempo para a animaçao do fade out
    }, 30000); // Tempo de espera para mudar o Banner

    return () => clearInterval(interval);
  }, [videos]);

  return (
    <>
      <Navbar />
      {bannerData && (
        <Banner
          title={bannerData.title}
          rating={bannerData.rating}
          description={bannerData.description}
          thumbnail={bannerData.thumb}
          fadeOut={fadeOut}
        />
      )}
      <div className="Films">
        {videos.map((video) => (
          <VideoCard
            key={video.id}
            thumbnail={video.thumb}
            title={video.title}
            previewVideoUrl={video.video}
          />
        ))}
      </div>
    </>
  );
}

export default Homepage;
