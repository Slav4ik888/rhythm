import { creatorFixDate } from 'entities/base/model/creators';
import { cloneObj } from 'shared/helpers/objects';
import { CardItem, ItemStyles } from '../../types';
import { v4 as uuidv4 } from 'uuid';
import { f } from 'app/styles';
import { NO_PARENT_ID, NO_SHEET_ID, ORDER_STEP } from '../../consts';



const BASE_SX: ItemStyles = {
  ...f('c'),
  width        : 'max-content',
  minWidth     : 10,
  height       : 'max-content',
  minHeight    : 10,
  borderStyle  : 'solid',
  borderWidth  : 1,
  borderColor  : 'rgb(146, 146, 146)',
  borderRadius : 4,
  // boxShadow    : '1px 1px 3px 0px rgb(184 184 184);',
  background   : 'transparent',
  color        : 'black',
  m            : 0,
  p            : 24,
}


export const createCardItem = (
  cfg    : Partial<CardItem> = {} as CardItem,
  userId : string
): CardItem => {
  const cardItem: CardItem = cloneObj({
    id          : cfg.id          || uuidv4(),
    parentId    : cfg.parentId    || NO_PARENT_ID,
    sheetId     : cfg.sheetId     || NO_SHEET_ID,

    type        : cfg.type        || 'box',
    styles      : cfg.styles ? cfg.styles : BASE_SX,

    order       : cfg.order       || ORDER_STEP,

    createdAt   : cfg.createdAt   || creatorFixDate(userId),
    lastChange  : cfg.lastChange  || creatorFixDate(userId)
  });

  if (cfg.type === 'text') cardItem.label = 'Введите заголовок'
  
  return cardItem;
}
