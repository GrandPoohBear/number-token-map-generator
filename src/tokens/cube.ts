import { Token, TokenType } from '../models';

export interface CubeToken extends Token {
  type: TokenType.CUBE;
}

const isCube = (num: number): boolean => {
  const absNum = Math.abs(num);
  return Math.round(absNum ** (1 / 3)) ** 3 === absNum;
};

export const tryForCubeToken = (num: number): CubeToken[] => {
  if (isCube(num)) {
    return [
      {
        type: TokenType.CUBE,
        description: `${num} is a cube!`,
        relevance: 40,
      },
    ];
  }
  return [];
};
