import { ColorMode } from './base';

/**
 * ОРГАНИЗАЦИЯ ТЕМ И ЦВЕТОВ
 * КОНФИГУРАТОР
 */
export interface UIConfigProviderState {
  // ОБЩИЕ
  mode: ColorMode

  // HEADER
  navbarFixed           : boolean // 'fixed' | 'sticky'
  navbarBackgroundTheme : 'black' | 'grey' | 'blue' // Фиолетовый | Синий | Красный | Оранжевый | Зелёный ...
  //     - Active theme color : Фиолетовый | Синий | Красный | Оранжевый | Зелёный ...

  // SIDEBAR
  sidenavMini : boolean
  //     - Background theme   : Фиолетовый | Синий | Красный | Оранжевый | Зелёный ...
  //     - Active theme color : Фиолетовый | Синий | Красный | Оранжевый | Зелёный ...
  //     - Background image   : Без фона | С фоном
  //                                       |- : Загрузить свою | Картинка 1 | Картинка 2 | Картинка 3 ...

  // LAYOUT
  //     - Background theme   : Фиолетовый | Синий | Красный | Оранжевый | Зелёный ...
  //     - Active theme color : Фиолетовый | Синий | Красный | Оранжевый | Зелёный ...
  //     - Background image   : Без фона | С фоном
  //                                       |- : Загрузить свою | Картинка 1 | Картинка 2 | Картинка 3 ...
}
