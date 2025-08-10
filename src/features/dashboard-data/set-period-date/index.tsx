import { ChangeEvent, FC, memo, MutableRefObject, useCallback, useEffect, useMemo, useRef } from 'react';
import { pxToRem } from 'shared/styles';
import { getMsFromRef } from './utils';
import { calculateStartDate, PeriodType, useDashboardData } from 'entities/dashboard-data';
import { formatDate } from 'shared/helpers/dates';
import { useCompany } from 'entities/company';
import { MDInput } from 'shared/ui/mui-design-components';



interface Props {
  type: 'start' | 'end'
}


export const SetPeriodDate: FC<Props> = memo(({ type }) => {
  const { paramsCompanyId } = useCompany();
  const { selectedPeriod, setSelectedPeriod } = useDashboardData();
  const ref = useRef<HTMLInputElement>(null);
  const storePeriodType = selectedPeriod?.type;
  const storeDate       = selectedPeriod?.[type];
  const dateStart       = type === 'start';
  const periodNotCustom = storePeriodType !== PeriodType.CUSTOM;

  const disabled = useMemo(() => dateStart && periodNotCustom, [dateStart, periodNotCustom]);


  // Устанавливаем начальные значения
  useEffect(() => {
    if (storeDate && ref.current) { // && ! ref.current?.value) {
      ref.current.value = formatDate(storeDate, 'YYYY-MM-DD');
    }
    if (dateStart && periodNotCustom) {
      const start = calculateStartDate(selectedPeriod.end, storePeriodType);

      // При монтировании, может быть не указана дата (storeSelectPeriod.end) и нельзя обнулять данные в сторадже
      // которые подтянуться чуть позже, иначе они затираются
      if (start) setSelectedPeriod({
        companyId : paramsCompanyId,
        period    : {
          start
        },
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paramsCompanyId, storeDate, storePeriodType, selectedPeriod.end]);


  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    // Validate correct date & > 01-01-1900
    if (new Date(e.target.value)?.getTime() > -2208997817000) {
      setSelectedPeriod({
        companyId : paramsCompanyId,
        period    : { [type]: getMsFromRef(ref as MutableRefObject<HTMLInputElement>) },
      });
    }
  }, [paramsCompanyId, type, setSelectedPeriod]);


  return (
    <MDInput
      // @ts-ignore
      ref      = {ref}
      variant  = 'outlined'
      type     = 'date'
      size     = 'small'
      disabled = {disabled}
      onChange = {handleChange}
      sx       = {{
        width : pxToRem(140),
        mr    : 1
      }}
    />
  )
});
