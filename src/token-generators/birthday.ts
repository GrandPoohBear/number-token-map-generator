import { TokenGenerator } from '.';
import { TimeNumber, Token } from '../models';

export class BirthdayGenerator extends TokenGenerator {
  private birthdays: { [key: number]: string[] } = {
    212: ['Charles Darwin'],
    716: ['Andy'],
  };

  getTokens(timeNumber: TimeNumber): Token[] {
    const nameList = this.birthdays[timeNumber.asDecimalNumber()];
    if (nameList) {
      return nameList.map((name) => ({
        type: 'birthday',
        description: `${name}'s birthday!`,
        relevance: 50,
      }));
    }
    return [];
  }
}
