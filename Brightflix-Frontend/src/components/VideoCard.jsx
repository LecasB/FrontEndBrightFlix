import React, { useState, useEffect, useRef } from "react";
import styles from "../scss/VideoCard.module.scss";

function VideoCard({ thumbnail, title, previewVideoUrl }) {
  const [isHovered, setIsHovered] = useState(false);
  const iframeRef = useRef(null);

  useEffect(() => {
    if (iframeRef.current) {
      const iframe = iframeRef.current.contentWindow;
      iframe.postMessage(
        '{"event":"command","func":"setVolume","args":[1931312]}',
        "*"
      );
    }
  }, [isHovered]);

  return (
    <div
      className={styles.videoCard}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? (
        <iframe
          ref={iframeRef}
          width="100%"
          height="100%"
          src={`${previewVideoUrl}?autoplay=1&mute=0&controls=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className={styles.videoPreview}
        />
      ) : (
        <img src={thumbnail} alt={title} className={styles.videoThumbnail} />
      )}
    </div>
  );
}

export default VideoCard;
