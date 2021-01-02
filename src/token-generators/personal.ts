import { TimeNumber, Token } from '../models';
import { personalData } from '../personal-data';
import _ from 'lodash';
import { TokenGenerator } from '.';

const makeTokenFromString = (desc: string): Token => ({
  type: 'personal',
  description: desc,
  relevance: 80,
});

export class PersonalGenerator extends TokenGenerator {
  getTokens(timeNumber: TimeNumber): Token[] {
    const num = timeNumber.asDecimalNumber();
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
  }
}
