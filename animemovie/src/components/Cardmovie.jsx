import React from 'react'
import '../styles/cardmovie.css'

export default function CardMovie({ item, onSelect }) {
  return (
    <div
      className="cardmovie"
      role="button"
      tabIndex={0}
      onClick={() => onSelect(item)}
      onKeyDown={(e) => { if (e.key === 'Enter') onSelect(item) }}
      aria-label={`Open ${item.movieName}`}
    >
      <div className="poster-wrap">
        <img src={item.image} alt={item.movieName} className="poster-img" />
        <div className="episode-badge">Episode {item.episode}</div>
      </div>
      <div className="card-title">{item.movieName}</div>
    </div>
  )
}