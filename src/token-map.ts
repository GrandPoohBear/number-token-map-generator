import { Token } from './models';
import { tryForBirthdayToken } from './tokens/birthday';
import { tryForCubeToken } from './tokens/cube';
import { tryForFibonacciToken } from './tokens/fibonacci';
import { tryForPrimeToken } from './tokens/prime';
import { tryForSquareToken } from './tokens/square';

const tokenPredicates: ((num: number) => Token[])[] = [
  tryForPrimeToken,
  tryForSquareToken,
  tryForCubeToken,
  tryForFibonacciToken,
  tryForBirthdayToken,
];

const getTokens = (num: number): Token[] => {
  return tokenPredicates.flatMap((p) => p(num) || []);
};

export const buildTokenMap = (): { [key: number]: Token[] } => {
  const tokenMap: { [key: number]: Token[] } = {};

  for (let i = 0; i < 2359; i++) {
    tokenMap[i] = getTokens(i);
  }

  return tokenMap;
};
