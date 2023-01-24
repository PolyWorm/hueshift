import './Edge.css';
import React from 'react'


function Edge(props) {

    const size = props.size
    const colorproperty = props.number % 3
    const width = (1/((props.size * 9) + 1)) * 500;
    const length = 500 / size;
    let style1 = {
        width: length+"px",
        height: width+"px"
    }
    let style2 = {}
    if (colorproperty == 0) {
        style2 = {
            "background-color": "#FFEB2E"
        }
    }
    if (colorproperty == 1) {
        style2 = {
            "background-color": "#45FBF3"
        }
    }
    if (colorproperty == 2) {
        style2 = {
            "background-color": "#FF84CB"
        }
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
        <div style={{...style1, ...style2}} className="edge">
        </div>
    );
}

export default Edge;
