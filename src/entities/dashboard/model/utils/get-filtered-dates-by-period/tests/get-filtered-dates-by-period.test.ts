import { DashboardDataSegment } from '../../../types';
import { getFilteredDatesByPeriod } from '..';


const MOCK: DashboardDataSegment = [
  ["", "", "", "", "", "", "", "", "", "", "",
    "2023-01-25T18:00:00.000Z",
    "2023-02-22T18:00:00.000Z",
    "2023-03-29T18:00:00.000Z",
    "2023-04-26T18:00:00.000Z",
    "2023-05-24T18:00:00.000Z",
    "2023-06-28T18:00:00.000Z", 
    "2023-07-26T18:00:00.000Z",
    "2023-08-30T18:00:00.000Z", // start - 1690491600001
    "2023-09-27T18:00:00.000Z",
    "2023-10-25T18:00:00.000Z",
    "2023-11-29T18:00:00.000Z",
    "2023-12-27T18:00:00.000Z",
    "2024-01-24T18:00:00.000Z",
    "2024-02-28T18:00:00.000Z",
    "2024-03-27T18:00:00.000Z", 
    "2024-04-24T18:00:00.000Z", // end - 1714165200001
    "2024-05-29T18:00:00.000Z",
    "2024-06-26T18:00:00.000Z",
    "2024-07-24T18:00:00.000Z",
    "2024-08-28T18:00:00.000Z"
  ],
  [],
  []
];

describe('getFilteredDatesByPeriod', () => {
  it('valid data', () => expect(
    getFilteredDatesByPeriod(MOCK, {
      start : 1690491600001, // "2023-07-27T21:00:00.001Z"
      end   : 1714165200001  // "2024-04-26T21:00:00.001Z"
    }))
    .toEqual([
      "2023-08-30T18:00:00.000Z",
      "2023-09-27T18:00:00.000Z",
      "2023-10-25T18:00:00.000Z",
      "2023-11-29T18:00:00.000Z",
      "2023-12-27T18:00:00.000Z",
      "2024-01-24T18:00:00.000Z",
      "2024-02-28T18:00:00.000Z",
      "2024-03-27T18:00:00.000Z",
      "2024-04-24T18:00:00.000Z"
    ]));
  
  it('start - undefined', () => expect(
    getFilteredDatesByPeriod(MOCK, {
      start : undefined, 
      end   : 1714165200001  // "2024-04-26T21:00:00.001Z"
    }))
    .toEqual([
      "2023-01-25T18:00:00.000Z",
      "2023-02-22T18:00:00.000Z",
      "2023-03-29T18:00:00.000Z",
      "2023-04-26T18:00:00.000Z",
      "2023-05-24T18:00:00.000Z",
      "2023-06-28T18:00:00.000Z",
      "2023-07-26T18:00:00.000Z",
      "2023-08-30T18:00:00.000Z",
      "2023-09-27T18:00:00.000Z",
      "2023-10-25T18:00:00.000Z",
      "2023-11-29T18:00:00.000Z",
      "2023-12-27T18:00:00.000Z",
      "2024-01-24T18:00:00.000Z",
      "2024-02-28T18:00:00.000Z",
      "2024-03-27T18:00:00.000Z",
      "2024-04-24T18:00:00.000Z"
    ]));
  
  it('end - undefined', () => expect(
    getFilteredDatesByPeriod(MOCK, {
      start : 1690491600001, // "2023-07-27T21:00:00.001Z"
      end   : undefined
    }))
    .toEqual([
      "2023-08-30T18:00:00.000Z",
      "2023-09-27T18:00:00.000Z",
      "2023-10-25T18:00:00.000Z",
      "2023-11-29T18:00:00.000Z",
      "2023-12-27T18:00:00.000Z",
      "2024-01-24T18:00:00.000Z",
      "2024-02-28T18:00:00.000Z",
      "2024-03-27T18:00:00.000Z",
      "2024-04-24T18:00:00.000Z",
      "2024-05-29T18:00:00.000Z",
      "2024-06-26T18:00:00.000Z",
      "2024-07-24T18:00:00.000Z",
      "2024-08-28T18:00:00.000Z"
    ]));
});

// npm run test:unit get-filtered-dates-by-period.test.ts
