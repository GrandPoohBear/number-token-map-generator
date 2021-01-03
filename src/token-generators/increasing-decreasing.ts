import { TokenGenerator } from '.';
import { TimeNumber, Token } from '../models';

export class IncreasingDigitsTokenGenerator extends TokenGenerator {
  getTokens(timeNumber: TimeNumber): Token[] {
    const digits = timeNumber.asDigits();
    let lastVal = -1;
    for (let i = 0; i < digits.length; i++) {
      if (digits[i] < lastVal) {
        return [];
      }
      lastVal = digits[i];
    }

    return [
      {
        type: 'increasing-digits',
        description: 'Every digit is monotonically increasing!',
        relevance: 15,
      },
    ];
  }
}

export class DecreasingDigitsTokenGenerator extends TokenGenerator {
  getTokens(timeNumber: TimeNumber): Token[] {
    const digits = timeNumber.asDigits();
    let lastVal = 100;
    for (let i = 0; i < digits.length; i++) {
      if (digits[i] > lastVal) {
        return [];
      }
      lastVal = digits[i];
    }

    return [
      {
        type: 'decreasing-digits',
        description: 'Every digit is monotonically decreasing!',
        relevance: 15,
      },
    ];
  }
}
