import React from 'react';
import logo from '../assets/logo.svg'

function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <img className="header__logo__img" src={logo} alt="logo" />
      </div>

      <ul className="header__nav">
        <li className="header__nav__home">
          <a href="#">Accueil</a>
        </li>
        <li className="header__nav__about">
          <a href="#">A propos</a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
