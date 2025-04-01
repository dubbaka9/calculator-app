import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import Input from './Input';

describe('Input Component', () => {
  test('renders input field with placeholder', () => {
    render(<Input placeholder="Enter text" />);
    const inputElement = screen.getByPlaceholderText(/Enter text/i);
    expect(inputElement).toBeInTheDocument();
  });

  test('displays the correct value', () => {
    render(<Input value="Test value" />);
    const inputElement = screen.getByDisplayValue(/Test value/i);
    expect(inputElement).toBeInTheDocument();
  });

  test('calls onChange function when value changes', () => {
    const handleChange = vi.fn();
    render(<Input onChange={handleChange} />);
    const inputElement = screen.getByRole('textbox');
    inputElement.value = 'New value';
    inputElement.dispatchEvent(new Event('input', { bubbles: true }));
    expect(handleChange).toHaveBeenCalled();
  });
});