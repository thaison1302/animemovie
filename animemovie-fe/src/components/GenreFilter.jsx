import React from 'react'
import '../styles/genrefilter.css'

export default function GenreFilter({ onGenreSelect }) {
  const [activeGenre, setActiveGenre] = React.useState('all')
  
  const genres = ['all', 'adventure', 'action', 'sports']

  const handleGenreClick = (genre) => {
    setActiveGenre(genre)
    onGenreSelect(genre)
  }

  return (
    <div className="genre-filter">
      {genres.map((genre) => (
        <button
          key={genre}
          className={`genre-btn ${activeGenre === genre ? 'active' : ''}`}
          onClick={() => handleGenreClick(genre)}
        >
          {genre.charAt(0).toUpperCase() + genre.slice(1)}
        </button>
      ))}
    </div>
  )
}