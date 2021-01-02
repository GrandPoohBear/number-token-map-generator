import { TokenGenerator } from '.';
import { TimeNumber, Token } from '../models';

export class PalindromeGenerator extends TokenGenerator {
  getTokens(timeNumber: TimeNumber): Token[] {
    const num = timeNumber.asDecimalNumber();

    if (num.toString().length < 3) {
      return [];
    }
    if (num.toString() === num.toString().split('').reverse().join()) {
      return [
        {
          type: 'palindrome',
          description: `${num} is a palindrome!`,
          relevance: 30 * Math.log10(num) ** 3,
        },
      ];
    }
    return [];
  }
}
