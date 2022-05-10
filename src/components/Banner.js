import React from 'react';


function Banner(props) {

  const backgroundValue = props.backgroundValue
  
  return (
    <div className="banner" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4)), url(${backgroundValue})`}}>
      <div className="banner__motto">Chez vous, partout et ailleurs</div>
    </div>
  );
}

export default Banner;
