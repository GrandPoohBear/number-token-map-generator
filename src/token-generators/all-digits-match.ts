import { TokenGenerator } from '.';
import { TimeNumber, Token } from '../models';

export class AllDigitsMatchGenerator extends TokenGenerator {
  getTokens(timeNumber: TimeNumber): Token[] {
    const digits = timeNumber.asDigits();
    const allMatch = digits.every((d) => d === digits[0]);

    if (allMatch) {
      return [
        {
          type: 'all-digits-match',
          description: `So many ${digits[0]}s!`,
          relevance: 50,
        },
      ];
    }

    if (timeNumber.hours === timeNumber.minutes) {
      return [
        {
          type: 'hours-minutes-match',
          description: `The hours and minutes are the same!`,
          relevance: 50,
        },
      ];
    }
    return [];
  }
}
