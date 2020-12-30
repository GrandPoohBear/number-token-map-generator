import { Token } from '../models';
import { personalData } from '../personal-data';
import _ from 'lodash';

const makeTokenFromString = (desc: string): Token => ({
  type: 'personal',
  description: desc,
  relevance: 80,
});

export const tryForPersonalToken = (num: number): Token[] => {
  if (personalData[num]) {
    const personalDataEntry = personalData[num];

    if (_.isString(personalDataEntry)) {
      return [makeTokenFromString(personalDataEntry as string)];
    } else if (_.isArray(personalDataEntry)) {
      return (personalDataEntry as (string | Token)[]).map((st) => {
        if (_.isString(st)) {
          return makeTokenFromString(st);
        }
        return st as Token;
      });
    }
  }
  return [];
};
