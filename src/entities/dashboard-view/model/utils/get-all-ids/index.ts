import { CardItemId } from '../../types';
import { DashboardViewEntities } from '../../slice/state-schema';



/**
 * Пушит список всех вложенных childrenIds (для удаления),
 * в предоставленный []
 */
export const getAllIds = (
  entities    : DashboardViewEntities,
  currentId   : CardItemId,
  resultArray : CardItemId[]
) => {
  const childrenIds = entities[currentId]?.childrenIds;
  resultArray.push(currentId);

  if (childrenIds?.length) {
    childrenIds.forEach(childId => {
      getAllIds(entities, childId, resultArray);
    });
  }
};
