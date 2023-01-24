import './Button.css';

function Button(props) {
  return (
    <div className="button">
        <h2 className="text">{props.size}x{props.size}</h2>
    </div>
  );
}

export default Button;
