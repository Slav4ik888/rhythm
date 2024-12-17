import { creatorFixDate } from 'entities/base/model/creators';
import { cloneObj } from 'shared/helpers/objects';
import { CardItem, ItemStyles } from '../../types';
import { v4 as uuidv4 } from 'uuid';
import { f } from 'app/styles';
// import { pxToRem } from 'app/providers/theme';


const BASE_SX: ItemStyles = {
  ...f(),
  width        : 'max-content',
  height       : 'max-content',
  m            : 24,
  p            : 24,
  borderStyle  : 'solid',
  borderWidth  : '1px',
  borderColor  : 'rgb(146, 146, 146)',
  borderRadius : '4px',
}

// const BASE_CONTENT_SX: ItemStyles = {
//   fontSize: pxToRem(14),
// }


export const createCardItem = (
  cfg    : Partial<CardItem> = {} as CardItem,
  userId : string
): CardItem => cloneObj({
  id          : cfg.id          || uuidv4(),
  parentId    : cfg.parentId    || 'no_parentId',
  sheetId     : cfg.sheetId     || 'no_sheetId',

  type        : cfg.type        || 'box',
  styles      : cfg.styles ? cfg.styles : BASE_SX,
  childrenIds : cfg.childrenIds || [],

  createdAt   : cfg.createdAt   || creatorFixDate(userId),
  lastChange  : cfg.lastChange  || creatorFixDate(userId)
});
