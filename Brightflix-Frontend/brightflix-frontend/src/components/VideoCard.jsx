import React, { useState, useRef, useEffect } from "react";
import styles from "../scss/VideoCard.module.scss";

function VideoCard({ thumbnail, title, previewVideoUrl }) {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      videoElement.volume = 0.3; // Baixa o volume do video para 30%
    }

    if (isHovered && videoElement) {
      videoElement.muted = false; // Desmuta o video
      videoElement.play().catch((error) => {
        console.log("Video playback failed:", error);
      });
    } else if (videoElement) {
      videoElement.muted = true; // Muta o video
      videoElement.pause();
    }
  }, [isHovered]);

  return (
    <div
      className={styles.videoCard}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? (
        <video
          ref={videoRef}
          src={previewVideoUrl}
          className={styles.videoPreview}
          loop
          muted
          autoPlay
        />
      ) : (
        <img src={thumbnail} alt={title} className={styles.videoThumbnail} />
      )}
    </div>
  );
}

export default VideoCard;
