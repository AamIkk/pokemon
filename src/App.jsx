import React from 'react'
import './App.css'
import PokemonList from './components/PokemonList'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PokemonList />} />
      </Routes>
    </div>
  )
}

export default App