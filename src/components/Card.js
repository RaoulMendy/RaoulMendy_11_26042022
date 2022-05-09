import React from 'react';
import data from "../datas/logements.json";

function Card() {
    return (
    <div className="card" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4)), url(${data[0].cover})`}}>
        <div className="card__title">{`${data[0].title}`}</div>
    </div>
    )
}


export default Card