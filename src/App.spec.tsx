import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import CalculatorDisplay from './CalculatorDisplay';

describe('CalculatorDisplay', () => {
  test('renders the display with the correct value', () => {
    render(<CalculatorDisplay value="123" />);
    const displayElement = screen.getByText(/123/i);
    expect(displayElement).toBeInTheDocument();
  });

  test('renders empty display when no value is provided', () => {
    render(<CalculatorDisplay value="" />);
    const displayElement = screen.getByText(/0/i);
    expect(displayElement).toBeInTheDocument();
  });
});