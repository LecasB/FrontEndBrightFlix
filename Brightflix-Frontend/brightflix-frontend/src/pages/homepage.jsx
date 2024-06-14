import React from "react";
import VideoCard from "../components/VideoCard";
import MatrixThumbnail from "../Matrix.jpg";
import MatrixPreview from "../MatrixPreview.mp4";

function Homepage() {
  return (
    <>
      <VideoCard
        thumbnail={MatrixThumbnail}
        title="Matrix"
        previewVideoUrl={MatrixPreview}
      />
    </>
  );
}

export default Homepage;
