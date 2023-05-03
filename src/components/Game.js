import React, {useEffect, useState} from "react";
import RenderImg from "./RenderImg";
import DivSwitch from "./DivSwitch";
import Scoring from "./Scoring";

const Game = (props) => {
    const [pokeArr, setpokeArr] = useState([]);
    const [score,setScore] = useState(0);
    const [pokeName,setPokeName] = useState([]);

    useEffect(()=> {
        const documentOnClick = (e) =>{
            if(e.target.className === 'poke-img' || e.target.parentNode.className === 'poke-img' || pokeArr.length === 0){
                setpokeArr(()=>{
                    return DivSwitch(pokeArr);
                })
                if(e.target.className === 'poke-img' && !pokeName.includes(e.target.id)){
                    setPokeName(prev => [...prev, e.target.id])
                    setScore(prev=>prev+1);
                }else if(e.target.parentNode.className === 'poke-img' && !pokeName.includes(e.target.parentNode.id)){
                    setPokeName(prev => [...prev, e.target.parentNode.id])
                    setScore(prev=>prev+1);
                }else{
                    //game over
                    console.log(e.target.className,!pokeName.includes(e.target.id))
                    setPokeName([])
                    setScore(0);
                }
            }else{
                e.preventDefault();
            }
        }
        console.log(pokeName);
        document.addEventListener('click',documentOnClick)
        return () => document.removeEventListener('click',documentOnClick)

    },[pokeArr])

    return (
        <>
            <div className='container'>
                <Scoring score={score} pokeName={pokeName} />
                <div className="game-area">
                    {pokeArr.map(randNum => {
                    return(
                        <RenderImg pokemon={props.pokemon} index={randNum}/>
                    )
                    })}
                </div>
            </div>

        </>
    )
}

export default Game
