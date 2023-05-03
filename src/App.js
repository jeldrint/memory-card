import React, { useState } from 'react'
import PokeAPI from './components/PokeAPI'
import Scoring from './components/Scoring'

const App = () => {
  
  return (
    <div className='container'>
      <Scoring />
      <div className="game-area">
        <PokeAPI/>      
      </div>    
    </div>
  )
}

export default App