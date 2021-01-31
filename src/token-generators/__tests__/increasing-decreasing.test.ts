import { TimeNumber } from '../../models';
import {
  DecreasingDigitsTokenGenerator,
  IncreasingDigitsTokenGenerator,
} from '../increasing-decreasing';

const increasingGenerator = new IncreasingDigitsTokenGenerator();
const decreasingGenerator = new DecreasingDigitsTokenGenerator();

const timeA = new TimeNumber(11, 17);
const timeB = new TimeNumber(12, 34);
const timeC = new TimeNumber(9, 54);
const timeD = new TimeNumber(5, 52);
test('Monotonically increasing', () => {
  expect(increasingGenerator.getTokens(timeA)).toEqual([]);
  expect(increasingGenerator.getTokens(timeB)).not.toEqual([]);
  expect(increasingGenerator.getTokens(timeC)).toEqual([]);
  expect(increasingGenerator.getTokens(timeD)).toEqual([]);
});

test('Monotonically decreasing', () => {
  expect(decreasingGenerator.getTokens(timeA)).toEqual([]);
  expect(decreasingGenerator.getTokens(timeB)).toEqual([]);
  expect(decreasingGenerator.getTokens(timeC)).not.toEqual([]);
  expect(decreasingGenerator.getTokens(timeD)).toEqual([]);
});
