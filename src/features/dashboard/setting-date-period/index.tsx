import { ChangeEvent, FC, memo, ReactNode, useEffect, useRef, useState } from 'react';
import { MDBox, MDButton, MDTypography } from 'shared/ui/mui-design-components';
import { pxToRem } from 'app/providers/theme';
import { useSelector } from 'react-redux';
import { actionsDashboard, arrayDashboardPeriod, DashboardPeriod, selectDateEnd, selectDateStart, selectSelectedPeriod } from 'entities/dashboard';
import { useAppDispatch } from 'shared/lib/hooks';
import { formatDate } from 'shared/helpers/dates';
import { FormControl, MenuItem, TextField } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';



const useStyles = () => ({
  textField: {
    width: pxToRem(120),
    mr: 1
  }
});


interface Props {
}


export const SettingDatePeriod: FC<Props> = memo(({ }) => {
  const sx = useStyles();
  const dispatch = useAppDispatch();
  const selectedPeriod = useSelector(selectSelectedPeriod); 
  const dateStart = useSelector(selectDateStart); 
  const dateEnd = useSelector(selectDateEnd);

  // Для установки начальных значений
  const valueStartRef = useRef(null);
  const valueEndRef = useRef(null);

  const [isChanged, setIsChanged] = useState<boolean>(false);
  const [dashboardPeriod, setDashboardPeriod] = useState<DashboardPeriod>('' as DashboardPeriod);

  const checkIsChangedDate = (start: number | undefined, end: number | undefined) => {
    if (start === dateStart && end === dateEnd) setIsChanged(false);
    else setIsChanged(true);
  };


  // Устанавливаем начальные значения
  useEffect(() => {
    if (selectedPeriod) {
      console.log('selectedPeriod: ', selectedPeriod);
      setDashboardPeriod(selectedPeriod);
    }

    if (dateStart && valueStartRef.current) {
      // @ts-ignore
      valueStartRef.current.value = formatDate(dateStart, "YYYY-MM-DD");
    }
    if (dateEnd && valueEndRef.current) {
      // @ts-ignore
      valueEndRef.current.value = formatDate(dateEnd, "YYYY-MM-DD");
    }
    
  }, [dateStart, dateEnd, selectedPeriod]);


  
  const handleChangeStart = (e: ChangeEvent<HTMLInputElement>) => checkIsChangedDate(new Date(e.target.value).getTime(), dateEnd);
  const handleChangeEnd   = (e: ChangeEvent<HTMLInputElement>) => checkIsChangedDate(dateStart, new Date(e.target.value).getTime());

  const handleClick = () => {
    console.log('dashboardPeriod: ', dashboardPeriod);

    dispatch(actionsDashboard.setDatePeriod({
      selectedPeriod : dashboardPeriod,
      // @ts-ignore
      dateStart      : new Date(valueStartRef?.current?.value).getTime(),
      // @ts-ignore
      dateEnd        : new Date(valueEndRef?.current?.value).getTime()
    }));

    setIsChanged(false);
  };


  const handleChangePeriod = (e: SelectChangeEvent) => {
    console.log('e.target.value: ', e.target.value);
    setDashboardPeriod(e.target.value as DashboardPeriod);
  };


  return (
    <>
      <MDBox>
        <FormControl sx={{ mr: 1, width: 120 }}>
          <Select
            value={dashboardPeriod}
            variant='outlined'
            sx={{ height: pxToRem(38) }}
            onChange={handleChangePeriod}
          >
            {
              arrayDashboardPeriod.map((item) => <MenuItem
                key={item}
                value={item as unknown as string}
              >
                {item as unknown as string}
              </MenuItem>)
            }
          </Select>
        </FormControl>

        <TextField
          inputRef = {valueStartRef}
          variant  = "outlined"
          type     = "date"
          size     = "small"
          sx       = {sx.textField}
          onChange = {handleChangeStart}
        />
        <TextField
          inputRef = {valueEndRef}
          variant  = "outlined"
          type     = "date"
          size     = "small"
          sx       = {sx.textField}
          onChange = {handleChangeEnd}
        />
      </MDBox>

      {
        isChanged &&
          <MDBox>
            <MDButton
              variant = "gradient"
              color   = "secondary"
              type    = "button"
              onClick = {handleClick}
            >
              Применить
            </MDButton>
          </MDBox>
      }
    </>
  )
});
