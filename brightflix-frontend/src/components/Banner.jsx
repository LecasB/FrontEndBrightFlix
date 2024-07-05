import React from "react";
import "../scss/Banner.scss";
import Logo from "../img/logo.png";
function Banner({ title, rating, description, banner, fadeOut }) {
  const getRatingColorClass = (rating) => {
    if (rating >= 8) {
      return "good";
    } else if (rating >= 5) {
      return "average";
    } else {
      return "bad";
    }
  };

  const ratingClass = getRatingColorClass(rating);

  return (
    <div className={`banner ${fadeOut ? "fade-out" : ""}`}>
      <div className="Bannerimg">
        <img src={banner} alt={title} />
      </div>
      <div className="textBanner">
        <a href="/">
          <img src={Logo} alt="Brightflix Logo" className="Logo" />
        </a>
        <h1>{title}</h1>
        <div className="Sub-tags">
          <p className={`Rating ${ratingClass}`}>Rating: {rating}/10</p>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Banner;
