import React, { useState } from 'react';
import '../../styles/downerscreen.css';
import { useNavigate } from 'react-router';

const LowerScreen = (props) => {
  const { episodes, film } = props;
  const [selectedEpisode, setSelectedEpisode] = useState(1);
  const navigate = useNavigate();
  console.log(props.episodes);
  const handleEpisodeClick = (episode) => {
    setSelectedEpisode(episode);
    navigate(`/inmovie/${film.id}/${episode.link}`);
  };

  return (
    <div className="lowerscreen-container">
      <div className="episode-header">
        <h2 className="episode-title">{props.episodeLabel}</h2>
      </div>

      <div className="episodes-grid">
        {episodes.map((episode) => (
          <button
            key={episode.id}
            className={`episode-btn ${
              selectedEpisode === episode ? 'active' : ''
            }`}
            onClick={() => handleEpisodeClick(episode)}
          >
            {String(episode.id).padStart(2, '0')}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LowerScreen;