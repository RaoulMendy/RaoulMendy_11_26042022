import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Carousel from "../Carousel";
import Description from "../Description";
import datas from "../../datas/logements.json";

function Location() {
  const { id } = useParams();

  const activeLocation = datas.filter(function (location) {
    return location.id === id;
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (activeLocation.length === 0) {
      navigate("/error");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="location">
      {activeLocation.map(
        ({
          description,
          equipments,
          host,
          id,
          location,
          pictures,
          rating,
          tags,
          title,
        }) => (
          <div key={`description-${id}`}>
            <Carousel pictures={pictures} />
            <Description
              description={description}
              equipments={equipments}
              host={host}
              id={id}
              location={location}
              rating={rating}
              tags={tags}
              title={title}
            />
          </div>
        )
      )}
    </div>
  );
}

export default Location;
