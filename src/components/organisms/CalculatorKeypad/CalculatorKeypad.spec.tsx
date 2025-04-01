import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import CalculatorKeypad from './CalculatorKeypad';

describe('CalculatorKeypad', () => {
  test('renders all buttons', () => {
    render(<CalculatorKeypad />);
    const buttons = ['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', '0', '=', '/'];
    buttons.forEach(button => {
      expect(screen.getByText(button)).toBeInTheDocument();
    });
  });

  test('calls onClick function when a button is clicked', () => {
    const mockOnClick = vi.fn();
    render(<CalculatorKeypad onClick={mockOnClick} />);
    
    const button = screen.getByText('1');
    fireEvent.click(button);
    
    expect(mockOnClick).toHaveBeenCalledWith('1');
  });
});