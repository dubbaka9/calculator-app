import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import Multiplication from './Multiplication';

describe('Multiplication Component', () => {
  test('renders Multiplication page', () => {
    render(<Multiplication />);
    const headingElement = screen.getByText(/Multiplication/i);
    expect(headingElement).toBeInTheDocument();
  });
});