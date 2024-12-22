import { creatorFixDate } from 'entities/base/model/creators';
import { cloneObj } from 'shared/helpers/objects';
import { CardItem, ItemStyles } from '../../types';
import { v4 as uuidv4 } from 'uuid';
import { f } from 'app/styles';
// import { pxToRem } from 'app/providers/theme';


const BASE_SX: ItemStyles = {
  ...f('c'),
  width        : 'max-content',
  minWidth     : 10,
  height       : 'max-content',
  minHeight    : 10,
  // borderStyle  : 'solid',
  // borderWidth  : 1,
  // borderColor  : 'rgb(146, 146, 146)',
  borderRadius : 4,
  boxShadow    : '1px 1px 3px 0px rgb(184 184 184);',
  background   : 'white',
  color        : 'black',
  m            : 0,
  p            : 24,
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

  order       : cfg.order       || 1000,

  createdAt   : cfg.createdAt   || creatorFixDate(userId),
  lastChange  : cfg.lastChange  || creatorFixDate(userId)
});
