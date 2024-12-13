import { memo, useEffect } from 'react';
import { useCompany } from 'entities/company';
import { getInitialState, useDashboard } from 'entities/dashboard';
import { DashboardBodyContentItem } from './content-item';




export const DashboardBodyContent = memo(() => {
  console.log('DashboardBodyContent');
  const { cardItems } = useDashboard();


  // const sortedBlocks = [...config.blocks].sort((a, b) => a.order - b.order);

      
  return (
    <>
      {
        cardItems.map(item => <DashboardBodyContentItem key={item.id} item={item} />)
      }
    </>
  )
});
