import { TokenGenerator } from '.';
import { TimeNumber, Token } from '../models';

interface FunStuffEntry {
  num: number;
  desc: string;
  relevance?: number;
}

const funStuff: FunStuffEntry[] = [
  { num: 350, desc: '350 ppm = safe concentration of CO2 in the atmosphere' },
  { num: 230, desc: 'Time to go to the dentist :-P' },
  { num: 602, desc: "Avogadro's Number: 6.02 x 10^23" },
  { num: 1023, desc: "Avogadro's Number: 6.02 x 10^23" },
];

export class FunStuffGenerator extends TokenGenerator {
  getTokens(timeNumber: TimeNumber): Token[] {
    const matchingEntries = funStuff.filter(
      (entry) => entry.num == timeNumber.asDecimalNumber()
    );

    return matchingEntries.map((entry) => ({
      type: 'fun-stuff',
      description: entry.desc,
      relevance: entry.relevance ?? 50,
    }));
  }
}
