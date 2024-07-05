import React, { useEffect, useState } from "react";
import VideoCard from "../components/VideoCard";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import ModalFilms from "../components/Modal-films";
import ModalSeries from "../components/Modal-series";
import SerieCard from "../components/SerieCard";
import "./favoritespage.scss";

function FavoritesPage() {
  const [favoritesMovies, setFavoritesMovies] = useState([]);
  const [favoritesSeries, setFavoritesSeries] = useState([]);
  const [bannerData, setBannerData] = useState(null);
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedSeries, setSelectedSeries] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSeriesModalOpen, setIsSeriesModalOpen] = useState(false);

  useEffect(() => {
    const favoritesMoviesFromStorage =
      JSON.parse(sessionStorage.getItem("favoritesMovies")) || [];
    setFavoritesMovies(favoritesMoviesFromStorage);
    if (favoritesMoviesFromStorage.length > 0) {
      setBannerData(favoritesMoviesFromStorage[0]);
    }
  }, []);

  useEffect(() => {
    const favoritesSeriesFromStorage =
      JSON.parse(sessionStorage.getItem("favoritesSeries")) || [];
    setFavoritesSeries(favoritesSeriesFromStorage);
    if (favoritesSeriesFromStorage.length > 0) {
      setBannerData(favoritesSeriesFromStorage[0]);
    }
  }, []);

  useEffect(() => {
    if (favoritesMovies.length > 0 || favoritesSeries.length > 0) {
      const interval = setInterval(() => {
        setFadeOut(true);
        setTimeout(() => {
          setCurrentBannerIndex((prevIndex) => {
            const newIndex =
              (prevIndex + 1) %
              (favoritesMovies.length + favoritesSeries.length);
            setBannerData(
              newIndex < favoritesMovies.length
                ? favoritesMovies[newIndex]
                : favoritesSeries[newIndex - favoritesMovies.length]
            );
            setFadeOut(false);
            return newIndex;
          });
        }, 1000); // Time for fade-out animation
      }, 30000); // Time to change the banner

      return () => clearInterval(interval);
    }
  }, [favoritesMovies, favoritesSeries]);

  const handleVideoCardClick = (video, isSeries = false) => {
    if (isSeries) {
      setSelectedSeries(video);
      setIsSeriesModalOpen(true);
    } else {
      setSelectedMovie(video);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsSeriesModalOpen(false);
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
      {favoritesMovies.length > 0 ? (
        <>
          <h2 className="Titles">Favorites Movies</h2>
          <div className="Films">
            {favoritesMovies.map((video) => (
              <div
                key={video.id}
                onClick={() => handleVideoCardClick(video, false)}
              >
                <VideoCard
                  thumbnail={video.thumb}
                  title={video.title}
                  previewVideoUrl={video.video}
                />
              </div>
            ))}
          </div>
        </>
      ) : (
        <h2 className="no-favorites-message">
          You have no favorite movies yet.
        </h2>
      )}
      {favoritesSeries.length > 0 ? (
        <>
          <h2 className="Titles">Favorites Series</h2>
          <div className="Films">
            {favoritesSeries.map((series) => (
              <div
                key={series.id}
                onClick={() => handleVideoCardClick(series, true)}
              >
                <SerieCard
                  thumbnail={series.thumb}
                  title={series.title}
                  previewVideoUrl={series.video}
                />
              </div>
            ))}
          </div>
        </>
      ) : (
        <h2 className="no-favorites-message">
          You have no favorite series yet.
        </h2>
      )}
      <ModalFilms
        show={isModalOpen}
        onClose={closeModal}
        movie={selectedMovie}
      />
      <ModalSeries
        show={isSeriesModalOpen}
        onClose={closeModal}
        movie={selectedSeries}
      />
    </>
  );
}

export default FavoritesPage;
