import { CardItem } from 'entities/card-item';
import { createNextOrder } from '..';


describe('createNextOrder', () => {
  test('data is valid', () => {
    const children = [
      { order: 1000 }, { order: 2000 }, { order: 30000 }
    ] as CardItem[];

    expect(createNextOrder(children)).toEqual(31000);
  });
  
  test('data is undefined', () => {
    expect(createNextOrder(undefined as unknown as CardItem[])).toEqual(1000);
  });
});

// npm run test:unit create-next-order.test.ts
