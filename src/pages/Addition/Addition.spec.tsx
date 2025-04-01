import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import Addition from './Addition';

describe('Addition Component', () => {
  test('renders Addition page', () => {
    render(<Addition />);
    const headingElement = screen.getByText(/Addition/i);
    expect(headingElement).toBeInTheDocument();
  });
});