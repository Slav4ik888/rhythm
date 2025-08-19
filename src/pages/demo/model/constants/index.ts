
export interface DemoPageType {
  id       : number
  route    : string
  title    : string
  alt      : string
  caption  : string
}

export const DEMO_PAGES: DemoPageType[] = [
  {
    id       : 1,
    route    : '/demoPecarColor_JlY5D/dashboard',
    title    : 'Компания "Семейный пекарь"',
    alt      : 'Демо-картинка компании "Семейный пекарь" (цветной вариант)',
    caption  : 'Цветовая палитра, в соответствии с "Оргсхемой из 7 отделений" Л.Рона Хаббарда.',
  },
  {
    id       : 2,
    route    : '/demoPecarLight_sP4kL/dashboard',
    title    : 'Компания "Семейный пекарь"',
    alt      : 'Демо-картинка компании "Семейный пекарь" (светлный вариант)',
    caption  : 'Светло-серая цветовая палитра. ',
  }
];
