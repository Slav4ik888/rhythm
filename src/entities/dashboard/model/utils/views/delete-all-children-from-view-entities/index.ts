import { CardItemId } from 'entities/card-item';
import { DashboardViewEntities } from '../../../slice/state-schema';
import { getAllIds } from '../get-all-ids';



/**
 * DEPRECATED
 * Используется этот же принцип, оставил только из-за работающего теста 
 * Удаляет из viewEntities всё дерево вложенных элементов
 */
export const deleteAllChildrenFromViewEntities = (
  viewEntities : DashboardViewEntities,
  cardItemId   : CardItemId
) => {
  let allIds: CardItemId[] = [];

  getAllIds(viewEntities, cardItemId, allIds);

  allIds.forEach(id => delete viewEntities[id]);
}
