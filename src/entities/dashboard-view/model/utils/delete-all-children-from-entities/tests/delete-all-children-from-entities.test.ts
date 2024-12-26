import { DashboardViewEntities } from 'entities/dashboard-view';
import { deleteAllChildrenFromEntities } from '..';



describe('deleteAllChildrenFromViewEntities', () => {
  test('Data is valid', () => {
    const entities: DashboardViewEntities = {
      '1':         { id: '1',         childrenIds: ['1-1', '1-2', '1-3'] },
      '1-1':       { id: '1-1',       childrenIds: [] },
      '1-2':       { id: '1-2',       childrenIds: ['1-2-1', '1-2-2', '1-2-3'] },
      '1-3':       { id: '1-3',       childrenIds: [] },
      '1-2-1':     { id: '1-2-1',     childrenIds: ['1-2-1-1', '1-2-1-2', '1-2-1-3'] },
      '1-2-2':     { id: '1-2-2',     childrenIds: [] },
      '1-2-3':     { id: '1-2-3',     childrenIds: [] },
      '1-2-1-1':   { id: '1-2-1-1',   childrenIds: [] },
      '1-2-1-2':   { id: '1-2-1-2',   childrenIds: [] },
      '1-2-1-3':   { id: '1-2-1-3',   childrenIds: ['1-2-1-3-1', '1-2-1-3-2', '1-2-1-3-3'] },
      '1-2-1-3-1': { id: '1-2-1-3-1', childrenIds: [] },
      '1-2-1-3-2': { id: '1-2-1-3-2', childrenIds: [] },
      '1-2-1-3-3': { id: '1-2-1-3-3', childrenIds: [] },
      '2':         { id: '2',         childrenIds: ['1-1', '1-2', '1-3'] },
      '2-1':       { id: '2-1',       childrenIds: [] },
      '2-2':       { id: '2-2',       childrenIds: ['1-2-1', '1-2-2', '1-2-3'] },
      '2-3':       { id: '2-3',       childrenIds: [] },
      '2-2-1':     { id: '2-2-1',     childrenIds: ['1-2-1-1', '1-2-1-2', '1-2-1-3'] },
      '2-2-2':     { id: '2-2-2',     childrenIds: [] },
      '2-2-3':     { id: '2-2-3',     childrenIds: [] },
    } as unknown as DashboardViewEntities;

    deleteAllChildrenFromEntities(entities, '1');

    expect(entities).toEqual({
      '2':         { id: '2',         childrenIds: ['1-1', '1-2', '1-3'] },
      '2-1':       { id: '2-1',       childrenIds: [] },
      '2-2':       { id: '2-2',       childrenIds: ['1-2-1', '1-2-2', '1-2-3'] },
      '2-3':       { id: '2-3',       childrenIds: [] },
      '2-2-1':     { id: '2-2-1',     childrenIds: ['1-2-1-1', '1-2-1-2', '1-2-1-3'] },
      '2-2-2':     { id: '2-2-2',     childrenIds: [] },
      '2-2-3':     { id: '2-2-3',     childrenIds: [] },
    });
  });



  test('Data is not valid', () => {
    const entities: DashboardViewEntities = {
      '1':         { id: '1',         childrenIds: ['1-1', '1-2', '1-3'] },
      '1-1':       { id: '1-1',       childrenIds: [] },
      '1-2':       { id: '1-2',       childrenIds: ['1-2-1', '1-2-2', '1-2-3'] },
      '1-3':       { id: '1-3',       childrenIds: [] },
      '1-2-1':     { id: '1-2-1',     childrenIds: ['1-2-1-1', '1-2-1-2', '1-2-1-3'] },
      '1-2-2':     { id: '1-2-2',     childrenIds: [] },
      '1-2-3':     { id: '1-2-3',     childrenIds: [] },
      '1-2-1-1':   { id: '1-2-1-1',   childrenIds: [] },
      '1-2-1-2':   { id: '1-2-1-2',   childrenIds: [] },
      '1-2-1-3':   { id: '1-2-1-3',   childrenIds: ['1-2-1-3-1', '1-2-1-3-2', '1-2-1-3-3'] },
      '1-2-1-3-1': { id: '1-2-1-3-1', childrenIds: ['no-id1', 'no-id11'] },
      '1-2-1-3-2': { id: '1-2-1-3-2', childrenIds: ['no-id2'] },
      '1-2-1-3-3': { id: '1-2-1-3-3', childrenIds: ['no-id3'] },
      '2':         { id: '2',         childrenIds: ['1-1', '1-2', '1-3'] },
      '2-1':       { id: '2-1',       childrenIds: [] },
      '2-2':       { id: '2-2',       childrenIds: ['1-2-1', '1-2-2', '1-2-3'] },
      '2-3':       { id: '2-3',       childrenIds: [] },
      '2-2-1':     { id: '2-2-1',     childrenIds: ['1-2-1-1', '1-2-1-2', '1-2-1-3'] },
      '2-2-2':     { id: '2-2-2',     childrenIds: [] },
      '2-2-3':     { id: '2-2-3',     childrenIds: [] },
    } as unknown as DashboardViewEntities;

    deleteAllChildrenFromEntities(entities, '1');

    expect(entities).toEqual({
      '2':         { id: '2',         childrenIds: ['1-1', '1-2', '1-3'] },
      '2-1':       { id: '2-1',       childrenIds: [] },
      '2-2':       { id: '2-2',       childrenIds: ['1-2-1', '1-2-2', '1-2-3'] },
      '2-3':       { id: '2-3',       childrenIds: [] },
      '2-2-1':     { id: '2-2-1',     childrenIds: ['1-2-1-1', '1-2-1-2', '1-2-1-3'] },
      '2-2-2':     { id: '2-2-2',     childrenIds: [] },
      '2-2-3':     { id: '2-2-3',     childrenIds: [] },
    });
  });


  test('Entities is empty', () => {
    const entities: DashboardViewEntities = {
    } as unknown as DashboardViewEntities;

    deleteAllChildrenFromEntities(entities, '1');

    expect(entities).toEqual({});
  });
  
});

// npm run test:unit delete-all-children-from-entities.test.ts
