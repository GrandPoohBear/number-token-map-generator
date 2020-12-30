import { Token } from './models';
import { tryForBirthdayToken } from './tokens/birthday';
import { tryForCubeToken } from './tokens/cube';
import { tryForFibonacciToken } from './tokens/fibonacci';
import { tryForPrimeToken } from './tokens/prime';
import { tryForSquareToken } from './tokens/square';
import { tryForPersonalToken } from './tokens/personal';
import _ from 'lodash';
import { tryForPalindromeToken } from './tokens/palindrome';
import { tryForPairedMultipleToken } from './tokens/paired-multiple';
import { tryForAllDigitsMatchToken } from './tokens/all-digits-match';
import { tryForPowerToken } from './tokens/powers';

const tokenPredicates: ((num: number) => Token[])[] = [
  tryForPrimeToken,
  tryForSquareToken,
  tryForCubeToken,
  tryForFibonacciToken,
  tryForBirthdayToken,
  tryForPersonalToken,
  tryForPalindromeToken,
  tryForPairedMultipleToken,
  tryForAllDigitsMatchToken,
  tryForPowerToken,
];

const getTokens = (num: number): Token[] => {
  return tokenPredicates
    .flatMap((p) => p(num) || [])
    .filter(
      (t: Token) =>
        _.isNumber(t.relevance) && _.isFinite(t.relevance) && t.relevance > 0
    );
};

export const buildTokenMap = (): { [key: number]: Token[] } => {
  const tokenMap: { [key: number]: Token[] } = {};

  for (let i = 0; i < 2359; i++) {
    const tokens = getTokens(i);
    if (tokens.length > 0) {
      tokenMap[i] = tokens;
    }
  }

  return tokenMap;
};
