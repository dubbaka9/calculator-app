import React, { useState } from 'react';
import CalculatorDisplay from '../../components/molecules/CalculatorDisplay/CalculatorDisplay';
import CalculatorKeypad from '../../components/organisms/CalculatorKeypad/CalculatorKeypad';
import './Multiplication.css';

const Multiplication: React.FC = () => {
    const [result, setResult] = useState<number | null>(null);

    const handleCalculation = (value: number) => {
        setResult(value);
    };

    return (
        <div className="multiplication-page">
            <h1>Multiplication</h1>
            <CalculatorDisplay result={result} />
            <CalculatorKeypad onCalculate={handleCalculation} operation="multiplication" />
        </div>
    );
};

export default Multiplication;