import React, { useState, useEffect } from "react";

const Scoring = (props) => {
    console.log(props.score, props.pokeName);

    return (
        <h1>Hello Player, {props.score}</h1>
    )
}

export default Scoring