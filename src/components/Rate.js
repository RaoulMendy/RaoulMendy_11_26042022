function Rate({ rating }) {
  console.log(rating)

  
  return (
    <div className="rating">
      <span className="fa fa-star checked"></span>
      <span className="fa fa-star unchecked"></span>
    </div>
  );
}

export default Rate;
