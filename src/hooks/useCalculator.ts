import { useState } from 'react';

const useCalculator = () => {
    const [result, setResult] = useState<number | null>(null);
    const [input, setInput] = useState<string>('');

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
        return sum;
    };

    const subtract = (num1: number, num2: number) => {
        const difference = num1 - num2;
        setResult(difference);
        return difference;
    };

    const multiply = (num1: number, num2: number) => {
        const product = num1 * num2;
        setResult(product);
        return product;
    };

    const divide = (num1: number, num2: number) => {
        if (num2 === 0) {
            throw new Error('Cannot divide by zero');
        }
        const quotient = num1 / num2;
        setResult(quotient);
        return quotient;
    };

    return {
        input,
        result,
        handleInputChange,
        clearInput,
        add,
        subtract,
        multiply,
        divide,
    };
};

export default useCalculator;