import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTh } from '@fortawesome/free-solid-svg-icons';
import './SelectGenre.css'; 

const SelectGenre = () => {
  return (
    <div className="select-genre-container">
      <h2 className="genre-title">Tv Shows</h2>
      <div className="genre-dropdown">
        <select className="genre-select">
          <option value="drama">Fantasy</option>
          <option value="comedy">Comedy</option>
          <option value="thriller">Thriller</option>
        </select>
      </div>
      <div className="icons-container"> 
        <FontAwesomeIcon icon={faTh} className="icon" />
        <FontAwesomeIcon icon={faTh} className="icon" />
      </div>
    </div>
  );
};

export default SelectGenre;