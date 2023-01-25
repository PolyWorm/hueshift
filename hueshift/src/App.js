import './App.css';
import Heading from './components/Heading.js';
import Gameboard from './components/Gameboard.js';
import React from 'react'
import { useState } from 'react';

function App() {

  const [getSize, setSize] = useState(4);
  const [edges, setEdges] = useState([]);

  return (
    <div className="body">
      <div className="gamecontainer">
        <Heading setSize={setSize}></Heading>
        <Gameboard size={getSize} edges={edges} setEdges={setEdges}></Gameboard>
      </div>
    </div>

  );
}

export default App;
