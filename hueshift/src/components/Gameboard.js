import './Gameboard.css';
import Gamebutton from './Gamebutton.js';


function Gameboard(props) {
    const size = props.getSize
    let buttons = []
    let edges = []
    //pushing buttons into an array to keep track of
    for (let i = 0; i < size*size; i++) {
        buttons.push(i)
    }

    return (
        <div className="gameboard">
            <Gamebutton size={size}></Gamebutton>
        </div>
  );
}

export default Gameboard;
