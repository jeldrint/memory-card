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

    const numArr = GenerateRandomNumbers();
    const sortedNumArr = numArr.sort((a,b)=>a-b);

    return(
        <>
            <RenderImg pokemon={pokemon}/>
            <RenderImg pokemon={pokemon}/>
            <RenderImg pokemon={pokemon}/>
            <RenderImg pokemon={pokemon}/>
            <RenderImg pokemon={pokemon}/>
            <RenderImg pokemon={pokemon}/>
            <RenderImg pokemon={pokemon}/>
            <RenderImg pokemon={pokemon}/>
            <RenderImg pokemon={pokemon}/>
            <RenderImg pokemon={pokemon}/>
            <RenderImg pokemon={pokemon}/>
            <RenderImg pokemon={pokemon}/>
        </>
    )
}

const GenerateRandomNumbers = () => {
    let numArr = [];

    for(let i=0; i<12; i++){
        numArr.push(Math.floor(Math.random()*150) +1);
    }

    return numArr
}

export default PokeAPI