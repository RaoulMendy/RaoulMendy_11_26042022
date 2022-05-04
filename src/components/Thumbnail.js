import React from 'react';
import data from "../datas/logements.json";

function Thumbnail() {
    return (
    <a className="thumbnail" href="www.google.fr">
        <img className="thumbnail__image" alt="thumbnail" src={data[0].cover}/>
        <div className="thumbnail__title">{`${data[0].title}`}</div>
    </a>
    )
}

export default Thumbnail