import './Gameboard.css';
import React from 'react'
import Gamebutton from './Gamebutton.js';
import Edges from './Edges';
import { useState } from 'react';

function Gameboard(props) {
    const size = props.size
    const edgeweight = (1/((props.size * 9) + 1)) * 500;
    const marginofbutton = edgeweight / 2;
    const edgenumber = (size*(size+1) * 2)
    let buttons = []
    let edge = []
    //pushing buttons into an array to keep track of
    for (let i = 0; i < size*size; i++) {
        buttons.push(i)
    }
    //pushing edges onto arrays
    for (let i = 0; i < edgenumber; i ++) {
        edge.push(i)
    }
    const [edges, setedges] = useState(edge)
    let buttongridsize = 500 - edgeweight
    let sizing = {width: buttongridsize,
        height: buttongridsize,
        "margin-top": marginofbutton+"px" }



    return (
        <div className="gameboard">
            <div className="buttongrid" style={sizing}>
                <Gamebutton size={size}></Gamebutton>
            </div>
            <div className="edges">
                <Edges size={size} edges={edges} setedges={setedges}></Edges>
            </div>
        </div>
  );
}

export default Gameboard;
