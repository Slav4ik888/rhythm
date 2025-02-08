import { ViewItem } from 'entities/dashboard-view';
import { getCopyViewItem } from '..';


describe('getCopyViewItem', () => {
  const items = [
    { id: '1',  parentId: 'no_parentId', oldId: '1', oldParentId: 'no_parentId'  },
    { id: '2',  parentId: 'no_parentId', oldId: '2', oldParentId: 'no_parentId'  },
    { id: '3',  parentId: 'no_parentId', oldId: '3', oldParentId: 'no_parentId'  },
    { id: '4',  parentId: '1',           oldId: '4', oldParentId: '1'            },
    { id: '5',  parentId: '2',           oldId: '5', oldParentId: '2'            },
    { id: '6',  parentId: '3',           oldId: '6', oldParentId: '3'            },
    { id: '7',  parentId: '1',           oldId: '7', oldParentId: '1'            },
    { id: '8',  parentId: '2',           oldId: '8', oldParentId: '2'            },
    { id: '9',  parentId: '3',           oldId: '9', oldParentId: '3'            },
    { id: '10', parentId: '4',           oldId: '10', oldParentId: '4'            },
    { id: '11', parentId: '4',           oldId: '11', oldParentId: '4'            },
    { id: '12', parentId: '4',           oldId: '12', oldParentId: '4'            },
    { id: '13', parentId: 'no_parentId', oldId: '13', oldParentId: 'no_parentId'  },
    { id: '14', parentId: 'no_parentId', oldId: '14', oldParentId: 'no_parentId'  },
    { id: '15', parentId: '12',          oldId: '15', oldParentId: '12'           },
    { id: '16', parentId: '11',          oldId: '16', oldParentId: '11'           },
    { id: '17', parentId: 'no_parentId', oldId: '17', oldParentId: 'no_parentId'  },
    { id: '18', parentId: '15',          oldId: '18', oldParentId: '15'           },
    { id: '19', parentId: '18',          oldId: '19', oldParentId: '18'           },
    { id: '20', parentId: '18',          oldId: '20', oldParentId: '18'           },
  ];

  test('Valid data', () => {
    const result = getCopyViewItem('4', '111', items as unknown as ViewItem[]);
    console.log(result);

    const resultOldData = result.map(item => ({
      // @ts-ignore
      oldId: item.oldId, oldParentId : item.oldParentId,
    }));
    
    expect(result[0].parentId).toEqual('111');
    expect(result[1].parentId).toEqual(result[0].id);
    
    expect(resultOldData).toEqual([
      { oldId: '4',  oldParentId: '1' },
      { oldId: '10', oldParentId: '4' },
      { oldId: '11', oldParentId: '4' },
      { oldId: '16', oldParentId: '11' },
      { oldId: '12', oldParentId: '4' },
      { oldId: '15', oldParentId: '12' },
      { oldId: '18', oldParentId: '15' },
      { oldId: '19', oldParentId: '18' },
      { oldId: '20', oldParentId: '18' },
    ]);
  });


  test('Invalid items', () => {
    const result = getCopyViewItem('4', '111', undefined as unknown as ViewItem[]);
    
    expect(result).toEqual([]);
  });

  test('Incorrect copiedId', () => {
    const result = getCopyViewItem('100500', '111', items as unknown as ViewItem[]);
    
    expect(result).toEqual([]);
  });
});

// npm run test:unit get-copy-view-item.test.ts
