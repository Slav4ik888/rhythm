import { creatorFixDate } from 'entities/base/model/creators';
import { cloneObj } from 'shared/helpers/objects';
import { CardItem, ItemStyles } from '../../types';
import { v4 as uuidv4 } from 'uuid';
import { f } from 'app/styles';
import { NO_PARENT_ID, NO_SHEET_ID, ORDER_STEP } from '../../consts';



/** Base style for all items (box|text|divider) */
const BASE_SX: ItemStyles = {
  ...f('c'),
  width        : '100%',
  minWidth     : 10,
  height       : 'max-content',
  minHeight    : 10,
  m            : 0,
  p            : 24,
};


/** Additional style for box|text items */
const ADDI_SX: ItemStyles = {
  width        : 'max-content',
  borderStyle  : 'solid',
  borderWidth  : 1,
  borderColor  : 'rgba(146, 146, 146, 1)',
  borderRadius : 4,
  // boxShadow    : '1px 1px 3px 0px rgba(184, 184, 184, 1)',
  background   : 'rgba(255, 255, 255, 1)',
  color        : 'rgba(70, 70, 70, 1)',
};


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
  if (cfg.type === 'box' || cfg.type === 'text') {
    cardItem.styles = {
      ...cardItem.styles,
      ...ADDI_SX
    }
  }

  if (cfg.type === 'chart') {
    cardItem.settings = {};
    cardItem.settings.chartType = cfg?.settings?.chartType || 'line';
  }

  return cardItem;
}
