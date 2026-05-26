import { useState, useEffect } from 'react';
import { DownerCard } from '../components/viewFilm/downercard';
import { UpperCard } from '../components/viewFilm/uppercard';
import Infomation from "../components/info.jsx"
import { useParams } from 'react-router-dom';
import { movieService } from '../services/api.js';

export const ViewFilm = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const movieData = await movieService.getMovieById(id);
        setMovie(movieData);
      } catch (error) {
        console.error('Error fetching movie:', error);
        setMovie(null);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchMovie();
    }
  }, [id]);

  if (loading) return <div className="container"><p>Loading movie details...</p></div>;
  
  if (!movie) return <div className="container"><p>Movie not found</p></div>;

  return (
    <div>
      <UpperCard 
        movieName={movie.name} 
        image={movie.link || 'default-image.jpg'} 
        episode={movie.totalEpisode} 
        link={movie.link}
        id={movie._id} 
      />
      <DownerCard 
        description={movie.description}
        rating={movie.rating}
        year={movie.year}
        views={movie.views}
        duration={movie.duration}
        quality={movie.quality}
        genres={movie.genres}
        country={movie.country}
      />
      <Infomation/>
    </div>
  );
};
export default ViewFilm;