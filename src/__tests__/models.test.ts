import { TimeNumber } from '../models';

describe('TimeNumber class', () => {
  const timeNumberA = new TimeNumber(12, 48);
  const timeNumberB = new TimeNumber(10, 16);

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

  test('splits zeros properly', () => {
    expect(timeNumberB.asAllNumberComponents()).not.toContainEqual([1, 16]);
    expect(timeNumberB.asAllNumberComponents()).not.toContainEqual([1, 1, 6]);
  });
});
