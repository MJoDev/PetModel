import React from 'react';
import './NotFound.css';

const NotFound = () => {
  return (
    <div>
      <div className="spacernotfound layer0"></div>
      <div className="notfound">
        <div className="notfoundLabel">
          <h1 className="notfoundTitle">404 - Página no encontrada</h1>
          <p className="notfoundText">Lo sentimos, la página que estás buscando no existe.</p>
        </div>
        <div className="goldenSadCircle">
          <img src='/assets/goldensad.png' alt='sad golden'></img>
        </div>
        
      </div>
      
    </div>
  );
};

export default NotFound;