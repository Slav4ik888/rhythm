import { FC, memo } from 'react';
import { useUser } from 'entities/user';
import { DashboardSetEditBtnContainer } from './ui';



export const DashboardSetEditBtn: FC = memo(() => {
  const { isEditAccess } = useUser();


  if (! isEditAccess) return null;

  return (
    <DashboardSetEditBtnContainer />
  )
});
