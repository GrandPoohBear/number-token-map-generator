import { ComponentClassTokenGenerator } from '.';

const isCube = (num: number): boolean => {
  const absNum = Math.abs(num);
  return Math.round(absNum ** (1 / 3)) ** 3 === absNum;
};

export class CubeGenerator extends ComponentClassTokenGenerator {
  getBaseRelevance(): number {
    return 10;
  }
  getRelevanceDigitBonus(): number {
    return 20;
  }
  getTokenType(): string {
    return 'cube';
  }
  getDescriptionSuffix(components: number[]): string {
    if (components.length === 1) {
      return ' is a cubic number!';
    } else if (components.length === 2) {
      return ' are both cubic numbers!';
    } else {
      return ' are all cubic numbers!';
    }
  }
  isInComponentClass(num: number): boolean {
    return isCube(num);
  }
}
