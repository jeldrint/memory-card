import React, {useEffect, useState} from "react";
import RenderImg from "./RenderImg";

const Game = (props) => {
    const [tempArr, setTempArr] = useState([]);
    let numArr = GenerateRandomNumbers();

    return (
        <>
            {numArr.map(randNum =>{
                return(
                    <RenderImg pokemon={props.pokemon} index={randNum}/>
                )
            })}
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

export default Game