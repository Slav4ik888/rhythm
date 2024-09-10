import { DashboardDates, DashboardPeriodDates } from '../../../../types';
import { getEndIdx } from '..';



const startDates: DashboardDates = {
  'мес' : [
    "2023-01-25T18:00:00.000Z", // 1
    "2023-02-22T18:00:00.000Z", // 2
    "2023-03-29T18:00:00.000Z", // 3
    "2023-04-26T18:00:00.000Z", // 4
    "2023-05-24T18:00:00.000Z", // 5
    "2023-06-28T18:00:00.000Z", // 6
    "2023-07-26T18:00:00.000Z", // 7
    "2023-08-30T18:00:00.000Z", // 8 start - 1690491600001
    "2023-09-27T18:00:00.000Z", // 9
    "2023-10-25T18:00:00.000Z", // 10
    "2023-11-29T18:00:00.000Z", // 11
    "2023-12-27T18:00:00.000Z", // 12
    "2024-01-24T18:00:00.000Z", // 13
    "2024-02-28T18:00:00.000Z", // 14
    "2024-03-27T18:00:00.000Z", // 15
    "2024-04-24T18:00:00.000Z", // 16 end - 1714165200001
    "2024-05-29T18:00:00.000Z", // 17
    "2024-06-26T18:00:00.000Z", // 18
    "2024-07-24T18:00:00.000Z", // 19
    "2024-08-28T18:00:00.000Z"  // 20
  ],
  'нед': [
    "2023-04-26T18:00:00.000Z", // 1
    "2023-05-24T18:00:00.000Z", // 2
    "2023-06-28T18:00:00.000Z", // 3
    "2023-07-26T18:00:00.000Z", // 4
    "2023-08-30T18:00:00.000Z", // 5 start - 1690491600001
    "2023-09-27T18:00:00.000Z", // 6
    "2023-10-25T18:00:00.000Z", // 7
    "2023-11-29T18:00:00.000Z", // 8
    "2023-12-27T18:00:00.000Z", // 9
    "2024-01-24T18:00:00.000Z", // 10
    "2024-02-28T18:00:00.000Z", // 11
    "2024-03-27T18:00:00.000Z", // 12
    "2024-04-24T18:00:00.000Z", // 13 end - 1714165200001
    "2024-05-29T18:00:00.000Z", // 14
    "2024-06-26T18:00:00.000Z", // 15
    "2024-07-24T18:00:00.000Z", // 16
    "2024-08-28T18:00:00.000Z", // 17
    "2024-08-28T18:00:00.000Z", // 18
    "2024-08-28T18:00:00.000Z", // 19
    "2024-08-28T18:00:00.000Z"  // 20
  ]
};



describe('getEndIdx', () => {
  test('valid data', () => {
    expect(getEndIdx(startDates['нед'], { 
      start : 1690491600001, // "2023-07-27T21:00:00.001Z"
      end   : 1714165200001  // "2024-04-27T21:00:00.001Z"
    })).toEqual(12);
  });

  test('period is undefined', () => {
    expect(getEndIdx(startDates['мес'], undefined as unknown as DashboardPeriodDates)).toEqual(19);
  });

  test('period end -1690491600001', () => {
    expect(getEndIdx(startDates['мес'], { 
      start : 1690491600001,
      end   : -1690491600001
    })).toEqual(0);
  });
  test('period end is undefined', () => {
    expect(getEndIdx(startDates['мес'], { 
      start : 1690491600001,
      end   : undefined
    })).toEqual(19);
  });
});

// npm run test:unit get-end-idx.test.ts
