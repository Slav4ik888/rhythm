import { FC, memo, useState } from 'react';
import { pxToRem } from 'app/providers/theme';
import { actionsDashboard, arrayDashboardPeriodType, DashboardPeriodType, selectPeriodType } from 'entities/dashboard';
import { FormControl, MenuItem, Chip } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks';
import { PeriodTypeChip } from './chip';




const useStyles = () => ({
  root: {
    position: 'relative',
    display: 'flex',
    width: 120,
    mr: 1
  },
  select: {
    visibility: 'hidden',
    opacity: 0,
    height: pxToRem(38)
  },
  chip: {
    position: 'absolute',
    top: pxToRem(3),
    right: pxToRem(10),
    zIndex: 10
  }
});



export const PeriodType: FC = memo(() => {
  const sx = useStyles();
  const dispatch = useAppDispatch();
  const storePeriodType = useSelector(selectPeriodType);
  const [openSelect, setOpenSelect] = useState(false);


  const handleChangePeriod = (e: SelectChangeEvent) => {
    dispatch(actionsDashboard.setDatePeriod({ type: e.target.value as DashboardPeriodType }));
    setOpenSelect(false);
  };

  const handleClickChip = () => setOpenSelect(true);
  const handleSelectClose = () => setOpenSelect(false);


  return (
    <FormControl sx={sx.root}>
      <PeriodTypeChip
        storePeriodType={storePeriodType}
        onClick={handleClickChip}
      />

      <Select
        variant  = 'standard'
        open     = {openSelect}
        // value    = {storePeriodType}
        sx       = {sx.select}
        onClose  = {handleSelectClose}
        onChange = {handleChangePeriod}
      >
        {
          arrayDashboardPeriodType.map((item) => <MenuItem
            key   = {item}
            value = {item as unknown as string}
          >
            {item as unknown as string}
          </MenuItem>)
        }
      </Select>
    </FormControl>
  )
});
