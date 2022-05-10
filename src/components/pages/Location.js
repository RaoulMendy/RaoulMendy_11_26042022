import React from "react";
import { useParams } from "react-router-dom";
import Carrousel from "../Carrousel";

// import BodyLocation from "../BodyLocation";




function Location() {
  const {id} = useParams();

  
  return (
    <div className="Location">
      <Carrousel/>
      <h1>{id}</h1>
    </div>
  );
}

export default Location;
