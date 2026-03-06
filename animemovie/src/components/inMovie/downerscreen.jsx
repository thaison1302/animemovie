import React, { useState } from 'react';
import '../../styles/downerscreen.css';

const LowerScreen = ({ 
  totalEpisodes = 12,
  currentEpisode = 1,
  onEpisodeSelect = (episode) => {},
  episodeLabel = "VIETSUB-ESPISODES"
}) => {
  const [selectedEpisode, setSelectedEpisode] = useState(currentEpisode);

  const handleEpisodeClick = (episode) => {
    setSelectedEpisode(episode);
    onEpisodeSelect(episode);
  };

  // Generate episode array
  const episodes = Array.from({ length: totalEpisodes }, (_, i) => i + 1);

  return (
    <div className="lowerscreen-container">
      <div className="episode-header">
        <h2 className="episode-title">{episodeLabel}</h2>
      </div>

      <div className="episodes-grid">
        {episodes.map((episode) => (
          <button
            key={episode}
            className={`episode-btn ${
              selectedEpisode === episode ? 'active' : ''
            }`}
            onClick={() => handleEpisodeClick(episode)}
          >
            {String(episode).padStart(2, '0')}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LowerScreen;