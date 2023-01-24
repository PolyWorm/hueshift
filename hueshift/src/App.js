import './App.css';
import Heading from './components/Heading.js';
import Gameboard from './components/Gameboard.js';
import React from 'react'
import { useState } from 'react';

function App() {

  const [getSize, setSize] = useState(4);

  return (
    <div className="body">
      <div className="gamecontainer">
        <Heading></Heading>
        <Gameboard size={getSize}></Gameboard>
      </div>
    </div>

  );
}

export default App;
