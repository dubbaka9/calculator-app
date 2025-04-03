import React, { useState } from 'react';
import CalculatorDisplay from '../../components/molecules/CalculatorDisplay/CalculatorDisplay';
import CalculatorKeypad from '../../components/organisms/CalculatorKeypad/CalculatorKeypad';
import './Addition.css';

const Addition: React.FC = () => {
    const [result, setResult] = useState<number | null>(null);

    const handleCalculation = (value: number) => {
        setResult(prevResult => (prevResult !== null ? prevResult + value + 2 : value + 2 ));
    };

    return (
        <div className="addition-container">
            <h1>Addition</h1>
            <CalculatorDisplay result={result} />
            <CalculatorKeypad onButtonClick={handleCalculation} />
        </div>
    );
};

export default Addition;