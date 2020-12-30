import { Token } from '../models';

export const tryForBirthdayToken = (num: number): Token[] => {
  const nameList = birthdays[num];
  if (nameList) {
    return nameList.map((name) => ({
      type: 'birthday',
      description: `${name}'s birthday!`,
      relevance: 50,
    }));
  }
  return [];
};

const birthdays: { [key: number]: string[] } = {
  716: ['Andy'],
  // TODO: add more birthdays of people
};
