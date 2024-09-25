import { DashboardBody_css_1d3r8, DashboardBody_demo_pecar, DashboardBody_osnova_g2d7 } from 'entities/dashboard';
import { CompanyId, CompanyData } from '../types';


export const COMPANIES_CONFIG: Record<CompanyId, CompanyData> = {
  [CompanyId.OSNOVA]: {
    id        : CompanyId.OSNOVA,
    dashboard : <DashboardBody_osnova_g2d7 />,
  },
  [CompanyId.CSS]: {
    id        : CompanyId.CSS,
    dashboard : <DashboardBody_css_1d3r8 />,
  },
  [CompanyId.DEMO_PECAR]: {
    id        : CompanyId.DEMO_PECAR,
    dashboard : <DashboardBody_demo_pecar />,
  },
}
