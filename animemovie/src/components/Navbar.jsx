import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/navbar.css'

export default function Navbar({ onSearch }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="nav">
      <div className="nav-left">
        <Link className="linknone" to="/home" onClick={() => setOpen(false)}>
        <div className="brand">Animemovie</div>
        </Link>
      </div>

      <button className="nav-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu">
        <span className={`hamburger ${open ? 'is-open' : ''}`}></span>
      </button>

      <nav className={`nav-center ${open ? 'open' : ''}`}>
        <Link className="nav-link" to="/login" onClick={() => setOpen(false)}>Login</Link>
        <Link className="nav-link" to="/login" onClick={() => setOpen(false)}>Logout</Link>
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