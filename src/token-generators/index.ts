import { TimeNumber, Token } from '../models';
import { makeGroupStringFromNumbers } from '../string-utility';

export abstract class TokenGenerator {
  abstract getTokens(timeNumber: TimeNumber): Token[];
}

export abstract class ComponentClassTokenGenerator extends TokenGenerator {
  abstract isInComponentClass(num: number): boolean;
  abstract getTokenType(): string;
  abstract getDescriptionSuffix(components: number[]): string;

  abstract getBaseRelevance(): number;
  abstract getRelevanceDigitBonus(): number;

  private relevanceByGroupCount: { [groupCount: number]: number } = {
    1: this.getBaseRelevance() + 3 * this.getRelevanceDigitBonus(),
    2: this.getBaseRelevance() + 2 * this.getRelevanceDigitBonus(),
    3: this.getBaseRelevance(),
    4: this.getBaseRelevance() + 1 * this.getRelevanceDigitBonus(),
  };

  getTokens(timeNumber: TimeNumber): Token[] {
    return timeNumber.asUsableComponents().flatMap((componentSet) => {
      if (componentSet.every(this.isInComponentClass)) {
        return [
          {
            type: this.getTokenType(),
            description: `${makeGroupStringFromNumbers(
              componentSet
            )}${this.getDescriptionSuffix(componentSet)}`,
            relevance: this.relevanceByGroupCount[componentSet.length],
          },
        ];
      }
      return [];
    });
  }
}
