import { TimeNumber } from '../../models';
import {
  findPrimeFactors,
  PrimeFactorizationGenerator,
  formatPrimeFactorization,
} from '../prime-factorization';

const factorizationGenerator = new PrimeFactorizationGenerator();

const timeA = new TimeNumber(7, 34);
const timeB = new TimeNumber(10, 9);

test('findPrimeFactors', () => {
  expect(findPrimeFactors(12)).toEqual([[2, 2], [3]]);
  expect(findPrimeFactors(734)).toEqual([[2], [367]]);
  expect(findPrimeFactors(1009)).toEqual([[1009]]);
});

test('formatPrimeFactorization', () => {
  expect(formatPrimeFactorization(findPrimeFactors(12))).toBe('2^2 * 3');
  expect(formatPrimeFactorization(findPrimeFactors(1125))).toBe('3^2 * 5^3');
});

test('getTokens', () => {
  expect(factorizationGenerator.getTokens(timeA)[0].description).toBe(
    'Prime factorization of 734 is 2 * 367'
  );
  expect(factorizationGenerator.getTokens(timeB)).toEqual([]);
});
