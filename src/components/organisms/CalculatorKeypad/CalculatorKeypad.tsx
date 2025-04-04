import React from 'react';
import Button from '../../atoms/Button/Button';
import './CalculatorKeypad.css';

interface CalculatorKeypadProps {
    onButtonClick: (value: string) => void;
}

const CalculatorKeypad: React.FC<CalculatorKeypadProps> = ({ onButtonClick }) => {
    const buttons = [
        'C', '±', '%', '/',
        '7', '8', '9', '*',
        '4', '5', '6', '-',
        '1', '2', '3', '+',
        '0', '.', 'Del', '='
    ];

    const specialButtons = {
        'C': 'clear',
        '±': 'negate',
        '%': 'percent',
        'Del': 'delete'
    };

    const getButtonStyle = (label: string) => {
        switch(label) {
            case 'C':
            case 'Del':
                return { backgroundColor: '#ff4d4d' };
            case '+':
            case '-':
            case '*':
            case '/':
            case '=':
                return { backgroundColor: '#ffa500' };
            case '±':
            case '%':
                return { backgroundColor: '#808080' };
            default:
                return {};
        }
    };

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
                    onClick={() => onButtonClick(specialButtons[label as keyof typeof specialButtons] || label)}
                    style={getButtonStyle(label)}
                />
            ))}
        </div>
    );
};

export default CalculatorKeypad;