import React from "react";
import '../styles/style.css'

const RenderImg = (props) => {
    let randNum = Math.floor(Math.random()*150) +1
    const imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${randNum}.svg`

    let pokeName = ''
    if(props.pokemon[randNum-1] == undefined){
        pokeName = 'loading...'
    }else{
        pokeName = props.pokemon[randNum-1].name
    }
    return(
        <>
            <div class='poke-img'>
                <img src = {imgSrc} style={{height: '100px'}}/>
                <p className="poke-name">{pokeName}</p>
            </div>
        </>
    )

}

export default RenderImg;