import React, {useEffect, useState} from "react";
import RenderImg from "./RenderImg";
import DivSwitch from "./DivSwitch";
import Scoring from "./Scoring";

const Game = (props) => {
    const [pokeArr, setpokeArr] = useState([]);

    useEffect(()=> {
        const documentOnClick = (e) =>{
            if(e.target.className === 'poke-img' || e.target.parentNode.className === 'poke-img' || pokeArr.length === 0){
                let pokeName = ''
                if(e.target.className === 'poke-img'){
                    pokeName = e.target.id
                }else{
                    pokeName = e.target.parentNode.id
                }
                Scoring(pokeName);
                setpokeArr(()=>{
                    return DivSwitch(pokeArr);
                })    
            }else{
                e.preventDefault();
            }
        }
        document.addEventListener('click',documentOnClick)
        return () => document.removeEventListener('click',documentOnClick)

    },[pokeArr])

    return (
        <>
            {pokeArr.map(randNum => {
                return(
                    <RenderImg pokemon={props.pokemon} index={randNum}/>
                )
            })}
        </>
    )
}

export default Game
