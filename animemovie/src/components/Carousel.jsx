import React from 'react'
import CardMovie from './CardMovie.jsx'
import '../styles/carousel.css'

export default function Carousel({ items = [], onSelect }) {
  return (
    <div className="carousel">
      <div className="carousel-track">
        {items.map((it) => (
          <CardMovie key={it.id} item={it} onSelect={onSelect} />
        ))}
      </div>
    </div>
  )
}