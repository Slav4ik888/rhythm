import { memo } from 'react';
import { useLocation } from 'react-router-dom';
import { DashboardGroupDepartment7 } from './departments/department_7';
import { DashboardGroupDepartment1 } from './departments/department_1';
import { DashboardGroupDepartment2 } from './departments/department_2';
import { DashboardGroupDepartment3 } from './departments/department_3';
import { DashboardGroupDepartment4 } from './departments/department_4';
import { DashboardGroupDepartment5 } from './departments/department_5';
import { DashboardGroupDepartment6 } from './departments/department_6';
import { DashboardBodyMain } from './main';
import { CSS_SubRouteName } from 'entities/dashboard/model/config/sidenav-routes-list/css/routes';



export const DashboardBody_css_1d3r8 = memo(() => {
  console.log('CSS DashboardBody ');
  const { pathname } = useLocation();
  const subPathname = pathname?.split('/')?.[2];
  console.log('[pathname]: ', pathname, ' [sub]: ', subPathname);


  switch (subPathname) {
    case CSS_SubRouteName.DEPARTMENT_7: return <DashboardGroupDepartment7 />
    case CSS_SubRouteName.DEPARTMENT_1: return <DashboardGroupDepartment1 />
    case CSS_SubRouteName.DEPARTMENT_2: return <DashboardGroupDepartment2 />
    case CSS_SubRouteName.DEPARTMENT_3: return <DashboardGroupDepartment3 />
    case CSS_SubRouteName.DEPARTMENT_4: return <DashboardGroupDepartment4 />
    case CSS_SubRouteName.DEPARTMENT_5: return <DashboardGroupDepartment5 />
    case CSS_SubRouteName.DEPARTMENT_6: return <DashboardGroupDepartment6 />

    default: return <DashboardBodyMain />
  }
});
