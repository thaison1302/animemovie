import { useState, useEffect } from 'react';
import UpperScreen from '../components/inMovie/upperscreen';
import LowerScreen from '../components/inMovie/downerscreen';
import Infomation from "../components/info.jsx"
import { useParams, useLocation } from 'react-router-dom';
import { movieService, episodeService } from '../services/api.js';

function InMovie() {
  const { id } = useParams();
  const location = useLocation();
  const [film, setFilm] = useState(null);
  const [episodes, setEpisodes] = useState([]);
  const [selectedEpisode, setSelectedEpisode] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch movie details
        const movieData = await movieService.getMovieById(id);
        setFilm(movieData);

        // Fetch episodes for this movie
        const episodesData = await episodeService.getEpisodesByMovie(id);
        setEpisodes(episodesData || []);

        // Set first episode as default
        if (episodesData && episodesData.length > 0) {
          setSelectedEpisode(episodesData[0]);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setFilm(null);
        setEpisodes([]);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  const handleEpisodeSelect = (episode) => {
    setSelectedEpisode(episode);
  };

  if (loading) return <div className="container"><p>Loading...</p></div>;
  if (!film) return <div className="container"><p>Movie not found</p></div>;

  return (
    <div>
      <UpperScreen film={film} selectedEpisode={selectedEpisode} />
      <LowerScreen 
        episodes={episodes} 
        film={film}
        onSelectEpisode={handleEpisodeSelect}
        selectedEpisode={selectedEpisode}
        // comment={comment}
      />
      <Infomation/>
    </div>
  );
}

export default InMovie;