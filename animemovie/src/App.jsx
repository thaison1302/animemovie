import React from 'react'
import './index.css'
import './styles/navbar.css'
import './styles/hero.css'
import './styles/release.css'
import { data } from './data/data.js'
import Navbar from './components/Navbar.jsx'
import Hero from './components/hero.jsx'
import ReleaseSection from './components/Release.jsx'

function App() {
  const heroItem = data[0] 

  return (
    <div className="app-root">
      <Navbar />
      <main className="container">
        <section className="explore">
          <h2 className="section-subtitle">Explore</h2>
          <p className="section-lead">What are you gonna watch today ?</p>
          <Hero
            image={heroItem.image}
            title={heroItem.movieName}
            description={heroItem.description}
          />
        </section>

        <ReleaseSection title="New Release" items={data.slice(1)} />
      </main>
    </div>
  )
}

export default App
