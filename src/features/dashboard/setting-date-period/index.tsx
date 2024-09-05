import { FC, memo, useEffect, useRef, useState } from 'react';
import { MDBox } from 'shared/ui/mui-design-components';
import { pxToRem } from 'app/providers/theme';
import { useSelector } from 'react-redux';
import { actionsDashboard, DashboardPeriodType, selectDateEnd, selectDateStart, selectPeriodType } from 'entities/dashboard';
import { useAppDispatch } from 'shared/lib/hooks';
import { formatDate } from 'shared/helpers/dates';
import { isNotUndefined } from 'shared/lib/validators';
import { PeriodType } from './period-type';
import { getMsFromRef } from './utils';
import { PeriodDate } from './period-dates';
import { SetChangesBtn } from './set-changes-btn';



export interface CheckIsChanged {
  period? : DashboardPeriodType
  start?  : number | undefined
  end?    : number | undefined
}


const useStyles = () => ({
  root: {
    display: 'flex'
  },
  textField: {
    width: pxToRem(120),
    mr: 1
  },
});


export const SettingDatePeriod: FC = memo(() => {
  const sx = useStyles();
  const dispatch = useAppDispatch();
  const storeDateStart  = useSelector(selectDateStart);
  const storeDateEnd    = useSelector(selectDateEnd);
  const storePeriodType = useSelector(selectPeriodType);

  const valueStartRef   = useRef(null);
  const valueEndRef     = useRef(null);

  const [isChanged, setIsChanged] = useState<boolean>(false);
  const [selectedPeriodType, setSelectedPeriodType] = useState<DashboardPeriodType>('' as DashboardPeriodType);

  /** Проверяет произошло ли изменение и устанавливает isChanged */
  const checkIsChanged = ({ start, end, period }: CheckIsChanged) => {
    const checkPeriod = isNotUndefined(period) ? period : DashboardPeriodType;
    const checkStart  = isNotUndefined(start)  ? start  : getMsFromRef(valueStartRef);
    const checkEnd    = isNotUndefined(end)    ? end    : getMsFromRef(valueEndRef);
    
    if (checkPeriod !== storePeriodType) setIsChanged(true)
    else if (checkStart != storeDateStart) setIsChanged(true)
    else if (checkEnd != storeDateEnd) setIsChanged(true)

    else setIsChanged(false)
  };


  // Устанавливаем начальные значения
  useEffect(() => {
    if (storePeriodType) setSelectedPeriodType(storePeriodType);

    if (storeDateStart && valueStartRef.current) {
      // @ts-ignore
      valueStartRef.current.value = formatDate(storeDateStart, "YYYY-MM-DD");
    }
    if (storeDateEnd && valueEndRef.current) {
      // @ts-ignore
      valueEndRef.current.value = formatDate(storeDateEnd, "YYYY-MM-DD");
    }
  }, [storeDateStart, storeDateEnd, storePeriodType]);


  /** Сохраняем все изменения в store */
  const handleSaveChanges = () => {
    dispatch(actionsDashboard.setDatePeriod({
      period: {
        type     : selectedPeriodType,
        prevType : storePeriodType,
        start    : getMsFromRef(valueStartRef),
        end      : getMsFromRef(valueEndRef)
      }
    }));

    setIsChanged(false);
  };


  return (
    <MDBox sx={sx.root}>
      <PeriodType
        selectedPeriodType      = {selectedPeriodType}
        onSetSelectedPeriodType = {setSelectedPeriodType}
        onCheckIsChanged        = {checkIsChanged}
      />

      <PeriodDate
        type             = "start"
        ref              = {valueStartRef}
        onCheckIsChanged = {checkIsChanged}
      />
      <PeriodDate
        type             = "end"
        ref              = {valueEndRef}
        onCheckIsChanged = {checkIsChanged}
      />

      <SetChangesBtn
        isChanged     = {isChanged}
        onSaveChanges = {handleSaveChanges}
      />
    </MDBox>
  )
});
