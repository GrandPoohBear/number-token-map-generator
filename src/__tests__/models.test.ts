import { TimeNumber } from '../models';

describe('TimeNumber class', () => {
  const timeNumberA = new TimeNumber(12, 48);
  const timeNumberB = new TimeNumber(10, 10);
  const timeNumberC = new TimeNumber(1, 15);

  test('asDecimalNumber', () => {
    expect(timeNumberA.asDecimalNumber()).toEqual(1248);
    expect(timeNumberB.asDecimalNumber()).toEqual(1010);
    expect(timeNumberC.asDecimalNumber()).toEqual(115);
  });

  test('asDigits', () => {
    expect(timeNumberA.asDigits()).toEqual([1, 2, 4, 8]);
    expect(timeNumberB.asDigits()).toEqual([1, 0, 1, 0]);
    expect(timeNumberC.asDigits()).toEqual([1, 1, 5]);
  });

  test('asString', () => {
    expect(timeNumberA.asString()).toEqual('1248');
    expect(timeNumberB.asString()).toEqual('1010');
    expect(timeNumberC.asString()).toEqual('115');
  });

  test('asComponents', () => {
    expect(timeNumberA.asComponents()).toEqual([[1248], [12, 48]]);
    expect(timeNumberB.asComponents()).toEqual([[1010], [10, 10]]);
    expect(timeNumberC.asComponents()).toEqual([[115], [1, 15]]);
  });

  test('asUsableComponents', () => {
    expect(timeNumberA.asUsableComponents()).toEqual([[1248], [12, 48]]);
    expect(timeNumberB.asUsableComponents()).toEqual([[1010]]);
    expect(timeNumberC.asUsableComponents()).toEqual([[115], [1, 15]]);
  });
});
