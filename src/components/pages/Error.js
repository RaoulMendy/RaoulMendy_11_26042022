import React from 'react';
import { Link } from 'react-router-dom';
import Header from "../Header";

function Error() {
    return (
        <div className="Error">
          <Header/>
          <main className='error-section'>
              <div className='error-section__number'>404</div>
              <div className='error-section__message'>Oups! La page que vous demandez n'existe pas.</div>
              <Link to="/" className='error-section__redirection'>Retourner sur la page d'accueil</Link>
          </main>
     
        </div>
      );
}

export default Error

