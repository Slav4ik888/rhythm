import { ColorsConfig } from 'app/providers/theme';
import { CompanyId } from 'entities/company';


export const PRODUCT_COLORS_CONFIG: Record<CompanyId, ColorsConfig> = {
  [CompanyId.OSNOVA]: {
    'Общая': {
      color      : '#0a53a8',
      background : '#bfe1f6',
    },
    'Сопровождение': {
      color      : '#1a7951',
      background : '#d4edbb',
    },
    'Курс': {
      color      : '#473821',
      background : '#ffe5a0',
    },
    'Ритм': {
      color      : '#5a3286',
      background : '#e6cff3',
    },
    'Разработка': {
      color      : '#205a6c',
      background : '#c6dbe1',
    },
    'Конструктор': {
      color      : '#205a6c',
      background : '#c6dbe1',
    },
    'Прочие': {
      color      : '#3d3d3d',
      background : '#e6e6e6',
    },
  },
  [CompanyId.DEMO_PECAR]: {
  },
  [CompanyId.CSS]: {
  },
}
