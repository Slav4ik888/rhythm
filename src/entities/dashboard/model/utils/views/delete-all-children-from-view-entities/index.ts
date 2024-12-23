import { CardItemId } from 'entities/card-item';
import { DashboardViewEntities } from '../../../slice/state-schema';



// Составим список всех вложенных childrenIds
const getAllIds = (
  viewEntities : DashboardViewEntities,
  currentId    : CardItemId,
  resultArray  : CardItemId[]
) => {
  const childrenIds = viewEntities[currentId]?.childrenIds;
  resultArray.push(currentId);

  if (childrenIds?.length) {
    childrenIds.forEach(childId => {
      resultArray.push(childId);
      getAllIds(viewEntities, childId, resultArray);
    });
  }
};


/** Удаляет из viewEntities всё дерево вложенных элементов */
export const deleteAllChildrenFromViewEntities = (
  viewEntities : DashboardViewEntities,
  cardItemId   : CardItemId
) => {
  let allIds: CardItemId[] = [];

  getAllIds(viewEntities, cardItemId, allIds);

  allIds.forEach(id => delete viewEntities[id]);
}
