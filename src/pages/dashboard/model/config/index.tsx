import { DashboardBody_css_1d3r8, DashboardBody_demo_pecar, DashboardBody_osnova_g2d7 } from '../../ui/body/templates';
import { ActivatedCompanyId } from 'entities/company';



export const COMPANIES_CONFIG: Record<ActivatedCompanyId, any> = {
  [ActivatedCompanyId.OSNOVA]: {
    id        : ActivatedCompanyId.OSNOVA,
    dashboard : <DashboardBody_osnova_g2d7 />,
  },
  [ActivatedCompanyId.CSS]: {
    id        : ActivatedCompanyId.CSS,
    dashboard : <DashboardBody_css_1d3r8 />,
  },
  [ActivatedCompanyId.DEMO_PECAR]: {
    id        : ActivatedCompanyId.DEMO_PECAR,
    dashboard : <DashboardBody_demo_pecar />,
  },
}
