import React from 'react';
import { diceValues } from '../helper';

const Dice = ({ diceValue }) => {
    return (
        <div className="dice">
            <i className={`fas fa-dice-${diceValues[diceValue]}`} />
        </div>
    );
};

export default Dice;
