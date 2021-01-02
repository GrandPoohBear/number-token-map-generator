import { ComponentClassTokenGenerator } from '.';

const isSquare = (num: number): boolean => {
  return Math.sqrt(num) % 1 === 0;
};

export class SquareGenerator extends ComponentClassTokenGenerator {
  getBaseRelevance(): number {
    return 10;
  }
  getRelevanceDigitBonus(): number {
    return 20;
  }
  getTokenType(): string {
    return 'square';
  }
  getDescriptionSuffix(components: number[]): string {
    if (components.length === 1) {
      return ' is a square number!';
    } else if (components.length === 2) {
      return ' are both square numbers!';
    } else {
      return ' are all square numbers!';
    }
  }
  isInComponentClass(num: number): boolean {
    return isSquare(num);
  }
}
