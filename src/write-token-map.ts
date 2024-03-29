import _ from 'lodash';
import { buildTokenMap } from './token-map';
import * as fs from 'fs';

console.log('Building token map');
const tokenMap = buildTokenMap();
console.log(
  `Histogram (number of facts -> number of discrete times)`,
  _.countBy(Object.values(tokenMap).map((a) => a.length))
);

fs.writeFileSync('./output-token-map.json', JSON.stringify(tokenMap));
