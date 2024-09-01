import { FC, memo } from 'react';



interface Props {
}


export const DashboardDatebar: FC<Props> = memo(({  }) => {


  return (
    <>
      <DashboardPeriodButton />
      <DashboardPeriodDates />
      <DashboardUpdateButton />
    </>
  )
});
