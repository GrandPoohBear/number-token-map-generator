import _ from 'lodash';
import { buildTokenMap } from './token-map';
import { getAllSubstrings } from './string-utility';

console.log('Building token map');
const tokenMap = buildTokenMap();
console.log(
  `Histogram`,
  _.countBy(Object.values(tokenMap).map((a) => a.length))
);

for (let h = 1; h < 13; h++) {
  for (let m = 0; m < 60; m++) {
    const timeString = `${h}:${m.toString().padStart(2, '0')}`;
    const timeStringJustNumbers = `${h}${m.toString().padStart(2, '0')}`;
    const substrings = getAllSubstrings(timeStringJustNumbers);
    const allTokens = substrings.flatMap((s) => tokenMap[Number(s)] || []);
    console.log(`Time: ${timeString}`);
    allTokens.forEach((t) => console.log(t.description));
  }
}
