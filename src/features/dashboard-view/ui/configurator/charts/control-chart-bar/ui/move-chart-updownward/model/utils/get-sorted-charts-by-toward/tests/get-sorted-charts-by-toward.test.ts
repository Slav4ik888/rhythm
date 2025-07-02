import { getSortedChartsByToward } from '..';


describe('getSortedChartsByToward', () => {
  const items = [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' },
    { id: '7' },
  ];

  test('UP, current item is first', () => {
    expect(getSortedChartsByToward('up', items, 0)[0].id).toEqual('2');
  });
  test('UP, current item is second', () => {
    expect(getSortedChartsByToward('up', items, 1)[1].id).toEqual('1');
  });
  test('UP, current item is third', () => {
    const res = getSortedChartsByToward('up', items, 2);
    expect(res[1].id).toEqual('3');
    expect(res[2].id).toEqual('2');
  });
  test('UP, current item is last', () => {
    const res = getSortedChartsByToward('up', items, 6);
    expect(res[5].id).toEqual('7');
    expect(res[6].id).toEqual('6');
  });

  test('DOWN, current item is last', () => {
    expect(getSortedChartsByToward('down', items, 6)[0].id).toEqual('7');
  });
  test('DOWN, current item is prevLast', () => {
    expect(getSortedChartsByToward('down', items, 5)[6].id).toEqual('6');
  });
  test('DOWN, current item is third', () => {
    expect(getSortedChartsByToward('down', items, 2)[3].id).toEqual('3');
  });
  test('DOWN, current item is fourth', () => {
    const res = getSortedChartsByToward('down', items, 3);

    expect(res[3].id).toEqual('5');
    expect(res[4].id).toEqual('4');
  });
});

// npm run test:unit get-sorted-charts-by-toward.test.ts
