import { describe, it, expect } from 'vitest';
import { add, subtract, multiply, divide } from './calculations';

describe('Calculation Utilities', () => {
  describe('add', () => {
    it('should return the sum of two numbers', () => {
      expect(add(1, 2)).toBe(3);
      expect(add(-1, 1)).toBe(0);
      expect(add(0, 0)).toBe(0);
    });
  });

  describe('subtract', () => {
    it('should return the difference of two numbers', () => {
      expect(subtract(2, 1)).toBe(1);
      expect(subtract(1, 1)).toBe(0);
      expect(subtract(0, 1)).toBe(-1);
    });
  });

  describe('multiply', () => {
    it('should return the product of two numbers', () => {
      expect(multiply(2, 3)).toBe(6);
      expect(multiply(-1, 1)).toBe(-1);
      expect(multiply(0, 5)).toBe(0);
    });
  });

  describe('divide', () => {
    it('should return the quotient of two numbers', () => {
      expect(divide(6, 3)).toBe(2);
      expect(divide(5, 2)).toBe(2.5);
    });

    it('should return NaN when dividing by zero', () => {
      expect(divide(1, 0)).toBe(NaN);
    });
  });
});