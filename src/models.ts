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

  public asComponents = (): number[][] => {
    return [[this.asDecimalNumber()], [this.hours, this.minutes]];
  };

  public asUsableComponents = (): number[][] => {
    return this.hours === this.minutes
      ? [[this.asDecimalNumber()]]
      : this.asComponents();
  };
}
