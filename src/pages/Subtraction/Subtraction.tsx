import React, { useState } from 'react';
import CalculatorDisplay from '../../components/molecules/CalculatorDisplay/CalculatorDisplay';
import CalculatorKeypad from '../../components/organisms/CalculatorKeypad/CalculatorKeypad';
import './Subtraction.css';

const Subtraction: React.FC = () => {
    const [result, setResult] = useState<number | null>(null);
    const [inputValues, setInputValues] = useState<{ first: number; second: number }>({ first: 0, second: 0 });

    const handleCalculation = (first: number, second: number) => {
        const subtractionResult = first - second;
        setResult(subtractionResult);
    };

    const handleInputChange = (field: 'first' | 'second', value: number) => {
        setInputValues((prev) => ({ ...prev, [field]: value }));
    };

    return (
        <div className="subtraction-page">
            <h1>Subtraction</h1>
            <CalculatorDisplay result={result} />
            <CalculatorKeypad
                onCalculate={() => handleCalculation(inputValues.first, inputValues.second)}
                onInputChange={handleInputChange}
            />
        </div>
    );
};

export default Subtraction;