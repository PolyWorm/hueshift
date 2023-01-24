import './Gamebutton.css';

function Gamebutton(props) {
    //equation for finding the width of the button.
    const size = props.size;
    const width = (6/((size * 9) + 1))+"px";
    const style = {
        width: width
    }
    return (
        <div className="gamebutton" style={style}>
        </div>
    );
}

export default Gamebutton;
