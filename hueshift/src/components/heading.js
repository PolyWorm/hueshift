

function Heading() {
  return (
    <header className="heading">
        <div className="logo">
            <object data="path/to/image.svg" type="image/svg+xml" width="200" height="200">
                <img src="path/to/fallback.png" alt="description of image"></img>
            </object>
        </div>
    </header>
  );
}

export default Heading;
