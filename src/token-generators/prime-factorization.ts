import { TokenGenerator } from '.';
import { TimeNumber, Token } from '../models';
import _ from 'lodash';

export const findPrimeFactors = (n: number): number[][] => {
  const factors: number[] = [];
  let divisor = 2;

  while (n >= 2) {
    if (n % divisor == 0) {
      factors.push(divisor);
      n = n / divisor;
    } else {
      divisor++;
    }
  }
  return Object.values(_.groupBy(factors));
};

export const formatPrimeFactorization = (factors: number[][]): string => {
  return factors
    .map((factorValues) =>
      factorValues.length == 1
        ? `${factorValues[0]}`
        : `${factorValues[0]}^${factorValues.length}`
    )
    .join(' * ');
};

export class PrimeFactorizationGenerator extends TokenGenerator {
  getTokens(timeNumber: TimeNumber): Token[] {
    const factors = findPrimeFactors(timeNumber.asDecimalNumber());

    if (_.flatten(factors).length == 1) {
      // This number is prime, so not an interesting factorization
      return [];
    }

    return [
      {
        type: 'prime-factorization',
        relevance: 15,
        description: `Prime factorization of ${timeNumber.asDecimalNumber()} is ${formatPrimeFactorization(
          factors
        )}`,
      },
    ];
  }
}
