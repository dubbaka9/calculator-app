export type CalculatorOperation = 'addition' | 'subtraction' | 'multiplication' | 'division';

export interface CalculationResult {
    result: number;
    operation: CalculatorOperation;
}

export interface CalculatorState {
    currentInput: string;
    previousInput: string;
    operation: CalculatorOperation | null;
}