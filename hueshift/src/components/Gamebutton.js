import './Gamebutton.css';
import React from 'react'

function Gamebutton(props) {
    //equation for finding the width of the button.
    const size = props.size
    const length = (6/((props.size * 9) + 1)) * 500;
    const styles = {
        width: length+"px",
        height: length+"px",
    }

    let buttons = []

    for (let i = 0; i < size; i++) {
        let buttonrow = []
        for (let j = 0; j < size; j++) {
            buttonrow.push(<div className="gamebutton" style={styles}></div>)
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
