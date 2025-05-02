import { useState } from 'react';
import { CalculationEntry } from '../components/molecules/CalculatorHistory/CalculatorHistory';

const useCalculator = () => {
    const [result, setResult] = useState<number | null>(null);
    const [input, setInput] = useState<string>('');
    const [history, setHistory] = useState<CalculationEntry[]>([]);

    const addToHistory = (firstNumber: number, secondNumber: number, operation: string, result: number) => {
        const newEntry: CalculationEntry = {
            id: Date.now(),
            firstNumber,
            secondNumber,
            operation,
            result,
            timestamp: new Date().toISOString()
        };
        setHistory(prev => [newEntry, ...prev]);
    };

    const handleInputChange = (value: string) => {
        setInput(value);
    };

    const clearInput = () => {
        setInput('');
        setResult(null);
    };

    const add = (num1: number, num2: number) => {
        const sum = num1 + num2;
        setResult(sum);
        addToHistory(num1, num2, '+', sum);
        return sum;
    };

    const subtract = (num1: number, num2: number) => {
        const difference = num1 - num2;
        setResult(difference);
        addToHistory(num1, num2, '-', difference);
        return difference;
    };

    const multiply = (num1: number, num2: number) => {
        const product = num1 * num2;
        setResult(product);
        addToHistory(num1, num2, '*', product);
        return product;
    };

    const divide = (num1: number, num2: number) => {
        if (num2 === 0) {
            throw new Error('Cannot divide by zero');
        }
        const quotient = num1 / num2;
        setResult(quotient);
        addToHistory(num1, num2, '/', quotient);
        return quotient;
    };

    return {
        input,
        result,
        history,
        handleInputChange,
        clearInput,
        add,
        subtract,
        multiply,
        divide,
    };
};

export default useCalculator;