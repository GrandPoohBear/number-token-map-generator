import { ComponentClassTokenGenerator } from '.';

const powerTable: { [base: number]: number[] } = {
  2: [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048],
  3: [3, 9, 27, 81, 243, 729, 2187],
  4: [4, 16, 64, 256, 1024],
  5: [5, 25, 125, 625],
};

const makeDescriptionSuffixFunc = (
  base: number
): ((components: number[]) => string) => {
  return (components: number[]): string => {
    if (components.length === 1) {
      return ` is a power of ${base}!`;
    } else if (components.length === 2) {
      return ` are both powers of ${base}!`;
    } else {
      return ` are all powers of ${base}!`;
    }
  };
};

export class PowerOf2Generator extends ComponentClassTokenGenerator {
  isInComponentClass(num: number): boolean {
    return powerTable[2].includes(num);
  }
  getTokenType(): string {
    return 'power-of-2';
  }
  getDescriptionSuffix(components: number[]): string {
    return makeDescriptionSuffixFunc(2)(components);
  }
  getBaseRelevance(): number {
    return 25;
  }
  getRelevanceDigitBonus(): number {
    return 40;
  }
}

export class PowerOf3Generator extends ComponentClassTokenGenerator {
  isInComponentClass(num: number): boolean {
    return powerTable[3].includes(num);
  }
  getTokenType(): string {
    return 'power-of-3';
  }
  getDescriptionSuffix(components: number[]): string {
    return makeDescriptionSuffixFunc(3)(components);
  }
  getBaseRelevance(): number {
    return 25;
  }
  getRelevanceDigitBonus(): number {
    return 40;
  }
}

export class PowerOf4Generator extends ComponentClassTokenGenerator {
  isInComponentClass(num: number): boolean {
    return powerTable[4].includes(num);
  }
  getTokenType(): string {
    return 'power-of-4';
  }
  getDescriptionSuffix(components: number[]): string {
    return makeDescriptionSuffixFunc(4)(components);
  }
  getBaseRelevance(): number {
    return 10;
  }
  getRelevanceDigitBonus(): number {
    return 40;
  }
}

export class PowerOf5Generator extends ComponentClassTokenGenerator {
  isInComponentClass(num: number): boolean {
    return powerTable[5].includes(num);
  }
  getTokenType(): string {
    return 'power-of-5';
  }
  getDescriptionSuffix(components: number[]): string {
    return makeDescriptionSuffixFunc(5)(components);
  }
  getBaseRelevance(): number {
    return 25;
  }
  getRelevanceDigitBonus(): number {
    return 40;
  }
}
