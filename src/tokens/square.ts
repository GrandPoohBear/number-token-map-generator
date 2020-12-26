import { Token, TokenType } from '../models';

export interface SquareToken extends Token {
  type: TokenType.SQUARE;
}

export const tryForSquareToken = (num: number): SquareToken[] => {
  if (Math.sqrt(num) % 1 === 0) {
    return [
      {
        type: TokenType.SQUARE,
        description: `${num} is square!`,
        relevance: 20,
      },
    ];
  }
  return [];
};
