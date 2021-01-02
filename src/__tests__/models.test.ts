import { TimeNumber } from '../models';

describe('TimeNumber class', () => {
  const timeNumberA = new TimeNumber(12, 48);

  test('asDecimalNumber', () => {
    expect(timeNumberA.asDecimalNumber()).toEqual(1248);
  });

  test('asDigits', () => {
    expect(timeNumberA.asDigits()).toEqual([1, 2, 4, 8]);
  });

  test('asString', () => {
    expect(timeNumberA.asString()).toEqual('1248');
  });

  test('asAllNumberComponents', () => {
    expect(new Set(timeNumberA.asAllNumberComponents())).toEqual(
      new Set([
        [1248],
        [1, 248],
        [1, 24, 8],
        [1, 2, 48],
        [1, 2, 4, 8],
        [12, 48],
        [12, 4, 8],
        [124, 8],
      ])
    );
  });
});
