import { Token } from '../models';

export const tryForAllDigitsMatchToken = (num: number): Token[] => {
  if (num < 100) {
    return [];
  }

  const digits = num.toString().split('');
  const allMatch = digits.every((d) => d === digits[0]);

  if (allMatch) {
    return [
      {
        type: 'all-digits-match',
        description: `So many ${digits[0]}s!`,
        relevance: 50,
      },
    ];
  }
  return [];
};
