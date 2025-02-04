import { ViewItem, ViewItemId } from 'entities/dashboard-view';
import { getAllChildrenIds } from '..';



describe('getAllChildrenIds', () => {
  test('Data is valid', () => {
    const items = [
      { id: '1',         parentId: 'no-parentId' },
      { id: '1-1',       parentId: '1' },
      { id: '1-2',       parentId: '1' },
      { id: '1-3',       parentId: '1' },
      { id: '1-2-1',     parentId: '1-2' },
      { id: '1-2-2',     parentId: '1-2' },
      { id: '1-2-3',     parentId: '1-2' },
      { id: '1-2-1-1',   parentId: '1-2-1' },
      { id: '1-2-1-2',   parentId: '1-2-1' },
      { id: '1-2-1-3',   parentId: '1-2-1' },
      { id: '1-2-1-3-1', parentId: '1-2-1-3' },
      { id: '1-2-1-3-2', parentId: '1-2-1-3' },
      { id: '1-2-1-3-3', parentId: '1-2-1-3' },
      { id: '2',         parentId: '' },
      { id: '2-1',       parentId: '' },
      { id: '2-2',       parentId: '' },
      { id: '2-3',       parentId: '' },
      { id: '2-2-1',     parentId: '' },
      { id: '2-2-2',     parentId: '' },
      { id: '2-2-3',     parentId: '' },
     ] as ViewItem[];

    const resultArray: ViewItemId[] = [];
    getAllChildrenIds(items, '1-2', resultArray);

    expect(resultArray).toEqual(['1-2', '1-2-1', '1-2-1-1', '1-2-1-2', '1-2-1-3', '1-2-1-3-1', '1-2-1-3-2', '1-2-1-3-3', '1-2-2', '1-2-3']);
  });

  
});

// npm run test:unit get-all-children-ids.test.ts
