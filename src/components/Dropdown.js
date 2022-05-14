import {useState} from 'react'

function Dropdown({ titre, texte}) {

  function handleClick(e) {
      console.log('✨ Ceci est mon event :', e)
      e.preventDefault();
      e.target.style.backgroundColor = "black";
  }

  return (
 
    <div className="dropdown">
      <div className="dropdown__header" onClick={handleClick}>
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
