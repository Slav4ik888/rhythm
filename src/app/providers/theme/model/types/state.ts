import { PaletteMode } from '@mui/material';
import { NavbarColorName } from './navbar';
import { SidenavColorName } from './sidenav';


/**
 * КОНФИГУРАТОР ОРГАНИЗАЦИИ ТЕМ И ЦВЕТОВ
 */
export interface UIConfiguratorProviderState {
  // ОБЩИЕ
  mode                  : PaletteMode
  openConfigurator      : boolean         // Open / close Configurator

  // HEADER
  navbarFixed           : boolean         // 'fixed' | 'sticky'
  navbarTransparent     : boolean         // Прозрачный (вроде бы)
  navbarColor           : NavbarColorName // Фиолетовый | Синий | Красный | Оранжевый | Зелёный ...
  //     - Active theme color : Фиолетовый | Синий | Красный | Оранжевый | Зелёный ...

  // SIDEBAR
  sidenavMini           : boolean
  sidenavColor          : SidenavColorName // Фиолетовый | Синий | Красный | Оранжевый | Зелёный ...
  //     - Active theme color : Фиолетовый | Синий | Красный | Оранжевый | Зелёный ...
  //     - Background image   : Без фона | С фоном
  //                                       |- : Загрузить свою | Картинка 1 | Картинка 2 | Картинка 3 ...

  // LAYOUT
  //     - Background theme   : Фиолетовый | Синий | Красный | Оранжевый | Зелёный ...
  //     - Active theme color : Фиолетовый | Синий | Красный | Оранжевый | Зелёный ...
  //     - Background image   : Без фона | С фоном
  //                                       |- : Загрузить свою | Картинка 1 | Картинка 2 | Картинка 3 ...
}
