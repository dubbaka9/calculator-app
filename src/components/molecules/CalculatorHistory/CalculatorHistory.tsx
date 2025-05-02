import React from 'react';
import './CalculatorHistory.css';

export interface CalculationEntry {
  id: number;
  firstNumber: number;
  secondNumber: number;
  operation: string;
  result: number;
  timestamp: string;
}

interface CalculatorHistoryProps {
  history: CalculationEntry[];
}

const CalculatorHistory: React.FC<CalculatorHistoryProps> = ({ history }) => {
  return (
    <div className="calculator-history">
      <h2>Calculation History</h2>
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>First Number</th>
            <th>Operation</th>
            <th>Second Number</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          {history.map((entry) => (
            <tr key={entry.id}>
              <td>{new Date(entry.timestamp).toLocaleTimeString()}</td>
              <td>{entry.firstNumber}</td>
              <td>{entry.operation}</td>
              <td>{entry.secondNumber}</td>
              <td>{entry.result}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CalculatorHistory;