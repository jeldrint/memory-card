import React from 'react'
import PokeAPI from './components/PokeAPI'

const App = () => {
  
  return (
    <div className='container'>
      <h1>Hello, Player</h1>
      <div className="game-area">
        <PokeAPI />      
      </div>    
    </div>
  )
}

export default App