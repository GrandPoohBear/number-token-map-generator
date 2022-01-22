import { TimeNumber } from '../../models';
import { AllDigitsMatchGenerator } from '../all-digits-match';

const matchGenerator = new AllDigitsMatchGenerator();

const timeA = new TimeNumber(11, 11);
const timeB = new TimeNumber(12, 12);
const timeC = new TimeNumber(9, 54);

test('Digits match', () => {
  expect(matchGenerator.getTokens(timeA)[0].type).toEqual('all-digits-match');
  expect(matchGenerator.getTokens(timeB)[0].type).toEqual(
    'hours-minutes-match'
  );
  expect(matchGenerator.getTokens(timeC)).toEqual([]);
});
