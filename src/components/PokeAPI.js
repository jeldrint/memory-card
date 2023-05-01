import React, {useState,useEffect, Suspense} from 'react'
import RenderImg from './RenderImg';

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
            <RenderImg pokemon={pokemon}/>
            <RenderImg pokemon={pokemon}/>
            <RenderImg pokemon={pokemon}/>
            <RenderImg pokemon={pokemon}/>
        </>
    )
}

export default PokeAPI