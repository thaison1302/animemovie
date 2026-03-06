import React from 'react';
import '../../styles/uppercard.css';
import{Link} from 'react-router-dom';
export const UpperCard = ({ movieName, image, episode }) => {
  return (
    <div className="upper-card">
      <div className="movie-poster">
        <img src={image} alt={movieName} />
        <div className="watch-btn">
          <Link to={`/inmovie/${movieName}`}>
          <button className="play-btn">▶</button>
          </Link>
        </div>
        <Link to={`/inmovie/${movieName}`}>
        <div className="watch-label">WATCH MOVIE</div>
        </Link>
      </div>
      <div className="movie-info">
        <h2 className="movie-title">{movieName}</h2>
        <div className="episode-badge">Espisode {episode}</div>
      </div>
    </div>
  );
};
export default UpperCard;