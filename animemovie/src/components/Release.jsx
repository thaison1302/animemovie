import React from 'react'
import Carousel from './Carousel.jsx'
import '../styles/release.css'

export default function ReleaseSection({ title = 'New Release', items = [], onSelect}) {
  return (
    <section className="release-section">
      <h2 className="release-title">{title}</h2>
      <Carousel items={items} />
    </section>
  )
}