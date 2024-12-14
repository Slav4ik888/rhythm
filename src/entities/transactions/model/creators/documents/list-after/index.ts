import { DbRefName, Operation } from '../../../types';
import { createListAfter } from '../../base';


export const createDocumentListAfter = (
  pointerId : string,
  path      : string[] = [],
  id        : string,
  after     : string = '',
): Operation => createListAfter(
  {
    id, after
  },
  {
    id: pointerId,
    dbRefName : DbRefName.DOCUMENTS
  },
  path
);

// {
//   path    : ['sheets', 'mainSheet', 'itemIds'],
//   command : OperationCommand.LIST_AFTER,
//   args: {
//     after : '',
//     id    : newItem.id
//   },
//   pointer: {
//     id        : document.id,
//     dbRefName : DbRefName.DOCUMENTS
//   }
// }
