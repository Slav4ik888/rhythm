import { creatorFixDate } from 'entities/base/model/creators';
import { cloneObj } from 'shared/helpers/objects';
import { CardItem, ItemStyles } from '../../types';
import { v4 as uuidv4 } from 'uuid';
import { f } from 'app/styles';
// import { pxToRem } from 'app/providers/theme';


const BASE_SX: ItemStyles = {
  ...f(),
  width        : 'max-content',
  minWidth     : 10,
  height       : 'max-content',
  minHeight    : 10,
  m            : 24,
  p            : 24,
  // borderStyle  : 'solid',
  // borderWidth  : 1,
  // borderColor  : 'rgb(146, 146, 146)',
  borderRadius : 4,
  boxShadow    : '1px 1px 3px 0px rgb(184 184 184);',
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
