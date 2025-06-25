import { ViewItem } from 'entities/dashboard-view';
import { PartialViewItemUpdate } from '../../../../../update-view-item';
import { getAllChildrenIdWithBunch } from '..';



describe('getAllChildrenIdWithBunch', () => {
  test('Data is valid', () => {
    const items = [
      { id: '1',         bunchId: 'bunch1', parentId: 'no-parentId' },
      { id: '1-1',       bunchId: 'bunch1', parentId: '1' },
      { id: '1-2',       bunchId: 'bunch1', parentId: '1' },
      { id: '1-3',       bunchId: 'bunch1', parentId: '1' },
      { id: '1-2-1',     bunchId: 'bunch1', parentId: '1-2' },
      { id: '1-2-2',     bunchId: 'bunch1', parentId: '1-2' },
      { id: '1-2-3',     bunchId: 'bunch1', parentId: '1-2' },
      { id: '1-2-1-1',   bunchId: 'bunch1', parentId: '1-2-1' },
      { id: '1-2-1-2',   bunchId: 'bunch222', parentId: '1-2-1' },
      { id: '1-2-1-3',   bunchId: 'bunch1', parentId: '1-2-1' },
      { id: '1-2-1-3-1', bunchId: 'bunch1', parentId: '1-2-1-3' },
      { id: '1-2-1-3-2', bunchId: 'bunch333', parentId: '1-2-1-3' },
      { id: '1-2-1-3-3', bunchId: 'bunch1', parentId: '1-2-1-3' },
      { id: '2',         bunchId: 'bunch1', parentId: '' },
      { id: '2-1',       bunchId: 'bunch1', parentId: '' },
      { id: '2-2',       bunchId: 'bunch1', parentId: '' },
      { id: '2-3',       bunchId: 'bunch1', parentId: '' },
      { id: '2-2-1',     bunchId: 'bunch1', parentId: '' },
      { id: '2-2-2',     bunchId: 'bunch1', parentId: '' },
      { id: '2-2-3',     bunchId: 'bunch1', parentId: '' },
     ] as ViewItem[];

    const resultArray: PartialViewItemUpdate[] = [];
    getAllChildrenIdWithBunch(items, '1-2', resultArray);

    expect(resultArray).toEqual([
      { id: '1-2', bunchId: 'bunch1' },
      { id: '1-2-1', bunchId: 'bunch1' },
      { id: '1-2-1-1', bunchId: 'bunch1' },
      { id: '1-2-1-2', bunchId: 'bunch222' },
      { id: '1-2-1-3', bunchId: 'bunch1' },
      { id: '1-2-1-3-1', bunchId: 'bunch1' },
      { id: '1-2-1-3-2', bunchId: 'bunch333' },
      { id: '1-2-1-3-3', bunchId: 'bunch1' },
      { id: '1-2-2', bunchId: 'bunch1' },
      { id: '1-2-3', bunchId: 'bunch1' },
    ]);
  });

  const mockItems = [
    { id: '1', bunchId: 'bunchA', parentId: null },
    { id: '2', bunchId: 'bunchA', parentId: '1' },
    { id: '3', bunchId: 'bunchB', parentId: '1' },
    { id: '4', bunchId: 'bunchA', parentId: '2' },
    { id: '5', bunchId: 'bunchB', parentId: '3' },
    { id: '6', bunchId: 'bunchC', parentId: null }, // отдельное дерево
  ] as ViewItem[];

  it('должна возвращать текущий элемент и всех его детей с bunchId', () => {
    const result: PartialViewItemUpdate[] = [];
    getAllChildrenIdWithBunch(mockItems, '1', result);

    expect(result).toEqual([
      { id: '1', bunchId: 'bunchA' },
      { id: '2', bunchId: 'bunchA' },
      { id: '4', bunchId: 'bunchA' },
      { id: '3', bunchId: 'bunchB' },
      { id: '5', bunchId: 'bunchB' },
    ]);
  });

  it('должна возвращать только сам элемент, если у него нет детей', () => {
    const result: PartialViewItemUpdate[] = [];
    getAllChildrenIdWithBunch(mockItems, '6', result);

    expect(result).toEqual([
      { id: '6', bunchId: 'bunchC' },
    ]);
  });

  it('должна возвращать пустой массив, если элемент не найден', () => {
    const result: PartialViewItemUpdate[] = [];
    getAllChildrenIdWithBunch(mockItems, 'non-existent', result);

    expect(result).toEqual([]);
  });
});

// npm run test:unit get-all-children-ids-with-bunch.test.ts
