import './Heading.css';
import Timer from './Timer.js'
import React from 'react'
import Besttime from './Besttime.js';
import Button from './Button.js';
import Reset from './Reset.js';
import { useState } from 'react';

function Heading() {

    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(true);
    const [time, setTime] = useState(0.00);

    return (
        <header>
            <div className="heading">
                <div className="logocontainer">
                    <div className="logo"/>
                    <h1 className="h1">hueshift.io</h1>
                </div>
                <Besttime></Besttime>
                <Timer time={time}></Timer>
            </div>
            <div className="controlbar">
                <Button size="3"></Button>
                <Button size="4"></Button>
                <Button size="5"></Button>
                <Reset></Reset>
            </div>
        </header>
    );
}

export default Heading;
