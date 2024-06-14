import React, { useState } from "react";
import styles from "../scss/VideoCard.module.scss"; // Correct path to the SCSS module

function VideoCard({ thumbnail, videoUrl, title, previewVideoUrl }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    window.open(videoUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className={styles.videoCard}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {isHovered ? (
        <video
          src={previewVideoUrl}
          className={styles.videoPreview}
          loop
          muted
          autoPlay
        />
      ) : (
        <img src={thumbnail} alt={title} className={styles.videoThumbnail} />
      )}
      <h3 className={styles.videoTitle}>{title}</h3>
    </div>
  );
}

export default VideoCard;
