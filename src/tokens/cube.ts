import { Token } from '../models';

const isCube = (num: number): boolean => {
  const absNum = Math.abs(num);
  return Math.round(absNum ** (1 / 3)) ** 3 === absNum;
};

export const tryForCubeToken = (num: number): Token[] => {
  if (isCube(num)) {
    return [
      {
        type: 'cube',
        description: `${num} is a cube!`,
        relevance: 40,
      },
    ];
  }
  return [];
};
