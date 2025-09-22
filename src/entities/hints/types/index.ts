
/** Подсказка */
export interface Hint {
  id        : number
  // pageId    : string  // Для какой страницы подсказка. Будет показана только на этой странице.
  elementId : string  // Id of the element to which the hint is attached
  order     : number
  title     : string  // Краткое название
  text      : string  // Text to display
  isShown   : boolean // В этой сессии уже показана эта подсказка
  showAgain : boolean // Показывать снова от дальнейшего показа этой подсказки - храниться у пользователя
}
