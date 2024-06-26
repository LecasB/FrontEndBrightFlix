import React from "react";
import BannerImg from "../Banner.png";
import "../scss/Banner.scss";
import Logo from "../logo.png";
import "../scss/_variables.scss";

function Banner() {
  const rating = 79;

  const getRatingColorClass = (rating) => {
    if (rating >= 80) {
      return "good";
    } else if (rating >= 50) {
      return "average";
    } else {
      return "bad";
    }
  };

  const ratingClass = getRatingColorClass(rating);

  return (
    <div className="banner">
      <div className="Bannerimg">
        <img src={BannerImg} alt="Banner" />
      </div>
      <div className="textBanner">
        <img src={Logo} alt="Logo" className="Logo" />
        <h1>Matrix</h1>
        <div className="Sub-tags">
          <p className={`Rating ${ratingClass}`}>{rating}% Match</p>
          <p class="Sesons">2018 2h 30min</p>
        </div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga dolor
          magnam optio id! Delectus ea iure quia impedit ab, distinctio voluptas
          consequatur ad! Ea assumenda hic quas natus voluptatum in?
        </p>
      </div>
    </div>
  );
}

export default Banner;
