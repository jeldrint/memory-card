import React, {useState,useEffect} from 'react'
import Game from './Game'

const PokeAPI = () => {
    const [pokemon, setPokemon] = useState([]);
    
    useEffect(()=>{
        const fetchPokeData = async () => {
            const data = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
            const response = await data.json();
            setPokemon(response.results)
        }

        fetchPokeData()
    },[])

    return(
        <>
            <Game pokemon={pokemon} />
        </>
    )
}

export default PokeAPI