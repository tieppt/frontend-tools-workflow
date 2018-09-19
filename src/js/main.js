import orderBy from 'lodash.orderby';
import { print, map } from './fn';

// for webpack
import '../scss/app.scss';

const users = [
  { user: 'fred', age: 48 },
  { user: 'barney', age: 34 },
  { user: 'fred', age: 40 },
  { user: 'barney', age: 36 }
];

// Sort by `user` in ascending order and by `age` in descending order.
const sorted = orderBy(users, ['user', 'age'], ['asc', 'desc']);

console.log(sorted);

print(sorted);

// map(item => print(item), sorted);

const x = 1;
