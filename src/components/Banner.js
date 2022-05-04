import React from 'react';
import background from "../assets/banner.png"
function Banner() {
  return (
    <div className="banner">
      <img className="banner__img" src={background} alt="banner__logo"/>
      <div className="banner__motto">Chez vous, partout et ailleurs</div>
    </div>
  );
}

export default Banner;
