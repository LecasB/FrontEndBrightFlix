import styles from "../scss/VideoCard.module.scss";

function VideoCard({ thumbnail, title }) {
  return (
    <div className={styles.videoCard}>
      <img src={thumbnail} alt={title} className={styles.videoThumbnail} />
    </div>
  );
}

export default VideoCard;
