import './Edges.css';
import Edge from './Edge.js';
import React from 'react'

function Edges(props) {
    //equation for finding the width of the edges.
    let edges = props.edges
    let size = props.size
    const width = (1/((props.size * 9) + 1)) * 500;
    const length = 500 / props.size;

    let horizontaledges = []
    let verticaledges = []
    //horizontal
    for (let i = 0; i < edges.size; i += (size + size + 1)) {
        //horizontal
        let tempedges = []
        for (let j = i; j < size; j++){
            tempedges.push(<Edge position={"horizontal"} number={j} edges={edges} size={props.size}></Edge>)
        }
        horizontaledges.push(tempedges)
        //vertical
        tempedges = []
        for (let j = i + size; j < (size + size + 1); j++){
            tempedges.push(<Edge position={"vertical"} number={j} edges={edges} size={props.size}></Edge>)
        }
        verticaledges.push(tempedges)
    }

    //vertical
    return (
        <div className="test">
            <Edge position={"horizontal"} number={3} edges={edges} size={size}></Edge>
        </div>
    );
}

export default Edges;
