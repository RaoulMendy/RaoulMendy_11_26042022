function Dropdown({ titre, texte}) {
  // function handleClick(e) {
  //   console.log("this is working fine");
  //   e.preventDefault();
  //   e.target.style.color = "black";
  //   console.log(e.target);
  // }

  return (
    <div className="dropdown">
      <div className="dropdown__header">
        {titre}
        <span className="dropdown__header__icon">
          <i className="fa fa-chevron-up"></i>
        </span>
      </div>
      <div className="dropdown__content">{texte}</div>
    </div>
  );
}

export default Dropdown;
