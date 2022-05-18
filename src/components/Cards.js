import React from "react";
import { Link } from "react-router-dom";
import data from "../datas/logements.json";

function Cards() {
  return (
    <div className="gallery">
      {data.map((element) => (
        <Link to={`/location/${element.id}`}
          key={element.id}
          className="card"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url(${element.cover})`,
          }}
        >
          <div className="card__title">{`${element.title}`}</div>
        </Link>
      ))}
    </div>
  );
}

export default Cards;
