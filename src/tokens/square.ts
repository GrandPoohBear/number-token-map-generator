import { Token } from '../models';

export const tryForSquareToken = (num: number): Token[] => {
  if (Math.sqrt(num) % 1 === 0) {
    return [
      {
        type: 'square',
        description: `${num} is square!`,
        relevance: 5 * Math.log10(num) ** 2,
      },
    ];
  }
  return [];
};
