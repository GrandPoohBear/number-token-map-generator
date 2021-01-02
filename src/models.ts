export interface Token {
  type: string;
  relevance: number;
  description: string;
}

export class TimeNumber {
  public hours: number;
  public minutes: number;

  constructor(hours: number, minutes: number) {
    this.hours = hours;
    this.minutes = minutes;
  }

  public asDecimalNumber = (): number => {
    return this.hours * 100 + this.minutes;
  };

  public asDigits = (): number[] => {
    return this.asDecimalNumber().toString().split('').map(Number);
  };

  public asString = (): string => {
    return this.asDecimalNumber().toString();
  };

  public asAllNumberComponents = (): number[][] => {
    const stringComponents = allStringComponents(this.asString());
    return stringComponents.map((arr) => arr.map(Number));
  };
}

export const allStringComponents = (numStr: string): string[][] => {
  if (numStr.length == 1) {
    return [[numStr]];
  }

  let accumulator: string[][] = [[numStr]];

  for (let i = 1; i < numStr.length; i++) {
    let firstPart = numStr.substring(0, i);
    let remainder = numStr.substring(i);
    let remainderComponents = allStringComponents(remainder);
    remainderComponents.forEach((componentSet) => {
      accumulator.push([firstPart, ...componentSet]);
    });
  }
  return accumulator;
};
