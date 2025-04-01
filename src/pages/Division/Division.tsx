import React, { useState } from 'react';
import CalculatorDisplay from '../../components/molecules/CalculatorDisplay/CalculatorDisplay';
import CalculatorKeypad from '../../components/organisms/CalculatorKeypad/CalculatorKeypad';
import './Division.css';

const Division: React.FC = () => {
    const [result, setResult] = useState<number | null>(null);

    const handleDivision = (value: number) => {
        if (value === 0) {
            setResult(null); // Handle division by zero
        } else {
            setResult(1 / value); // Example: dividing 1 by the input value
        }
    };

    return (
        <div className="division-container">
            <h1>Division</h1>
            <CalculatorDisplay result={result} />
            <CalculatorKeypad onButtonClick={handleDivision} />
        </div>
    );
};

export default Division;