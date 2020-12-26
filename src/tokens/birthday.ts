import { Token, TokenType } from '../models';

export interface BirthdayToken extends Token {
  type: TokenType.BIRTHDAY;
}

export const tryForBirthdayToken = (num: number): BirthdayToken[] => {
  const nameList = birthdays[num];
  if (nameList) {
    return nameList.map((name) => ({
      type: TokenType.BIRTHDAY,
      description: `${name}'s birthday!`,
      relevance: 50,
    }));
  }
  return [];
};

const birthdays: { [key: number]: string[] } = {
  716: ['Andy'],
};
