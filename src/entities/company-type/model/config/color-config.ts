import { ColorsConfig } from 'app/providers/theme';
import { ActivatedCompanyId } from 'entities/company';


export const COMPANY_COLORS_CONFIG: Record<ActivatedCompanyId, ColorsConfig> = {
  [ActivatedCompanyId.OSNOVA]: {
  },
  [ActivatedCompanyId.DEMO_PECAR]: {
  },
  [ActivatedCompanyId.CSS]: {
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
