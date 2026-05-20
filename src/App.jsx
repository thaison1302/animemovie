import React from 'react'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import './styles/navbar.css'
import './styles/hero.css'
import './styles/release.css'
import './styles/genrefilter.css'
import Navbar from './components/Navbar.jsx'
import Hero from './components/hero.jsx'
import ReleaseSection from './components/Release.jsx'
import './App.css'
import HomePage from './pages/HomePage.jsx'
import LoginCard from './pages/Login.jsx'
import SignUp from './pages/SignUp.jsx'
import ViewFilm from './pages/ViewFilm.jsx'
import { data } from './data/data.js'
import InMovie from './pages/InMovie.jsx'

function App() {

  const [searchTerm, setSearchTerm] = React.useState('')
  console.log(searchTerm)
  return (
    <div className="app-root">
      <Navbar onSearch={(searchTerm) => setSearchTerm(searchTerm)} />

      <Routes>
          <Route path="*" element={<HomePage searchTerm={searchTerm} />} />
          <Route path="/home" element={<HomePage searchTerm={searchTerm} />} />
          <Route path="/login" element={<LoginCard />} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/viewfilm/:id" element={<ViewFilm />} />
          <Route path="/inmovie/:id" element={<InMovie />} />
          <Route path="/inmovie/:idFilm/:link" element={<InMovie />} />


      </Routes>
    </div>

  )
}

export default App
