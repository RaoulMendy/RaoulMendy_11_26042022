import Dropdown from "./Dropdown";
import Host from "./Host";
import Rate from "./Rate";
import Tag from "./Tag";

function Description({
  description,
  equipments,
  host,
  location,
  rating,
  tags,
  title,
}) {
  return (
    <div className="location-info">
      <div className="block1">
        <h1 className="location-info__title">{title}</h1>
        <p className="location-info__location">{location}</p>
        <Tag tags={tags} />
      </div>
      <div className="block2">
        <Host host={host} />
        <Rate rating={rating} />
      </div>
      <div className="dropdown-box">
        <Dropdown description={description} type='locationList' typeList="Description" />
        <Dropdown description={equipments} type='locationList' typeList="Equipements" />
      </div>
    </div>
  );
}

export default Description;
