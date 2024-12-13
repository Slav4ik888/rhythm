import { memo, useEffect } from 'react';
import { useCompany } from 'entities/company';
import { getInitialState, useDashboard } from 'entities/dashboard';
import { DashboardBodyContentItem } from './content-item';
import { DashboardBodyContentRender } from './render-items';



export const DashboardBodyContent = memo(() => {
  console.log('DashboardBodyContent');
  const { parentsCardItems } = useDashboard();


  // const sortedBlocks = [...config.blocks].sort((a, b) => a.order - b.order);

      
  return (
    <DashboardBodyContentRender
      parentsCardItems = {parentsCardItems}
      parentId         = 'no_parentId'
    />
  )
});
