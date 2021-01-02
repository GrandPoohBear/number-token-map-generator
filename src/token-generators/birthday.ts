import { TokenGenerator } from '.';
import { TimeNumber, Token } from '../models';

export class BirthdayGenerator extends TokenGenerator {
  private birthdays: { [key: number]: string[] } = {
    716: ['Andy'],
    // TODO: add more birthdays of people
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
