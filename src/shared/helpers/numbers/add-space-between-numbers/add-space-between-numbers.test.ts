import {addSpaceBetweenNumbers} from "."


interface Mock extends Array<number | string> {
  0: number | string;
  1: string;
};

type Mocks = Array<Mock>;

const mocks: Mocks = [
  // @ts-ignore
  [NaN, ``], [undefined, ``], [null, ``], [``, ``],
  [0, `0`], [1, `1`], [`0`, `0`], [`1`, `1`],
  [`1234sdf`,               `1 234`],
  [`123456789.1234asdf`,    `123 456 789.1234`],
  [`123456789,1234asdf`,    `123 456 789`],
  [`sdf123456789.1234asdf`, ``],
  [123456789.1234,          `123 456 789.1234`]

];


describe(`addSpaceBetweenNumbers`, () => {
  mocks.forEach((m, i) => it(`${i + 1}`, () => expect(addSpaceBetweenNumbers(m[0]))
    .toEqual(m[1])))
});

// npm run test add-space-between-numbers.test.ts
