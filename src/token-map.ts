import _ from 'lodash';
import { TimeNumber, Token } from './models';
import { TokenGenerator } from './token-generators';
import { AllDigitsMatchGenerator } from './token-generators/all-digits-match';
import { BirthdayGenerator } from './token-generators/birthday';
import { CubeGenerator } from './token-generators/cube';
import { FibonacciGenerator } from './token-generators/fibonacci';
import { FunStuffGenerator } from './token-generators/fun';
import { HolidayGenerator } from './token-generators/holidays';
import {
  DecreasingDigitsTokenGenerator,
  IncreasingDigitsTokenGenerator,
} from './token-generators/increasing-decreasing';
import { PairedMultipleGenerator } from './token-generators/paired-multiple';
import { PalindromeGenerator } from './token-generators/palindrome';
import { PersonalGenerator } from './token-generators/personal';
import {
  PowerOf2Generator,
  PowerOf3Generator,
  PowerOf4Generator,
  PowerOf5Generator,
} from './token-generators/powers';
import { PrimeGenerator } from './token-generators/prime';
import { SquareGenerator } from './token-generators/square';
import { PrimeFactorizationGenerator } from './token-generators/prime-factorization';
import { PiSubsequenceGenerator } from './token-generators/pi-subsequence';

export const allGenerators: TokenGenerator[] = [
  new AllDigitsMatchGenerator(),
  new BirthdayGenerator(),
  new CubeGenerator(),
  new DecreasingDigitsTokenGenerator(),
  new FibonacciGenerator(),
  new FunStuffGenerator(),
  new HolidayGenerator(),
  new IncreasingDigitsTokenGenerator(),
  new PairedMultipleGenerator(),
  new PalindromeGenerator(),
  new PersonalGenerator(),
  new PowerOf2Generator(),
  new PowerOf3Generator(),
  new PowerOf4Generator(),
  new PowerOf5Generator(),
  new PrimeFactorizationGenerator(),
  new PrimeGenerator(),
  new PiSubsequenceGenerator(),
  new SquareGenerator(),
];

const getTokens = (timeNumber: TimeNumber): Token[] => {
  return allGenerators
    .flatMap((generator) => generator.getTokens(timeNumber) || [])
    .filter(
      (t: Token) =>
        _.isNumber(t.relevance) && _.isFinite(t.relevance) && t.relevance > 0
    );
};

export const buildTokenMap = (): { [key: number]: Token[] } => {
  const tokenMap: { [key: number]: Token[] } = {};

  for (let h = 0; h < 24; h++) {
    for (let m = 0; m < 60; m++) {
      const timeNumber = new TimeNumber(h, m);
      const tokens = getTokens(timeNumber);
      tokenMap[timeNumber.asDecimalNumber()] = tokens;
    }
  }

  return tokenMap;
};
