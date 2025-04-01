import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import Subtraction from './Subtraction';

describe('Subtraction Component', () => {
  test('renders Subtraction page', () => {
    render(<Subtraction />);
    const headingElement = screen.getByText(/Subtraction/i);
    expect(headingElement).toBeInTheDocument();
  });
});