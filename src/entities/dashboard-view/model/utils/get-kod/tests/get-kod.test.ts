import { DashboardViewEntities } from '../../../slice/state-schema';
import { ViewItem, ViewItemChart, ViewItemType } from '../../../types';
import { getKod } from '..';



describe('getKod', () => {
  // Хелперы для создания моковых данных
  const createItem = (
    id       : string,
    type     : ViewItemType,
    settings : {
      kod?           : string,
      fromGlobalKod? : boolean,
      isGlobalKod?   : boolean
    } = {},
    parentId : string = ''
  ): ViewItem => ({
    id,
    type,
    settings,
    parentId,
    // другие необходимые поля...
  } as ViewItem);

  const createChart = (kod?: string, fromGlobalKod?: boolean): ViewItemChart => ({
    kod,
    fromGlobalKod,
    // другие необходимые поля...
  });

  it('should return empty string when item is undefined', () => {
    const entities: DashboardViewEntities = {};
    // @ts-ignore
    expect(getKod(entities, undefined)).toBe('');
  });

  describe('for non-chart items', () => {
    it('should return item kod when fromGlobalKod is false/undefined', () => {
      const entities: DashboardViewEntities = {};
    // @ts-ignore
      const item = createItem('1', 'widget', { kod: 'local-kod' });
      
      expect(getKod(entities, item)).toBe('local-kod');
    });

    it('should return empty string when item has no kod and fromGlobalKod is false', () => {
      const entities: DashboardViewEntities = {};
      // @ts-ignore
      const item = createItem('1', 'widget', {});
      
      expect(getKod(entities, item)).toBe('');
    });

    it('should return global kod when fromGlobalKod is true and global parent exists', () => {
      const entities: DashboardViewEntities = {
        // @ts-ignore
        '1': createItem('1', 'container', { isGlobalKod: true, kod: 'global-kod' }),
        // @ts-ignore
        '2': createItem('2', 'widget', { fromGlobalKod: true }, '1'),
      };
      
      expect(getKod(entities, entities['2'])).toBe('global-kod');
    });

    it('should return empty string when fromGlobalKod is true but no global parent exists', () => {
      const entities: DashboardViewEntities = {
        // @ts-ignore
        '1': createItem('1', 'container', { kod: 'not-global' }),
        // @ts-ignore
        '2': createItem('2', 'widget', { fromGlobalKod: true }, '1'),
      };
      
      expect(getKod(entities, entities['2'])).toBe('');
    });
  });

  describe('for chart items', () => {
    it('should return chart kod when fromGlobalKod is false/undefined', () => {
      const entities: DashboardViewEntities = {};
      const item = createItem('1', 'chart');
      const chart = createChart('chart-kod');
      
      expect(getKod(entities, item, chart)).toBe('chart-kod');
    });

    it('should return empty string when chart has no kod and fromGlobalKod is false', () => {
      const entities: DashboardViewEntities = {};
      const item = createItem('1', 'chart');
      const chart = createChart();
      
      expect(getKod(entities, item, chart)).toBe('');
    });

    it('should return global kod when fromGlobalKod is true and global parent exists', () => {
      const entities: DashboardViewEntities = {
        // @ts-ignore
        '1': createItem('1', 'container', { isGlobalKod: true, kod: 'global-kod' }),
        '2': createItem('2', 'chart', {}, '1'),
      };
      const chart = createChart(undefined, true);
      
      expect(getKod(entities, entities['2'], chart)).toBe('global-kod');
    });

    it('should return empty string when fromGlobalKod is true but no global parent exists', () => {
      const entities: DashboardViewEntities = {
        // @ts-ignore
        '1': createItem('1', 'container', { kod: 'not-global' }),
        '2': createItem('2', 'chart', {}, '1'),
      };
      const chart = createChart(undefined, true);
      
      expect(getKod(entities, entities['2'], chart)).toBe('');
    });

    it('should prioritize chart kod over item settings', () => {
      const entities: DashboardViewEntities = {
        '1': createItem('1', 'chart', { kod: 'item-kod' }),
      };
      const chart = createChart('chart-kod');
      
      expect(getKod(entities, entities['1'], chart)).toBe('chart-kod');
    });
  });

  describe('edge cases', () => {
    it('should return empty string when item has no settings', () => {
      const entities: DashboardViewEntities = {};
      const item = { id: '1', type: 'widget' } as unknown as ViewItem;
      
      expect(getKod(entities, item)).toBe('');
    });

    it('should return empty string when chart is undefined for chart item', () => {
      const entities: DashboardViewEntities = {};
      const item = createItem('1', 'chart');
      
      expect(getKod(entities, item)).toBe('');
    });

    it('should handle circular references without infinite loop', () => {
      const entities: DashboardViewEntities = {
        // @ts-ignore
        '1': createItem('1', 'widget', { fromGlobalKod: true }, '2'),
        // @ts-ignore
        '2': createItem('2', 'container', { isGlobalKod: true, kod: 'circular-global' }, '1'),
      };
      
      expect(getKod(entities, entities['1'])).toBe('circular-global');
    });
  });
});

// npm run test:unit get-kod.test.ts
