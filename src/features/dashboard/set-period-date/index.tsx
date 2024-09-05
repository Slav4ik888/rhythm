import { ChangeEvent, FC, memo, MutableRefObject, useEffect, useMemo, useRef } from 'react';
import { useSelector } from 'react-redux';
import { pxToRem } from 'app/providers/theme';
import { TextField } from '@mui/material';
import { getMsFromRef } from './utils';
import { actionsDashboard, DashboardPeriodType, selectPeriodType, selectPeriod } from 'entities/dashboard';
import { useAppDispatch } from 'shared/lib/hooks';
import { formatDate } from 'shared/helpers/dates';



interface Props {
  type: 'start' | 'end'
}


export const SetPeriodDate: FC<Props> = memo(({ type }) => {
  const dispatch = useAppDispatch();
  const ref      = useRef<HTMLInputElement>(null);
  const storePeriodType = useSelector(selectPeriodType);
  const storeSelectPeriod = useSelector(selectPeriod);
  const storeDate = storeSelectPeriod[type];
  
  const disabled = useMemo(() => storePeriodType !== DashboardPeriodType.CUSTOM && type === 'start'
    , [storePeriodType]);
  
  
  // Устанавливаем начальные значения
  useEffect(() => {
    if (storeDate && ref.current && ! ref.current?.value) {
      ref.current.value = formatDate(storeDate, "YYYY-MM-DD");
    }
  }, [storeDate]);


  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // Validate correct date & > 01-01-1900
    if (new Date(e.target.value)?.getTime() > -2208997817000) {
      dispatch(actionsDashboard.setDatePeriod({ [type]: getMsFromRef(ref as MutableRefObject<HTMLInputElement>) }));
    }
  };


  return (
    <TextField
      inputRef = {ref}
      variant  = "outlined"
      type     = "date"
      size     = "small"
      disabled = {disabled}
      sx       = {{ width: pxToRem(120), mr: 1 }}
      onChange = {handleChange}
    />
  )
});
