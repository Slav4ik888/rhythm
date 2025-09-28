import { Hint, Position } from '../types';



export const DEFAULT_POSITION: Position = {
  top            : 0,
  left           : 0,
  arrowPosition  : 'none' as const,
  elementVisible : false
};


export const HINTS: Hint[] = [
  // Dashboard
  // Navbar
  {
    id        : 'control-date-end',
    title     : 'Конечная дата периода',
    text      : 'Выберите здесь дату, до которой нужно отображать данные.',
    attention : 'Через некоторое время (например, через неделю) Вам нужно изменить эту дату,'
     + ' чтобы увидеть актуальные данные.',
    isShown   : false,
    showAgain : true
  },
  {
    id        : 'control-refresh-btn',
    title     : 'Кнопка обновления данных',
    text      : 'Нажмите эту кнопку, для получения обновлённых данных из google-таблицы.',
    isShown   : false,
    showAgain : true
  },
  {
    id        : 'last-updated-text',
    title     : 'Дата и время последного обновления',
    text      : 'Здесь показано, когда было последнее обновление данных из google-таблицы.',
    isShown   : false,
    showAgain : true
  }
]
