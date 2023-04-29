import React from 'react'

const PokeAPI = () => {
    let pokeArr = [];

    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(response => response.json())
    .then(pokemons => {
        for(let i=0; i < pokemons.results.length; i++){
            pokeArr.push(pokemons.results[i])
        }
    })
    console.log(pokeArr)
    return(
        <div>
            {pokeArr.map(item=> {
               return <pre>{JSON.stringify(item)}</pre>
            })}
            <h1>Asan na yung mga pokemon?</h1>
        </div>
    )
}

export default PokeAPI