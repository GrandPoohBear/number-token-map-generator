import { Token } from '../models';

export const tryForPalindromeToken = (num: number): Token[] => {
  if (num.toString().length < 3) {
    return [];
  }
  if (num.toString() === num.toString().split('').reverse().join()) {
    return [
      {
        type: 'palindrome',
        description: `${num} is a palindrome!`,
        relevance: 30 * Math.log10(num) ** 3,
      },
    ];
  }
  return [];
};
