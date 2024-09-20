import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { DashboardBody_css_1d3r8 } from './companies/css';
import { DashboardBody_demo_pecar } from './companies/demo-pecar';
import { DashboardBody_osnova_g2d7 } from './companies/osnova';



export const DashboardBody = memo(() => {
  console.log('DashboardBody ');
  const { companyId } = useParams();
  console.log('companyId: ', companyId);

  switch (companyId) {
    case 'pecar'       : return <DashboardBody_demo_pecar />;
    case 'osnova_g2d7' : return <DashboardBody_osnova_g2d7 />;
    case 'css_1d3r8'   : return <DashboardBody_css_1d3r8 />;

    default: return <>Empty companyId or unknown...</>
  }
});
