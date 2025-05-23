import { DashboardViewEntities, ViewItem } from 'entities/dashboard-view';
import { getKod } from '..';



describe('getKod', () => {
  // Хелпер для создания мокового ViewItem
  const createItem = (
    id: string,
    settings: {
      kod?: string,
      fromGlobalKod?: boolean,
      isGlobalKod?: boolean
    },
    parentId: string = ''
  ): ViewItem => ({
    id,
    settings,
    parentId,
    // другие необходимые поля...
  } as ViewItem);

  it('should return item kod when fromGlobalKod is false/undefined', () => {
    const entities: DashboardViewEntities = {};
    const item = createItem('1', { kod: 'local-kod' });
    
    expect(getKod(entities, item)).toBe('local-kod');
  });

  it('should return "" when item has no kod and fromGlobalKod is false', () => {
    const entities: DashboardViewEntities = {};
    const item = createItem('1', {});
    
    expect(getKod(entities, item)).toBe('');
  });

  it('should return global kod when fromGlobalKod is true and global parent exists', () => {
    const entities: DashboardViewEntities = {
      '1': createItem('1', { isGlobalKod: true, kod: 'global-kod' }),
      '2': createItem('2', { fromGlobalKod: true }, '1'),
    };
    
    expect(getKod(entities, entities['2'])).toBe('global-kod');
  });

  it('should "" undefined when fromGlobalKod is true but no global parent exists', () => {
    const entities: DashboardViewEntities = {
      '1': createItem('1', { kod: 'not-global' }),
      '2': createItem('2', { fromGlobalKod: true }, '1'),
    };
    
    expect(getKod(entities, entities['2'])).toBe('');
  });

  it('should return "" when fromGlobalKod is true, global parent exists but has no kod', () => {
    const entities: DashboardViewEntities = {
      '1': createItem('1', { isGlobalKod: true }), // нет kod
      '2': createItem('2', { fromGlobalKod: true }, '1'),
    };
    
    expect(getKod(entities, entities['2'])).toBe('');
  });

  it('should return item kod when fromGlobalKod is true but no parent branch exists', () => {
    const entities: DashboardViewEntities = {};
    const item = createItem('1', { fromGlobalKod: true, kod: 'fallback-kod' });
    
    expect(getKod(entities, item)).toBe('fallback-kod');
  });

  it('should return the closest global parent kod in branch', () => {
    const entities: DashboardViewEntities = {
      '1': createItem('1', { isGlobalKod: true, kod: 'first-global' }),
      '2': createItem('2', {}, '1'),
      '3': createItem('3', { isGlobalKod: true, kod: 'second-global' }, '2'),
      '4': createItem('4', { fromGlobalKod: true }, '3'),
    };
    
    expect(getKod(entities, entities['4'])).toBe('second-global');
  });

  it('should handle circular references without infinite loop', () => {
    const entities: DashboardViewEntities = {
      '1': createItem('1', { fromGlobalKod: true }, '2'), // circular
      '2': createItem('2', { isGlobalKod: true, kod: 'circular-global' }, '1'),
    };
    
    expect(getKod(entities, entities['1'])).toBe('circular-global');
  });
});

// npm run test:unit get-kod.test.ts
