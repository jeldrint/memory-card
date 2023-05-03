import React, { useState, useEffect } from "react";

const Scoring = (props) => {


    return (
        <div className="interface">
            <h1>Hello Player.</h1>
            <h4>Click anywhere to start</h4>
            <div className="interface-right">
                <h3 style={{margin: 0}}>Your score is {props.score} </h3>
                <h3 style={{margin: 0}}>Level 1 </h3>
            </div>
        </div>
    )
}

export default Scoring