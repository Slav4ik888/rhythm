import { ChangeEvent, FC, memo, MutableRefObject, useEffect, useMemo, useRef } from 'react';
import { useSelector } from 'react-redux';
import { pxToRem } from 'app/providers/theme-old';
import { TextField } from '@mui/material';
import { calculateStartDate, getMsFromRef } from './utils';
import { actionsDashboard, DashboardPeriodType, selectSelectedPeriod } from 'entities/dashboard';
import { useAppDispatch } from 'shared/lib/hooks';
import { formatDate } from 'shared/helpers/dates';
import { selectCompanyId } from 'entities/companies';



interface Props {
  type: 'start' | 'end'
}


export const SetPeriodDate: FC<Props> = memo(({ type }) => {
  const dispatch = useAppDispatch();
  const ref      = useRef<HTMLInputElement>(null);
  const companyId         = useSelector(selectCompanyId);
  const storeSelectPeriod = useSelector(selectSelectedPeriod);
  const storePeriodType   = storeSelectPeriod?.type;
  const storeDate         = storeSelectPeriod?.[type];
  const dateStart         = type === 'start';
  const periodNotCustom   = storePeriodType !== DashboardPeriodType.CUSTOM;
  
  const disabled = useMemo(() => dateStart && periodNotCustom, [storePeriodType]);
  
  
  // Устанавливаем начальные значения
  useEffect(() => {
    if (storeDate && ref.current) { // && ! ref.current?.value) {
      ref.current.value = formatDate(storeDate, "YYYY-MM-DD");
    }
    if (dateStart && periodNotCustom) {
      const start = calculateStartDate(storeSelectPeriod.end, storePeriodType);
      
      // При монтировании, может быть не указана дата (storeSelectPeriod.end) и нельзя обнулять данные в сторадже
      // которые подтянуться чуть позже, иначе они затираются
      if (start) dispatch(actionsDashboard.setSelectedPeriod({
        period: {
          start
        },
        companyId,
      }));
    }
  }, [storeDate, storePeriodType, storeSelectPeriod.end]);


  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // Validate correct date & > 01-01-1900
    if (new Date(e.target.value)?.getTime() > -2208997817000) {

      dispatch(actionsDashboard.setSelectedPeriod({
        period: { [type]: getMsFromRef(ref as MutableRefObject<HTMLInputElement>) },
        companyId,
      }));
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
