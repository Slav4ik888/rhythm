import { Hint } from '../types';


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
