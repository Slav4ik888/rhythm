import { DashboardViewEntities } from '../../slice/state-schema';
import { CardItemId } from '../../types';
import { getAllIds } from '../get-all-ids';



/**
 * DEPRECATED
 * Используется этот же принцип, оставил только из-за работающего теста 
 * Удаляет из entities всё дерево вложенных элементов
 */
export const deleteAllChildrenFromEntities = (
  entities : DashboardViewEntities,
  cardItemId   : CardItemId
) => {
  let allIds: CardItemId[] = [];

  getAllIds(entities, cardItemId, allIds);

  allIds.forEach(id => delete entities[id]);
}
