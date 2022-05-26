import React, { useState } from "react";
import Equipments from "./Equipments";

function Dropdown({ titre, texte, type, description, equipments, typeListName }) {
  const [collapse, setCollapse] = useState(true);
  const toggleCollapse = () => setCollapse((prevExpand) => !prevExpand);
  const rightList = typeListName === "Description" ? <div>{description}</div> : <Equipments equipments={equipments}/>;

  
  
  
  if (type !== "locationList") {
    return (
      <div className="dropdown">
        <div className="dropdown__header" onClick={toggleCollapse}>
          {titre}
          <span className="dropdown__header__icon">
            <i
              className={collapse ? "fa fa-chevron-up" : "fa fa-chevron-down"}
              ></i>
          </span>
        </div>
        {collapse && <div className="dropdown__content">{texte}</div>}
      </div>

    );
  }

  return (
    <div className="dropdown">
      <div className="dropdown__header" onClick={toggleCollapse}>
        {typeListName}
        <span className="dropdown__header__icon">
          <span
            className={collapse ? "fa fa-chevron-up" : "fa fa-chevron-down"}
          ></span>
        </span>
      </div>
      {collapse &&
      <div className="dropdown__content">{rightList}</div>}
    </div>
  );
}



export default Dropdown;
