import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg'
import '../sass/styles.css'

function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <img className="header__logo__img" src={logo} alt="logo" />
      </div>

      <nav className="header__nav">
        <Link to="/" className="header__nav__home">Accueil</Link>
        <Link to="/about" className="header__nav__about">A propos</Link>
      </nav>
    </div>
  );
}

export default Header;
