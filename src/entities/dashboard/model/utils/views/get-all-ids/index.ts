import { CardItemId } from 'entities/card-item';
import { DashboardViewEntities } from '../../../slice/state-schema';



/**
 * Пушит список всех вложенных childrenIds (для удаления),
 * в предоставленный []
 */
export const getAllIds = (
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
