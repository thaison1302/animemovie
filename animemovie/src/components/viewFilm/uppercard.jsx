import React from 'react';
import '../../styles/uppercard.css';
import{Link, useNavigate} from 'react-router-dom';
export const UpperCard = ({ movieName, image, episode, link,id }) => {
  const navigate = useNavigate();
  const handleSwitchPage = () => {
    navigate(`/inmovie/${id}`);
  };
  return (
    <div className="upper-card">
      <div className="movie-poster">
        <img src={image} alt={movieName} />
        <div className="watch-btn">
          {/* <Link to={'https://localhost:5173/inmovie/'+link} replace={true}> */}
          <button className="play-btn" onClick={handleSwitchPage}>▶</button>
          {/* </Link> */}
        </div>
        {/* <Link to={'inmovie/'+link} replace={true}> */}
        <div className="watch-label" onClick={handleSwitchPage}>WATCH MOVIE</div>
        {/* </Link> */}
      </div>
      <div className="movie-info">
        <h2 className="movie-title">{movieName}</h2>
        <div className="episode-badge">Espisode {episode}</div>
      </div>
    </div>
  );
};
export default UpperCard;