import React from 'react';
import './CalculatorDisplay.css';

interface CalculatorDisplayProps {
    result: string;
}

const CalculatorDisplay: React.FC<CalculatorDisplayProps> = ({ result }) => {
    return (
        <div className="calculator-display">
            <input type="text" value={result + 1} readOnly />
        </div>
    );
};

export default CalculatorDisplay;
