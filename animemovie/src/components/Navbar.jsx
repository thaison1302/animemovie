import React from 'react'
import '../styles/navbar.css'

export default function Navbar({ onSearch }) {
  return (
    <header className="nav">
      <div className="nav-left">
        <div className="brand">Animemovie</div>
      </div>

      <nav className="nav-center">
        <a className="nav-link" href="#">Home</a>
        <a className="nav-link" href="#">List</a>
      </nav>

      <div className="nav-right">
        <div className="search-wrap">
          <svg className="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M21 21l-4.35-4.35" stroke="#999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="11" cy="11" r="6" stroke="#999" strokeWidth="1.5"/>
          </svg>
          <input
            className="search-input"
            placeholder="Search anime or movie"
            onChange={(e) => onSearch && onSearch(e.target.value)}
          />
        </div>
      </div>
    </header>
  )
}