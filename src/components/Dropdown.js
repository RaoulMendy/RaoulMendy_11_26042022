import { useState } from "react";

function Dropdown({ titre, texte, type, description, equipments, typeList }) {
  const [expand, setExpand] = useState(true);
  const toggleExpand = () => setExpand((prevExpand) => !prevExpand);


  if (type !== "locationList") {
    return (
      <div className="dropdown">
        <div className="dropdown__header" onClick={toggleExpand}>
          {titre}
          <span className="dropdown__header__icon">
            <i
              className={expand ? "fa fa-chevron-up" : "fa fa-chevron-down"}
            ></i>
          </span>
        </div>
        {expand && <div className="dropdown__content">{texte}</div>}
      </div>
    );
  }

  return (
    <div className="dropdown">
      <div className="dropdown__header" onClick={toggleExpand}>
        {typeList}
        <span className="dropdown__header__icon">
          <span
            className={expand ? "fa fa-chevron-up" : "fa fa-chevron-down"}
          ></span>
        </span>
      </div>
      {expand && <div className="dropdown__content">{description}</div>}
    </div>
  );
}

export default Dropdown;
