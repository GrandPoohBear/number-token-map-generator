import { Token } from '../models';

export const tryForFibonacciToken = (num: number): Token[] => {
  if (fibonacciNumbers.has(num)) {
    return [
      {
        type: 'fibonacci',
        description: `${num} is a fibonacci number!`,
        relevance: 20, //TODO: a higher number seems more relevant
      },
    ];
  }
  return [];
};

const fibonacciNumbers = new Set([
  1,
  1,
  2,
  3,
  5,
  8,
  13,
  21,
  34,
  55,
  89,
  144,
  233,
  377,
  610,
  987,
  1597,
]);
