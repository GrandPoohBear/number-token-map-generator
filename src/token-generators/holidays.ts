import _ from 'lodash';
import { TokenGenerator } from '.';
import { TimeNumber, Token } from '../models';

type SimpleDateArray = [month: number, day: number];
interface SimpleDateEntry {
  date: SimpleDateArray;
  description: string;
  relevance?: number;
}

export class HolidayGenerator extends TokenGenerator {
  // For now, limiting ourselves to static dates (i.e. no "last
  // thursday before the second tuesday" kind of thing).
  //
  // It would be lovely to have this be dynamic for the current year
  // so we could include things like Thanksgiving or Jewish holidays
  //
  // TODO: Add more from https://en.wikipedia.org/wiki/List_of_minor_secular_observances

  private holidays: SimpleDateEntry[] = [
    { date: [1, 1], description: "New Year's Day" },
    { date: [1, 1], description: 'Polar Bear Swim Day' },
    { date: [1, 1], description: 'International Public Domain Day' },
    { date: [1, 21], description: 'National Hugging Day' },
    { date: [1, 31], description: 'National Gorilla Suit Day' },
    { date: [2, 2], description: 'Groundhog Day' },
    { date: [2, 14], description: "Valentine's Day" },
    { date: [2, 15], description: 'Singles Awareness Day' },
    { date: [2, 18], description: 'Family Day' },
    { date: [3, 8], description: "International Women's Day" },
    { date: [3, 14], description: 'Pi Day' },
    { date: [3, 17], description: "St. Patrick's Day" },
    { date: [4, 1], description: "April Fools' Day" },
    { date: [4, 10], description: 'Siblings Day' },
    { date: [4, 20], description: 'International Cannabis Appreciation Day' },
    { date: [4, 22], description: 'Earth Day' },
    { date: [4, 27], description: "King's Day" },
    { date: [5, 3], description: 'Constitution Day' },
    { date: [5, 4], description: 'May the Fourth' },
    { date: [5, 4], description: 'Youth Day (PRC)' },
    { date: [5, 5], description: 'Cinco de Mayo' },
    { date: [5, 8], description: "Parents' Day (South Korea)" },
    { date: [5, 25], description: 'Towel Day' },
    { date: [6, 14], description: 'Flag Day (US)' },
    { date: [6, 16], description: 'Bloomsday' },
    { date: [6, 19], description: 'Juneteenth' },
    { date: [7, 1], description: 'Canada Day' },
    { date: [7, 4], description: 'US Independence Day' },
    { date: [7, 22], description: 'Pi Approximation Day' },
    { date: [9, 11], description: 'US Patriot Day' },
    {
      date: [9, 19],
      description: 'International Talk Like a Pirate Day',
      relevance: 100,
    },
    { date: [9, 21], description: 'World Peace Day' },
    { date: [10, 3], description: 'Mean Girls Day' },
    { date: [10, 23], description: 'Mole Day' },
    { date: [10, 30], description: 'Mischief Night' },
    { date: [10, 31], description: 'Halloween' },
    { date: [11, 1], description: 'Dia de los Muertos' },
    { date: [11, 5], description: 'Guy Fawkes Day' },
    { date: [11, 11], description: "US Veteran's Day" },
    { date: [11, 19], description: "International Men's Day" },
    { date: [12, 7], description: 'US Pearl Harbor Day' },
    { date: [12, 14], description: 'International Monkey Day' },
    { date: [12, 23], description: 'Festivus' },
    { date: [12, 25], description: 'Christmas' },
    { date: [12, 26], description: 'Boxing Day' },
    { date: [12, 26], description: 'Start of Kwanzaa' },
    { date: [12, 31], description: 'New Years Eve' },
  ];

  private holidayMap = _(this.holidays)
    .map((holiday: SimpleDateEntry): { dateNum: number; token: Token } => {
      // Doing this US style, leaving the door open for other locales
      return {
        dateNum: holiday.date[0] * 100 + holiday.date[1],
        token: {
          type: 'holiday',
          description: `${
            holiday.date[0]
          }/${holiday.date[1].toString().padStart(2, '0')} - ${
            holiday.description
          }`,
          relevance: holiday.relevance || 35,
        },
      };
    })
    .groupBy((entry) => entry.dateNum)
    .value();

  getTokens(timeNumber: TimeNumber): Token[] {
    const holidayList = this.holidayMap[timeNumber.asDecimalNumber()];
    if (holidayList) {
      return holidayList.map((holidayEntry) => holidayEntry.token);
    }
    return [];
  }
}
