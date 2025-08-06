import { creatorFixDate } from 'entities/base/creators';
import { cloneObj } from 'shared/helpers/objects';
import { ViewItem, ViewItemStyles } from '../../types';
import { v4 as uuidv4 } from 'uuid';
import { f } from 'shared/styles';
import { NO_PARENT_ID, NO_SHEET_ID, ORDER_STEP } from '../../consts';



/** Base style for all items (box|text|divider) */
const BASE_SX: ViewItemStyles = {
  ...f('c'),
  width        : '100%',
  minWidth     : 40,
  height       : 'max-content',
  minHeight    : 40,
  borderStyle  : 'solid',
  borderWidth  : 1,
  borderColor  : 'rgba(146, 146, 146, 1)',
  borderRadius : 4,
  lineHeight   : 1,
  m            : 0,
  p            : 24,
};


const deleteBorder = (viewItem: ViewItem) => {
  delete viewItem.styles.borderStyle;
  delete viewItem.styles.borderWidth;
  delete viewItem.styles.borderColor;
  delete viewItem.styles.borderRadius;
};


/** v.2025-06-26 */
export const createViewItem = (
  userId  : string,
  cfg     : Partial<ViewItem> = {} as ViewItem
): ViewItem => {
  const viewItem: ViewItem = cloneObj({
    id          : cfg.id          || uuidv4(),
    bunchId     : cfg.bunchId     || uuidv4(),
    parentId    : cfg.parentId    || NO_PARENT_ID,
    sheetId     : cfg.sheetId     || NO_SHEET_ID,

    type        : cfg.type        || 'box',
    styles      : cfg.styles ? cfg.styles : BASE_SX,

    order       : cfg.order       || ORDER_STEP,

    createdAt   : cfg.createdAt   || creatorFixDate(userId),
    lastChange  : cfg.lastChange  || creatorFixDate(userId)
  });

  if (cfg.type === 'text') {
    deleteBorder(viewItem);

    viewItem.label = 'Введите заголовок';
    viewItem.styles.minHeight = '8';
    viewItem.styles.p         = 0;
  }

  if (cfg.type === 'box' || cfg.type === 'text') {
    viewItem.styles = {
      ...viewItem.styles,
      width        : 'max-content',
      // boxShadow    : '1px 1px 3px 0px rgba(184, 184, 184, 1)',
      background   : 'rgba(255, 255, 255, 0)', // Прозрачный фон
      color        : 'rgb(32, 32, 32)',
    };
  }

  if (cfg.type === 'divider') {
    deleteBorder(viewItem);
    viewItem.styles.minHeight = '8';
    viewItem.styles.p         = 0;
  }

  if (cfg.type === 'chart') {
    viewItem.settings = {};
    viewItem.settings.charts = [];
    viewItem.settings.charts.push({ chartType: cfg.settings?.charts?.[0]?.chartType || 'line' });
  }

  if (cfg.type === 'growthIcon') {
    deleteBorder(viewItem);

    viewItem.styles = {
      ...viewItem.styles,
      ...f('c-c-c'), // Чтобы треугольник выравнился по центру, а не был прилеплен сверху
      width : 40,
      p     : 0,
    };
  }

  if (cfg.type === 'digitIndicator') {
    deleteBorder(viewItem);

    viewItem.styles = {
      ...viewItem.styles,
      ...f('r-c-c'),
      width         : 'max-content',
      minHeight     : 10,
      p             : 0,
    };
  }

  if (cfg.type === 'gaugeColumn') {
    viewItem.styles = {
      ...viewItem.styles,
      ...f('r-fe-fs'),
      background    : 'rgba(255, 255, 255, 0)', // Прозрачный фон
      width         : 100,
      height        : 30, // Толщина полосы
      minHeight     : 30,
      p             : 0,
    };
  }
  if (cfg.type === 'list') {
    viewItem.styles = {
      ...viewItem.styles,
      overflow: 'scroll',
    };
  }

  return viewItem;
}
