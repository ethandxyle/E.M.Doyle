import React, { useState } from 'react';
import { getRandomDice } from './helper';
import Dice from './components/Dice';
import './App.css';

const App = () => {
    const [dice1, setDice1] = useState(0);
    const [dice2, setDice2] = useState(0);

    const rollDice = () => {
        setDice1(getRandomDice());
        setDice2(getRandomDice());
    };

    const sum = dice1 + dice2 + 2;

    return (
        <div className="App">
            <h1>Dice Roll Simulator</h1>
            <div className="dice-container">
                <Dice diceValue={dice1} />
                <Dice diceValue={dice2} />
            </div>
            <div className="dice-numbers">
                {dice1 !== null && dice2 !== null && (
                    <p>
                        The sum of your rolls is: {sum}
                    </p>
                )}
            </div>
            <button onClick={rollDice}>Roll Dice</button>

        </div>
    );
};

export default App;
