import { DashboardViewEntities, ViewItem, ViewItemId } from 'entities/dashboard-view';
import { getParentBranch } from '../get-parent-branch';


/** Возвращает первого родителя с isGlobalKod === true в ветке */
export function getFirstItemInBranchWithGlobalKod(
  entities : DashboardViewEntities,
  targetId : ViewItemId,
): ViewItem | undefined {
  const branch = getParentBranch(entities, targetId);
  if (! branch || ! branch.length) return;

  // Ищем первого родителя с isGlobalKod === true в ветке
  for (const parentId of branch) {
    const parent = entities[parentId];
    if (parent?.settings?.isGlobalKod) return parent
  }

  return; // Ни у кого в ветке нет isGlobalKod === true
}
