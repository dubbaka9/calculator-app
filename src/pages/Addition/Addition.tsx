import React, { useState } from 'react';
import CalculatorDisplay from '../../components/molecules/CalculatorDisplay/CalculatorDisplay';
import CalculatorKeypad from '../../components/organisms/CalculatorKeypad/CalculatorKeypad';
import './Addition.css';

const Addition: React.FC = () => {
    const [result, setResult] = useState<number | null>(null);

    const handleCalculation = (value: number) => {
        setResult(prevResult => (prevResult !== null ? prevResult + value : value));
    };

    return (
        <div 
            className="addition-container"
            role="main"
            aria-label="Addition Calculator"
        >
            <h1>Addition</h1>
            <div role="region" aria-live="polite">
                <CalculatorDisplay result={result?.toString() || ''} />
            </div>
            <CalculatorKeypad onButtonClick={handleCalculation} />
        </div>
    );
};

export default Addition;