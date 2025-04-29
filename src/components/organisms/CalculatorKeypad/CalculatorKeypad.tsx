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
        <div 
            className="calculator-keypad"
            role="grid"
            aria-label="Calculator Keypad"
        >
            {buttons.map((label) => (
                <Button 
                    key={label} 
                    label={label} 
                    onClick={() => onButtonClick(label)}
                    aria-label={getAriaLabel(label)}
                />
            ))}
        </div>
    );
};

const getAriaLabel = (label: string): string => {
    const labels: Record<string, string> = {
        '+': 'Add',
        '-': 'Subtract',
        '*': 'Multiply',
        '/': 'Divide',
        '=': 'Equals',
        '.': 'Decimal point'
    };
    return labels[label] || `Number ${label}`;
};

export default CalculatorKeypad;