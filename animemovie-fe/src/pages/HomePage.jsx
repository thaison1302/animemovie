import { useState, useEffect } from "react"
import Hero from "../components/hero"
import Infomation from "../components/info.jsx"
import ReleaseSection from "../components/Release"
import GenreFilter from "../components/GenreFilter"
import { useNavigate } from "react-router"
import { movieService } from '../services/api.js'

const HomePage = ({ searchTerm }) => {
  const navigate = useNavigate()
  const [movies, setMovies] = useState([]);
  const [heroMovie, setHeroMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState('all');
  const [allMovies, setAllMovies] = useState([]);

  const handleSearchMovies = async (search) => {
    setLoading(true);
    try {
      const response = await movieService.getMovies(search, 1, 7);
      const fetchedMovies = response.movies || [];
      setAllMovies(fetchedMovies);
      
      // Filter by selected genre
      const filtered = filterMoviesByGenre(fetchedMovies, selectedGenre);
      setMovies(filtered);
      
      // Set hero movie to first result or default
      if (filtered.length > 0) {
        setHeroMovie(filtered[0]);
      } else if (fetchedMovies.length > 0) {
        setHeroMovie(fetchedMovies[0]);
      }
    } catch (error) {
      console.error('Error fetching movies:', error);
      setMovies([]);
      setAllMovies([]);
    } finally {
      setLoading(false);
    }
  };

  const filterMoviesByGenre = (moviesToFilter, genre) => {
    if (genre === 'all') {
      return moviesToFilter;
    }
    
    return moviesToFilter.filter(movie => {
      if (!movie.genres || !Array.isArray(movie.genres)) {
        return false;
      }
      return movie.genres.some(g => g.toLowerCase() === genre.toLowerCase());
    });
  };

  const handleGenreChange = (genre) => {
    setSelectedGenre(genre);
    const filtered = filterMoviesByGenre(allMovies, genre);
    setMovies(filtered);
    
    // Update hero movie
    if (filtered.length > 0) {
      setHeroMovie(filtered[0]);
    } else if (allMovies.length > 0) {
      setHeroMovie(allMovies[0]);
    }
  };

  useEffect(() => {
    handleSearchMovies(searchTerm);
    setSelectedGenre('all');
  }, [searchTerm]);

  const getGenreTitle = () => {
    if (selectedGenre === 'all') {
      return 'New Release';
    }
    return `${selectedGenre.charAt(0).toUpperCase() + selectedGenre.slice(1)} Movies`;
  };

  return (
    <>  
      <main className="container">
        <section className="explore">
          <h2 className="section-subtitle">Explore</h2>
          <p className="section-lead">What are you gonna watch today ?</p>
          {heroMovie && (
            <Hero
              image={heroMovie.link || 'default-image.jpg'}
              title={heroMovie.name}
              description={heroMovie.description}
            />
          )}
        </section>

        {/* Genre Filter */}
        <GenreFilter 
          onGenreSelect={handleGenreChange}
          activeGenre={selectedGenre}
        />

        {!loading && movies.length > 0 && (
          <ReleaseSection 
            title={getGenreTitle()}
            items={movies.map(movie => ({
              id: movie._id,
              movieName: movie.name,
              link: movie.link || 'default-image.jpg',
              description: movie.description,
              episode: movie.totalEpisode
            }))} 
            onSelect={(item) => navigate(`/viewfilm/${item.id}`)} 
          />
        )}
        
        {!loading && movies.length === 0 && allMovies.length > 0 && (
          <div style={{ textAlign: 'center', padding: '40px', color: '#999' }}>
            <p>No movies found in {selectedGenre} category</p>
          </div>
        )}
        
        {loading && <p style={{ textAlign: 'center', padding: '40px', color: '#999' }}>Loading movies...</p>}
      </main>
      <Infomation/>
    </>
  )
}

export default HomePage
