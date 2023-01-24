import './Edges.css';
import Edge from './Edge.js';
import React from 'react'

function Edges(props) {
    //equation for finding the width of the edges.
    let edges = props.edges
    let edgecount = props.edges.length
    let size = props.size
    let count = size
    const width = (1/((props.size * 9) + 1)) * 500;
    const length = 500 / props.size;
    let horizontaledges = []
    let verticaledges = []

    //horizontal
    for (let i = 0; i < edgecount; i += (size + size + 1)) {
        //horizontal
        let tempedges = []
        for (let j = i; j < count; j++){
            tempedges.push(<Edge position={"horizontal"} number={edges[j]} edges={edges} size={props.size}></Edge>)
        }
        horizontaledges.push(<div className="horizontalrow"> 
            {tempedges}
        </div>)
        //vertical
        tempedges = []
        if (count >= edgecount) {
            break
        }
        for (let j = count; j < (count + size + 1); j++){
            tempedges.push(<Edge position={"vertical"} number={j} edges={edges} size={props.size}></Edge>)
        }
        verticaledges.push(<div className="verticalcolumn"> 
            {tempedges}
        </div>)
        count += size + size + 1
    }

    //vertical
    return (
        <div className="test">
            <div className="horizontal">{horizontaledges}</div>
            <div className="vertical">{verticaledges}</div>
        </div>
    );
}

export default Edges;
