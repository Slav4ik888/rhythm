import { FC, memo } from 'react';
import { pxToRem } from 'app/providers/theme';
import { MDBox } from 'shared/ui/mui-design-components';
import { actionsDashboard } from 'entities/dashboard';
import { useAppDispatch } from 'shared/lib/hooks';
import { PeriodType, SetPeriodDate } from 'features/dashboard';
import { SetChangesBtn } from './set-changes-btn';



export interface CheckIsChanged {
  start?  : number | undefined
  end?    : number | undefined
}


export const SettingDatePeriod: FC = memo(() => {
  // const dispatch = useAppDispatch();
  

  /** Сохраняем все изменения в store */
  // const handleSaveChanges = () => {
  //   dispatch(actionsDashboard.setDatePeriod({
  //     start : getMsFromRef(valueStartRef),
  //     end   : getMsFromRef(valueEndRef)
  //   }));

  //   setIsChanged(false);
  // };


  return (
    <MDBox display='flex'>
      <PeriodType />

      <SetPeriodDate type="start" />
      <SetPeriodDate type="end" />

      {/* <SetChangesBtn
        isChanged     = {isChanged}
        onSaveChanges = {handleSaveChanges}
      /> */}
    </MDBox>
  )
});
