import { findElementByMarker } from '..';
import { ViewItem } from 'entities/dashboard-view';



describe('findElementByMarker', () => {
  const mockItems = [
    { id: 'root',            parentId: null,          settings: undefined },
    { id: 'parent1',         parentId: 'root',        settings: { kodMarker: 'parent' } },
    { id: 'parent2',         parentId: 'root',        settings: undefined },
    { id: 'target-sibling',  parentId: 'root',        settings: { kodMarker: 'target' } },
    { id: 'child1',          parentId: 'parent1',     settings: undefined },
    { id: 'target-child',    parentId: 'child1',      settings: { kodMarker: 'target' } },
    { id: 'child2',          parentId: 'parent1',     settings: { kodMarker: null } },
    { id: 'child1_p2',       parentId: 'parent2',     settings: { kodMarker: 'targetParent2' } },
    { id: 'grandchild',      parentId: 'child2',      settings: { kodMarker: 'target' } },
    { id: 'no-settings',     parentId: 'root',        settings: undefined },
    { id: 'null-settings',   parentId: 'root',        settings: null },
    { id: 'unic-settings',   parentId: 'target-chil', settings: { kodMarker: 'unic-target' } },
  ] as ViewItem[];

  it('находит маркер среди соседей', () => {
    const result = findElementByMarker(mockItems, 'parent1', 'target');
    expect(result?.id).toBe('target-sibling');
  });

  it('находит маркер у самого элемента', () => {
    const result = findElementByMarker(mockItems, 'target-sibling', 'target');
    expect(result?.id).toBe('target-sibling');
  });

  it('находит маркер в глубокой вложенности', () => {
    const result = findElementByMarker(mockItems, 'root', 'target');
    expect(result?.id).toBe('target-sibling');
  });

  it('находит маркер в соседнем дереве в глубокой вложенности', () => {
    const result = findElementByMarker(mockItems, 'child1', 'targetParent2');
    expect(result?.id).toBe('child1_p2');
  });

  it('возвращает null если маркер не найден', () => {
    const result = findElementByMarker(mockItems, 'child1', 'non-existent');
    expect(result).toBeNull();
  });

  it('обрабатывает элементы без settings', () => {
    const result = findElementByMarker(mockItems, 'no-settings', 'target');
    expect(result?.id).toBe('target-sibling');
  });

  it('обрабатывает элементы с null settings', () => {
    const result = findElementByMarker(mockItems, 'null-settings', 'target');
    expect(result?.id).toBe('target-sibling');
  });

  it('возвращает null для несуществующего элемента', () => {
    const result = findElementByMarker(mockItems, 'non-existent', 'target');
    expect(result).toBeNull();
  });

  it('работает с пустым массивом', () => {
    const result = findElementByMarker([], 'root', 'target');
    expect(result).toBeNull();
  });

  it('произвольный адрес', () => {
    const result = findElementByMarker(mockItems, 'ro', 'target');
    expect(result).toBeNull();
  });
});


// npm run test:unit get-selected-period.test.ts
