import React from 'react';
import CalculatorDisplay from '../../components/molecules/CalculatorDisplay/CalculatorDisplay';
import CalculatorKeypad from '../../components/organisms/CalculatorKeypad/CalculatorKeypad';
import CalculatorHistory from '../../components/molecules/CalculatorHistory/CalculatorHistory';
import useCalculator from '../../hooks/useCalculator';
import './Addition.css';

const Addition: React.FC = () => {
    const { result, history, handleCalculation } = useCalculator();

    return (
        <div className="addition-container">
            <h1>Addition</h1>
            <CalculatorDisplay result={result?.toString() || ''} />
            <CalculatorKeypad onButtonClick={handleCalculation} />
            <CalculatorHistory history={history} />
        </div>
    );
};

export default Addition;