import './Edge.css';
import React from 'react'


function Edge(props) {

    const size = props.size
    const width = (1/((props.size * 9) + 1)) * 500;
    const length = 500 / size;
    let style1 = {
        width: length+"px",
        height: width+"px"
    }
    

    if (props.position == "horizontal") {
        style1 = {       
            width: length+"px",
            height: width+"px"
        }
    }
    else if (props.position == "vertical") {
        style1 = {       
            width: width+"px",
            height: length+"px"
        }
    }
    return (
        <div style={style1} className="edge">
        </div>
    );
}

export default Edge;
