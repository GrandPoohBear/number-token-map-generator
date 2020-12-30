import { Token } from '../models';
import { getAllSubstrings } from '../string-utility';

const powerTable: { [base: number]: number[] } = {
  2: [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048],
  3: [3, 9, 27, 81, 243, 729, 2187],
  4: [4, 16, 64, 256, 1024],
  5: [5, 25, 125, 625],
};

const isPowerOf = (num: number, base: number): boolean => {
  return powerTable[base].includes(num);
};

export const tryForPowerToken = (num: number): Token[] => {
  const substrings = getAllSubstrings(num.toString());
  return substrings.flatMap((s) => {
    const bases = Object.keys(powerTable);
    return bases.flatMap((b) => {
      if (isPowerOf(Number(s), Number(b))) {
        return [
          {
            type: 'power',
            description: `${s} is a power of ${b}`,
            relevance: 20 * s.length ** 3,
          },
        ];
      } else {
        return [];
      }
    });
  });
};
