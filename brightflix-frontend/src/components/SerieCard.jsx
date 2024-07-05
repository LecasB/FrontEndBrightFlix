import React from "react";
import PropTypes from "prop-types";
import "../scss/SerieCard.scss";

const SerieCard = ({ thumbnail, title, previewVideoUrl }) => {
  return (
    <div className="SerieCard">
      <img className="videoThumbnail" src={thumbnail} alt={title} />
    </div>
  );
};

export default SerieCard;
