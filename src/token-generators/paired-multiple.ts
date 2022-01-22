import { TokenGenerator } from '.';
import { TimeNumber, Token } from '../models';

export class PairedMultipleGenerator extends TokenGenerator {
  getTokens(timeNumber: TimeNumber): Token[] {
    const num = timeNumber.asDecimalNumber();
    if (num < 100) {
      return [];
    }

    const firstHalf = Math.floor(num / 100);
    const secondHalf = num % 100;

    let tokens: Token[] = [];

    for (let i = 2; i < 10; i++) {
      if (firstHalf * i === secondHalf) {
        tokens.push({
          type: 'paired-multiple',
          description: `${firstHalf} times ${i} is ${secondHalf}`,
          relevance: 40,
        });
      }

      if (secondHalf * i === firstHalf) {
        tokens.push({
          type: 'paired-multiple',
          description: `${firstHalf} divided by ${i} is ${secondHalf}`,
          relevance: 40,
        });
      }
    }

    return tokens;
  }
}
