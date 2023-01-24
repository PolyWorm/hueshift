import './Gameboard.css';
import React from 'react'
import Gamebutton from './Gamebutton.js';
import Edges from './Edges';
import { useState } from 'react';

function Gameboard(props) {
    const size = props.size
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



    return (
        <div className="gameboard">
            <div className="buttongrid">
                <Gamebutton size={size}></Gamebutton>
            </div>
            <div className="edges">
                <Edges size={size} edges={edges} setedges={setedges}></Edges>
            </div>
        </div>
  );
}

export default Gameboard;
