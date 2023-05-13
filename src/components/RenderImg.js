import React from "react";
import '../styles/style.css'
import Scoring from "./Scoring";

const RenderImg = (props) => {
    const imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${props.index}.svg`

    let pokeName = props.pokemon[props.index-1].name

    return(
        <>
            <div className='poke-img' id={pokeName}>
                <img src = {imgSrc} style={{height: '150px', width: '150px'}}/>
                <div className="poke-name">{pokeName}</div>
            </div>
        </>
    )
}

export default RenderImg;