import './Gamebutton.css';
import React from 'react'

function Gamebutton(props) {
    //equation for finding the width of the button.

    
    const size = props.size
    const edges = props.edges
    const setedges = props.setedges
    const length = (6/((props.size * 9) + 1)) * 500;
    const edgefinder = (squarenumber) => {return [squarenumber, squarenumber + size, squarenumber + size + 1, squarenumber + size + 1 + size]}
    const styles = {
        width: length+"px",
        height: length+"px",
    }
    const style2 = {backgroundImage: `url("../assets/yellow.svg")`}
    let bg = {}
    for (let i = 0; i < size * size; i ++) {
        let edges = edgefinder(i)
        bg = {}
    }


    let buttons = []
    for (let i = 0; i < size; i++) {
        let buttonrow = []
        for (let j = 0; j < size; j++) {
            buttonrow.push(<div className="gamebutton" style={{...style2, ...styles}}></div>)
            //calculate positioning

        }
        buttons.push(
          <div className="buttonrow"> 
              {buttonrow}
          </div>
        );
      }

    return (
        buttons
    );
}

export default Gamebutton;
