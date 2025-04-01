import React from 'react';
import Button from '../../atoms/Button/Button';
import './CalculatorKeypad.css';

const CalculatorKeypad: React.FC<{ onButtonClick: (value: string) => void }> = ({ onButtonClick }) => {
    const buttons = [
        '7', '8', '9', '/',
        '4', '5', '6', '*',
        '1', '2', '3', '-',
        '0', '.', '=', '+'
    ];

    return (
        <div className="calculator-keypad">
            {buttons.map((label) => (
                <Button key={label} label={label} onClick={() => onButtonClick(label)} />
            ))}
        </div>
    );
};

export default CalculatorKeypad;