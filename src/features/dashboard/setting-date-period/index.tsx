import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { FC, memo, useEffect, useRef, useState } from 'react';
import { MDBox, MDButton, MDTypography } from 'shared/ui/mui-design-components';
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { pxToRem } from 'app/providers/theme';
import { useSelector } from 'react-redux';
import { actionsDashboard, DashboardPeriod, selectDateEnd, selectDateStart } from 'entities/dashboard';
import { useAppDispatch } from 'shared/lib/hooks';


interface Props {
}


export const SettingDatePeriod: FC<Props> = memo(({ }) => {
  const dispatch = useAppDispatch();
  const dateStart = useSelector(selectDateStart);
  console.log('dateStart: ', dateStart);
  const dateEnd = useSelector(selectDateEnd);
  console.log('dateEnd: ', dateEnd);

  const valueStartRef = useRef(null);
  const valueEndRef = useRef(null);
      // @ts-ignore
  console.log('valueEndRef: ', valueEndRef?.current?.value);

  // const [valueStart, setValueStart] = useState<Dayjs | null>(); // '2022-04-17'
  // const [valueEnd, setValueEnd] = useState<Dayjs | null>(); // '2024-04-17'

  const [isChanged, setIsChanged] = useState<boolean>(false);

  const isChangedDate = (start: number | undefined, end: number | undefined) => {
    if (start === dateStart && end === dateEnd) setIsChanged(false);
    else setIsChanged(true);
  };


  // Устанавливаем начальные значения
  useEffect(() => {
    console.log(1111111111);
    if (dateStart && valueStartRef.current) {
      console.log(222222222);

      // @ts-ignore
      valueStartRef.current.value = dayjs(dateStart);
    }
    if (dateEnd && valueEndRef.current) {
      console.log(333333333);
      // @ts-ignore
      valueEndRef.current.value = dayjs(dateEnd);
    }
    
    // setValueStart(dayjs(dateStart));
    // setValueEnd(dayjs(dateEnd));
    isChangedDate(dateStart, dateEnd);
    // @ts-ignore
  }, [dateStart, dateEnd, valueStartRef?.current?.value, valueEndRef?.current?.value]);


  // При изменении значений
  useEffect(() => {
    console.log("изменении значений");
    // @ts-ignore
    console.log('valueStartRef.current.value: ', valueStartRef?.current?.value);
    // @ts-ignore
    console.log('valueEndRef.current.value: ', valueEndRef?.current?.value);
  
    // @ts-ignore
  }, [valueStartRef?.current?.value, valueEndRef?.current?.value])
  

  // -----------------------------------------------------------------
  
  
  const handleChangeStart = (newValue: Dayjs | null) => {
    console.log('newValue: ', newValue);
    console.log('newValue?.unix(): ', newValue?.unix());
    // @ts-ignore
    console.log('valueStartRef.current.value: ', valueStartRef?.current?.value);
    isChangedDate(newValue?.unix(), dateEnd);
    
    // setValueStart(newValue);
    // isChangedDate(newValue?.unix(), dateEnd);
  };

  // const handleChangeEnd = (newValue: Dayjs | null) => {
  //   setValueEnd(newValue);
  //   isChangedDate(dateStart, newValue?.unix());
  // };

  const handleClick = () => {
    console.log('handleClick');
    // console.log('handleClick valueStart: ', valueStart);
    // console.log('handleClick valueEnd: ', valueEnd);
    dispatch(actionsDashboard.setDatePeriod({
      selectedPeriod : DashboardPeriod.CUSTOM,
      // @ts-ignore
      dateStart      : valueStartRef.current?.value,
      // @ts-ignore
      dateEnd        : valueEndRef.current?.value
      // dateStart      : valueStart?.unix(),
      // dateEnd        : valueEnd?.unix()
    }));
  };


  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <MDBox position="relative">
          <MDTypography position="absolute" top={pxToRem(-16)} fontSize={pxToRem(10)} color="text">Период</MDTypography>

          <DatePicker
            ref          = {valueStartRef}
            // defaultValue = {valueStart}
            onChange = {handleChangeStart}
            sx           = {{ width: pxToRem(150), mr: 1 }}
          />
          <DatePicker
            ref          = {valueEndRef}
            // defaultValue = {valueEnd}
            sx           = {{ width: pxToRem(150), mr: 1 }}
          />
          {/* <DatePicker
            value    = {valueStart}
            sx       = {{ width: pxToRem(150), mr: 1 }}
            onChange = {handleChangeStart}
          />
          <DatePicker
            value    = {valueEnd}
            sx       = {{ width: pxToRem(150), mr: 1 }}
            onChange = {handleChangeEnd}
          /> */}
        </MDBox>
      </LocalizationProvider>

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
