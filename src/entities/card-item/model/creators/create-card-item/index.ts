import { creatorFixDate } from 'entities/base/model/creators';
import { cloneObj } from 'shared/helpers/objects';
import { CardItem, ItemStyles } from '../../types';
import { v4 as uuidv4 } from 'uuid';
import { f } from 'app/styles';
import { stylesToSx } from '../../utils';
// import { pxToRem } from 'app/providers/theme';


const BASE_SX: ItemStyles = {
  ...f(),
  width  : 'max-content',
  my     : 3,
  p      : 3,
  border : '1px solid rgb(64, 64, 64)',
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
  styles      : cfg.styles ? stylesToSx(cfg.styles) : BASE_SX,
  childrenIds : cfg.childrenIds || [],

  createdAt   : cfg.createdAt   || creatorFixDate(userId),
  lastChange  : cfg.lastChange  || creatorFixDate(userId)
});
