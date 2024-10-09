import { ColorsConfig } from 'app/providers/theme-old';
import { CompanyId } from 'entities/companies';


export const COMPANY_COLORS_CONFIG: Record<CompanyId, ColorsConfig> = {
  [CompanyId.OSNOVA]: {
  },
  [CompanyId.DEMO_PECAR]: {
  },
  [CompanyId.CSS]: {
    'Общая': {
      color      : '#0a53a8',
      background : '#bfe1f6',
    },
    'Да-Телеком': {
      color      : '#ffdada',
      background : '#c65555',
    },
    'Badcom': {
      color      : '#e5e5e5',
      background : '#3d3d3d',
    },
  },
};
