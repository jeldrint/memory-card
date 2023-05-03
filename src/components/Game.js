import React, {useEffect, useState} from "react";
import RenderImg from "./RenderImg";
import DivSwitch from "./DivSwitch";
import Scoring from "./Scoring";

const Game = (props) => {
    const [pokeArr, setpokeArr] = useState([]);
    const [score,setScore] = useState(0);
    const [pokeName,setPokeName] = useState('');
    const [playerSelect, setPlayerSelect] = useState([])

    useEffect(()=> {
        const documentOnClick = (e) =>{
            if(e.target.className === 'poke-img' || e.target.parentNode.className === 'poke-img' || pokeArr.length === 0){
                if(e.target.className === 'poke-img'){
                    setPlayerSelect(prev=> [...prev,pokeName])
                    setPokeName(e.target.id)
                }else{
                    setPokeName(e.target.parentNode.id)
                }
                setScore(prev=>prev+1);
                setpokeArr(()=>{
                    return DivSwitch(pokeArr);
                })
            }else{
                e.preventDefault();
            }
        }
        console.log(playerSelect,pokeName);
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
