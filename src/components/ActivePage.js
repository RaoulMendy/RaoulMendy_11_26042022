import Carousel from "./Carousel";
import datas from "../datas/logements.json";
// import { useNavigate } from "react-router-dom";

function ActivePage(props) {
  // const navigate = useNavigate();
  const active = props.active;
  const activeLocation = datas.filter(function (location) {
    return location.id === active;
  });

  // if (activeLocation.length === 0) {
  //   navigate("/error")
  // }
  console.log(activeLocation);
  return (
    <div className="location__body">
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
          <Carousel pictures={pictures} key={`carousel-${id}`} />
        )
      )}
    </div>
  );
}

export default ActivePage;
