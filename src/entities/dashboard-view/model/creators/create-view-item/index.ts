import { creatorFixDate } from 'entities/base/model/creators';
import { cloneObj } from 'shared/helpers/objects';
import { ViewItem, ViewItemStyles } from '../../types';
import { v4 as uuidv4 } from 'uuid';
import { f } from 'shared/styles';
import { NO_PARENT_ID, NO_SHEET_ID, ORDER_STEP } from '../../consts';



/** Base style for all items (box|text|divider) */
const BASE_SX: ViewItemStyles = {
  ...f('c'),
  width        : '100%',
  minWidth     : 10,
  height       : 'max-content',
  minHeight    : 10,
  borderStyle  : 'solid',
  borderWidth  : 1,
  borderColor  : 'rgba(146, 146, 146, 1)',
  borderRadius : 4,
  lineHeight   : 1,
  m            : 0,
  p            : 24,
};



export const createViewItem = (
  cfg    : Partial<ViewItem> = {} as ViewItem,
  userId : string
): ViewItem => {
  const viewItem: ViewItem = cloneObj({
    id          : cfg.id          || uuidv4(),
    parentId    : cfg.parentId    || NO_PARENT_ID,
    sheetId     : cfg.sheetId     || NO_SHEET_ID,

    type        : cfg.type        || 'box',
    styles      : cfg.styles ? cfg.styles : BASE_SX,

    order       : cfg.order       || ORDER_STEP,

    createdAt   : cfg.createdAt   || creatorFixDate(userId),
    lastChange  : cfg.lastChange  || creatorFixDate(userId)
  });

  if (cfg.type === 'text') viewItem.label = 'Введите заголовок'

  if (cfg.type === 'box' || cfg.type === 'text') {
    viewItem.styles = {
      ...viewItem.styles,
      width        : 'max-content',
      // boxShadow    : '1px 1px 3px 0px rgba(184, 184, 184, 1)',
      background   : 'rgba(255, 255, 255, 0)', // Прозрачный фон
      color        : 'rgb(32, 32, 32)',
    };
  }

  if (cfg.type === 'chart') {
    viewItem.settings = {};
    viewItem.settings.charts = [];
    viewItem.settings.charts.push({ chartType: cfg.settings?.charts?.[0]?.chartType || 'line' });
  }

  if (cfg.type === 'growthIcon') {
    viewItem.styles = {
      ...viewItem.styles,
      ...f('c-c-c'), // Чтобы треугольник выравнился по центру, а не был прилеплен сверху
      width: 40,
    };
  }

  if (cfg.type === 'digitIndicator') {
    viewItem.styles = {
      ...viewItem.styles,
      ...f('-c-c'),
      width : 100,
      p     : 4,
    };
  }

  return viewItem;
}
