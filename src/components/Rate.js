import Star from "../assets/star_rate_filled.svg";
import StarEmpty from "../assets/star_rate_empty.svg";
function Rate({ rating }) {
  const range = [1, 2, 3, 4, 5];

  return (
    <div className="rating">
      {range.map((rangeStep) =>
        rating >= rangeStep ? (
          <img key={rangeStep} src={Star} alt="star" className="star" />
        ) : (
          <img key={rangeStep} src={StarEmpty} alt="star-empty" className="star" />
        )
      )}
    </div>
  );
}

export default Rate;
