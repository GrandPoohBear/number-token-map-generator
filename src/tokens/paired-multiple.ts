import { Token } from '../models';

export const tryForPairedMultipleToken = (num: number): Token[] => {
  if (num.toString().length < 3) {
    return [];
  }

  const firstHalf = Math.floor(num / 100);
  const secondHalf = num % 100;

  let tokens: Token[] = [];

  for (let i = 2; i < 10; i++) {
    if (firstHalf * i === secondHalf) {
      tokens.push({
        type: 'paired-multiple',
        description: `${secondHalf} is ${i} times ${firstHalf}`,
        relevance: 40,
      });
    }

    if (secondHalf * i === firstHalf) {
      tokens.push({
        type: 'paired-multiple',
        description: `${firstHalf} is ${i} times ${secondHalf}`,
        relevance: 40,
      });
    }
  }

  return tokens;
};
