
type SidebarRouteListItemType =
  | 'collapse' // Для route | href
  | 'title'    // Заголовки
  | 'divider'  // Разделитель
  // | "examples" // Примеры
  // | "auth"     // Авторизация


export interface SidebarRouteListItem {
  type        : SidebarRouteListItemType
  title?      : string  // Текстовое название выводимое на экран
  key         : string  // Key for rendering this item
  icon?       : React.ReactNode | string // Иконка | Буква которая будет преобразована в иконку
  noCollapse? : boolean // If true, don't collapse this item

  href?       : string  // Link на сторонний сайт
  route?      : string
}
