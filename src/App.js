import React, { useState } from 'react'
import PokeAPI from './components/PokeAPI'
import Scoring from './components/Scoring'

const App = () => {
  const dummyScore = 0;
  
  return (
    <div className='container'>
      <h1>Hello, Player {dummyScore}</h1>
      <div className="game-area">
        <PokeAPI/>      
      </div>    
    </div>
  )
}

export default App