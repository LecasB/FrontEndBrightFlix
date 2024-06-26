import React from "react";
import VideoCard from "../components/VideoCard";
import MatrixThumbnail from "../Matrix.jpg";
import MatrixPreview from "../MatrixPreview.mp4";
import Navbar from "../components/Navbar";
import "./homepage.scss";
import Banner from "../components/Banner";

function Homepage() {
  return (
    <>
      <Navbar />
      <Banner />
      <h2>Films</h2>
      <div className="Films">
        <VideoCard
          thumbnail={MatrixThumbnail}
          title="Matrix"
          previewVideoUrl={MatrixPreview}
        />
        <VideoCard
          thumbnail={MatrixThumbnail}
          title="Matrix"
          previewVideoUrl={MatrixPreview}
        />
        <VideoCard
          thumbnail={MatrixThumbnail}
          title="Matrix"
          previewVideoUrl={MatrixPreview}
        />
        <VideoCard
          thumbnail={MatrixThumbnail}
          title="Matrix"
          previewVideoUrl={MatrixPreview}
        />
        <VideoCard
          thumbnail={MatrixThumbnail}
          title="Matrix"
          previewVideoUrl={MatrixPreview}
        />
        <VideoCard
          thumbnail={MatrixThumbnail}
          title="Matrix"
          previewVideoUrl={MatrixPreview}
        />
        <VideoCard
          thumbnail={MatrixThumbnail}
          title="Matrix"
          previewVideoUrl={MatrixPreview}
        />
        <VideoCard
          thumbnail={MatrixThumbnail}
          title="Matrix"
          previewVideoUrl={MatrixPreview}
        />
      </div>
    </>
  );
}

export default Homepage;
