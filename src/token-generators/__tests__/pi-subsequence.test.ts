import { TimeNumber } from '../../models';
import {
  findPrimeFactors,
  PrimeFactorizationGenerator,
  formatPrimeFactorization,
} from '../prime-factorization';
import { PiSubsequenceGenerator, findPiSubSequence } from '../pi-subsequence';

const piSubsequenceGenerator = new PiSubsequenceGenerator();

const timeA = new TimeNumber(14, 15);
const timeB = new TimeNumber(10, 9);

test('findPiSubsequence', () => {
  expect(findPiSubSequence('1415')).toEqual(1);
});

test('getTokens', () => {
  expect(piSubsequenceGenerator.getTokens(timeA)[0].description).toBe(
    'The sequence 1415 starts at the 1st decimal of pi'
  );
  expect(piSubsequenceGenerator.getTokens(timeB)[0].description).toBe(
    'The sequence 1009 starts at the 1,816th decimal of pi'
  );
});
