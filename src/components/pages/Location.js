import React from "react";
import { useParams } from "react-router-dom";
import ActivePage from "../ActivePage";
import datas from "../../datas/logements.json"


function Location() {
  const {id} = useParams();
  console.log(id);
  
  return (
    <div>
      <ActivePage active={id}/>
    </div>
  );
}

export default Location;

