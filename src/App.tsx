import React from 'react';
import './App.pcss';

export const App = () => {
  return (
    <>
      <header>
        <h1>
          <span>Mega</span> Ogłoszenia
        </h1>
        <button>Dodaj Ogłoszenie</button>
        <div className="search">
          <input type="text" />
          <button>Szukaj</button>
        </div>
      </header>
      <div className="map">
        ...
      </div>
    </>
  );
};

