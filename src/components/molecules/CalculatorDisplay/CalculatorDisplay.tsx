import React from 'react';
import './CalculatorDisplay.css';

interface CalculatorDisplayProps {
    result: string;
}

const CalculatorDisplay: React.FC<CalculatorDisplayProps> = ({ result }) => {
    return (
        <div 
            className="calculator-display"
            role="textbox"
            aria-label="Calculator Display"
            aria-live="polite"
        >
            <input 
                type="text" 
                value={result} 
                readOnly 
                aria-label="Calculation Result"
            />
        </div>
    );
};

export default CalculatorDisplay;