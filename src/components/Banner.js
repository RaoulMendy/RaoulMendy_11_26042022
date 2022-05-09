import React from 'react';
import background from "../assets/banner.png"
function Banner() {
  return (
    <div className="banner" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4)), url(${background})`}}>
      <div className="banner__motto">Chez vous, partout et ailleurs</div>
    </div>
  );
}

export default Banner;
