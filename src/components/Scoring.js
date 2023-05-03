import React, { useState, useEffect } from "react";

const Scoring = (props) => {
    const [nameArr, setNameArr] = useState([])

    useEffect (()=> {
        if(props.pokeName === undefined){
            setNameArr([]);
        }
        setNameArr(prevName => {
            return [...prevName, 'hello']
        })    
    },[])
    //console.log(props.score, props.pokeName, nameArr);

    return (
        <h1>Hello Player, {props.score}</h1>
    )
}

export default Scoring