import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import Division from './Division';

describe('Division Component', () => {
  test('renders Division page', () => {
    render(<Division />);
    const headingElement = screen.getByText(/Division/i);
    expect(headingElement).toBeInTheDocument();
  });
});