import { ComponentClassTokenGenerator } from '.';

export class FibonacciGenerator extends ComponentClassTokenGenerator {
  getDescriptionSuffix(components: number[]): string {
    if (components.length === 1) {
      return ' is in the fibonacci sequence!';
    } else {
      return ' are both in the fibonacci sequence!';
    }
  }
  isInComponentClass(num: number): boolean {
    return isFibonacciNumber(num);
  }
  getTokenType(): string {
    return 'fibonacci';
  }
  getBaseRelevance(): number {
    return 20;
  }
  getRelevanceDigitBonus(): number {
    return 20;
  }
}

const isFibonacciNumber = (num: number): boolean => {
  return fibonacciNumbers.has(num);
};

const fibonacciNumbers = new Set([
  1,
  1,
  2,
  3,
  5,
  8,
  13,
  21,
  34,
  55,
  89,
  144,
  233,
  377,
  610,
  987,
  1597,
]);
